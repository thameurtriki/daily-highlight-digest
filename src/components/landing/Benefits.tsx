import { Heart, Shield, RefreshCcw, Inbox } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Free forever",
    description: "No credit card required. No hidden fees. Just free.",
  },
  {
    icon: Inbox,
    title: "No app to install",
    description: "Works entirely in your email inbox. Nothing to download.",
  },
  {
    icon: Shield,
    title: "Privacy-focused",
    description: "Your highlights stay in our secure database. We never share your data.",
  },
  {
    icon: RefreshCcw,
    title: "Smart deduplication",
    description: "Won't send the same highlight twice within 30 days.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Why Daily Highlights?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Simple, free, and effective. Here's what makes us different.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
