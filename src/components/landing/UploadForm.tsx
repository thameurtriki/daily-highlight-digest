import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Folder, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import initSqlJs, { Database } from "sql.js";

interface Highlight {
  id: string;
  text: string;
  book_title: string;
  author: string;
  created_at: string;
  chapter: string;
}

type FormStatus = "idle" | "selecting" | "processing" | "submitting" | "success" | "error";

const UploadForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [highlightsCount, setHighlightsCount] = useState(0);
  const [folderName, setFolderName] = useState<string | null>(null);
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  const findSqliteFile = async (dirHandle: FileSystemDirectoryHandle): Promise<File | null> => {
    // First, look for .kobo folder
    try {
      const koboDir = await dirHandle.getDirectoryHandle(".kobo");
      const fileHandle = await koboDir.getFileHandle("KoboReader.sqlite");
      return await fileHandle.getFile();
    } catch {
      // .kobo folder not found, try root
    }

    // Try root directory
    try {
      const fileHandle = await dirHandle.getFileHandle("KoboReader.sqlite");
      return await fileHandle.getFile();
    } catch {
      // Not in root either
    }

    return null;
  };

  const extractHighlights = async (file: File): Promise<Highlight[]> => {
    const SQL = await initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    });

    const arrayBuffer = await file.arrayBuffer();
    const db: Database = new SQL.Database(new Uint8Array(arrayBuffer));

    const query = `
      SELECT 
        Bookmark.BookmarkID as id,
        Bookmark.Text as text,
        content.Title as book_title,
        content.Attribution as author,
        Bookmark.DateCreated as created_at,
        Bookmark.ContentID as chapter
      FROM Bookmark
      LEFT JOIN content ON Bookmark.VolumeID = content.ContentID
      WHERE Bookmark.Text IS NOT NULL 
        AND Bookmark.Text != ''
      ORDER BY Bookmark.DateCreated DESC
    `;

    const results = db.exec(query);
    db.close();

    if (!results.length || !results[0].values.length) {
      return [];
    }

    return results[0].values.map((row) => ({
      id: String(row[0] || ""),
      text: String(row[1] || ""),
      book_title: String(row[2] || "Unknown Book"),
      author: String(row[3] || "Unknown Author"),
      created_at: String(row[4] || ""),
      chapter: String(row[5] || ""),
    }));
  };

  const handleSelectFolder = useCallback(async () => {
    if (!("showDirectoryPicker" in window)) {
      setError("Your browser doesn't support folder selection. Please use Chrome, Edge, or a Chromium-based browser.");
      setStatus("error");
      return;
    }

    try {
      setStatus("selecting");
      setError(null);

      const dirHandle = await (window as any).showDirectoryPicker();
      setFolderName(dirHandle.name);

      setStatus("processing");

      const sqliteFile = await findSqliteFile(dirHandle);

      if (!sqliteFile) {
        throw new Error("Could not find KoboReader.sqlite. Make sure you selected your Kobo e-reader drive.");
      }

      const extractedHighlights = await extractHighlights(sqliteFile);

      if (extractedHighlights.length === 0) {
        throw new Error("No highlights found in your Kobo database. Have you highlighted any passages?");
      }

      setHighlights(extractedHighlights);
      setHighlightsCount(extractedHighlights.length);
      setStatus("idle");
    } catch (err: any) {
      if (err.name === "AbortError") {
        setStatus("idle");
        return;
      }
      setError(err.message || "An error occurred while processing your Kobo data.");
      setStatus("error");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (highlights.length === 0) {
      setError("Please select your Kobo folder first.");
      setStatus("error");
      return;
    }

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");
      setError(null);

      const response = await fetch("https://dailyhighlights.email/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          highlights,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit highlights.");
      }

      setStatus("success");
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
          You're all set!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We've received {highlightsCount} highlights. You'll start receiving 3 random highlights at 7 AM UTC every day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Instructions */}
      <div className="bg-secondary/50 rounded-xl p-5 text-left">
        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
          <span className="text-lg">📂</span> How to find your Kobo folder:
        </h4>
        <ol className="space-y-2 text-sm text-muted-foreground">
          <li><strong className="text-foreground">1.</strong> Connect your Kobo e-reader to your computer using USB</li>
          <li><strong className="text-foreground">2.</strong> Wait a few seconds for your computer to detect it</li>
          <li><strong className="text-foreground">3.</strong> Find the drive named <strong className="text-foreground">"KOBOeReader"</strong></li>
          <li><strong className="text-foreground">4.</strong> Click the button below and select that drive</li>
        </ol>
        <p className="mt-3 text-sm text-primary">
          ✨ We'll automatically find your highlights file!
        </p>
      </div>

      {/* Email input */}
      <div className="space-y-2 text-left">
        <Label htmlFor="email">Your Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      {/* Folder selector */}
      <div className="space-y-2 text-left">
        <Label>Kobo Database</Label>
        <Button
          type="button"
          variant="outline"
          className="w-full h-14 border-dashed border-2 hover:border-primary hover:bg-primary/5"
          onClick={handleSelectFolder}
          disabled={status === "selecting" || status === "processing"}
        >
          {status === "selecting" || status === "processing" ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              {status === "selecting" ? "Waiting for selection..." : "Processing highlights..."}
            </>
          ) : folderName ? (
            <>
              <Folder className="w-5 h-5 mr-2 text-primary" />
              <span className="text-primary">{folderName}</span>
              <span className="ml-2 text-muted-foreground">({highlightsCount} highlights)</span>
            </>
          ) : (
            <>
              <Folder className="w-5 h-5 mr-2" />
              Select Kobo Folder
            </>
          )}
        </Button>
      </div>

      {/* Error message */}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 text-destructive text-sm text-left">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={highlightsCount === 0 || status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Upload & Start Daily Emails"
        )}
      </Button>
    </form>
  );
};

export default UploadForm;
