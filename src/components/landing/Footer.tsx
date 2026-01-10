import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif font-semibold text-foreground">Daily Highlights</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a 
                href="mailto:daily@dailyhighlights.email" 
                className="hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a 
                href="#" 
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a 
                href="#" 
                className="hover:text-foreground transition-colors"
              >
                Unsubscribe
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 Daily Highlights. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
