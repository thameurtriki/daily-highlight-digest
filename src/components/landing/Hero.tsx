import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary text-secondary-foreground text-sm font-medium animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Free forever • No app required</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
            Rediscover your Kobo highlights
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up text-balance" style={{ animationDelay: "0.2s" }}>
            3 random quotes delivered to your inbox daily. Using spaced repetition to help you retain what you've read.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://dailyhighlights.email">
                Get Started
                <Mail className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#how-it-works">
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative max-w-lg mx-auto">
              {/* Email preview card */}
              <div className="bg-card rounded-2xl shadow-soft p-6 sm:p-8 border border-border">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground">Daily Highlights</p>
                    <p className="text-sm text-muted-foreground">Your morning reading digest</p>
                  </div>
                </div>
                <blockquote className="text-left">
                  <p className="font-serif text-lg sm:text-xl text-foreground italic leading-relaxed">
                    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."
                  </p>
                  <footer className="mt-4 text-sm text-muted-foreground">
                    From your highlights
                  </footer>
                </blockquote>
              </div>
              
              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-xl rotate-12 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-lg -rotate-6 animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
