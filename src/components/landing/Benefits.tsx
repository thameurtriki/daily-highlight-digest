import { Check, Heart, Shield, RefreshCcw, Inbox, X } from "lucide-react";

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
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
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

          {/* Comparison */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              How we compare
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 pr-4 font-medium text-foreground">Feature</th>
                    <th className="text-center py-4 px-4 font-medium text-primary">Daily Highlights</th>
                    <th className="text-center py-4 pl-4 font-medium text-muted-foreground">Readwise</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-4 text-muted-foreground">Price</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-primary font-semibold">
                        <Check className="w-4 h-4" /> Free
                      </span>
                    </td>
                    <td className="py-4 pl-4 text-center text-muted-foreground">$5.59-$9.99/mo</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-4 text-muted-foreground">Daily email digests</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="py-4 pl-4 text-center">
                      <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-4 text-muted-foreground">Spaced repetition</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="py-4 pl-4 text-center">
                      <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-4 text-muted-foreground">No app required</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="py-4 pl-4 text-center">
                      <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 text-muted-foreground">Simple setup</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-primary font-semibold">
                        <Check className="w-4 h-4" /> 2 min
                      </span>
                    </td>
                    <td className="py-4 pl-4 text-center text-muted-foreground">Account + sync setup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
