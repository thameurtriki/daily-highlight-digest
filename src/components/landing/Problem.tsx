import { BookX, Lightbulb, TrendingUp } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Problem statement */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
              Your highlights are forgotten
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              You've highlighted hundreds of passages. When's the last time you revisited them? Your Kobo is full of wisdom, insights, and favorite quotes—all gathering digital dust.
            </p>
          </div>

          {/* Problem → Solution cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <BookX className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                The Problem
              </h3>
              <p className="text-muted-foreground">
                Highlights sit unread in your e-reader, never to be seen again. All that effort, wasted.
              </p>
            </div>

            <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                The Solution
              </h3>
              <p className="text-muted-foreground">
                Daily emails bring your highlights back to life using spaced repetition—the proven method for retention.
              </p>
            </div>

            <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                The Outcome
              </h3>
              <p className="text-muted-foreground">
                Actually retain and reflect on what you've read. Rediscover insights at the perfect moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
