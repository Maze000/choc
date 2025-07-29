import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chocolate.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-[70vh] md:h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="bg-background/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-warm">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Indulge in Artisan Chocolates
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Our chocolates are meticulously crafted to deliver pure bliss with every bite.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-chocolate hover:shadow-hover transition-all duration-300 font-semibold px-8 py-6 text-lg"
            >
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;