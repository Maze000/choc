import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">
            Sign up for updates
          </h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know about new arrivals and exclusive offers
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border-border focus:border-primary transition-colors"
            />
            <Button 
              type="submit"
              className="bg-gradient-chocolate hover:shadow-hover transition-all duration-300 px-6"
              size="lg"
            >
              <ArrowRight size={20} />
            </Button>
          </form>
          
          <p className="text-sm text-accent font-semibold mt-6 tracking-wide">
            SIGN UP FOR 10% OFF YOUR FIRST PURCHASE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;