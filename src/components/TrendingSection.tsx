import { Button } from "@/components/ui/button";
import trendingChocolates from "@/assets/trending-chocolates.jpg";
import trendingLifestyle from "@/assets/trending-lifestyle.jpg";

const TrendingSection = () => {
  const trendingItems = [
    {
      image: trendingChocolates,
      text: "In the heart of sweetness, dreams melt and mingle, a symphony of flavors in each delicate piece.",
      buttonText: "Explore",
      buttonVariant: "default" as const,
    },
    {
      image: trendingLifestyle,
      text: "We take pride in creating exquisite handcrafted artisan chocolates that are a feast for the senses.",
      buttonText: "Get in touch",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Trending Now
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {trendingItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`Trending chocolate ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <p className="font-playfair text-lg md:text-xl leading-relaxed text-muted-foreground mb-6 italic">
                  "{item.text}"
                </p>
                <Button 
                  variant={item.buttonVariant}
                  className={item.buttonVariant === "default" 
                    ? "bg-gradient-chocolate hover:shadow-hover transition-all duration-300" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  }
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;