import UploadForm from "./UploadForm";

const CTA = () => {
  return (
    <section id="get-started" className="py-20 sm:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Ready to rediscover your highlights?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10">
            Connect your Kobo and start receiving daily highlight emails in under 2 minutes.
          </p>
          
          {/* Native upload form */}
          <div className="bg-card rounded-2xl border border-border shadow-soft p-6 sm:p-8">
            <UploadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
