const QuoteSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium text-primary leading-relaxed italic">
            "We carefully handcraft artisan bonbons of chocolates, creating meaningful experiences people can remember."
          </blockquote>
          <div className="mt-8">
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;