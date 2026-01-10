import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Ready to rediscover your highlights?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10">
            Start receiving daily highlight emails in under 2 minutes. Free forever.
          </p>
          
          <Button variant="hero" size="xl" asChild className="group">
            <a href="https://dailyhighlights.email">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Unsubscribe anytime with one click
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
