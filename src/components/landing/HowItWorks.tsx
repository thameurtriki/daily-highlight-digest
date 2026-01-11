import { Upload, AtSign, Mail, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect your Kobo",
    description: "Plug in your Kobo e-reader and we'll automatically fetch your highlights. No file hunting required.",
  },
  {
    number: "02",
    icon: AtSign,
    title: "Enter your email",
    description: "Provide your email address where you'd like to receive your daily highlight digests.",
  },
  {
    number: "03",
    icon: Mail,
    title: "Get daily emails",
    description: "Receive 3 random highlights every morning at 7 AM UTC. Simple, consistent, effective.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Simple Setup
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get started in under 2 minutes. No app to install, no account to create.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            <div className="grid md:grid-cols-3 gap-8 sm:gap-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step circle */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center shadow-soft group-hover:border-primary transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6">
                      <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
