import ProductCard from "./ProductCard";
import ChocolateCarousel from "./ChocolateCarousel";
import productBonbonVanilla from "@/assets/product-bonbon-vanilla.jpg";
import productTruffles from "@/assets/product-truffles.jpg";
import productCoffeeBonbon from "@/assets/product-coffee-bonbon.jpg";
import productIrishCream from "@/assets/product-irish-cream.jpg";
import productDesignShapes from "@/assets/product-design-shapes.jpg";

const FeaturedCollection = () => {
  const products = [
    {
      id: "1",
      image: productBonbonVanilla,
      title: "54% Belgian dark chocolate Bonbon with Galliano Vanilla liqueur",
      price: 24.99,
      isNew: true,
    },
    {
      id: "2", 
      image: productTruffles,
      title: "54% Belgian Dark Chocolate Truffles covered in Cacao",
      price: 19.99,
      originalPrice: 24.99,
    },
    {
      id: "3",
      image: productCoffeeBonbon,
      title: "54% cacao Belgian Dark Chocolate Bonbon with premium Colombian Coffee",
      price: 26.99,
    },
    {
      id: "4",
      image: productIrishCream,
      title: "70% Belgian Dark Chocolate Bonbon with Irish Cream Baileys",
      price: 28.99,
      soldOut: true,
    },
    {
      id: "5",
      image: productDesignShapes,
      title: "70% Belgian Dark chocolate Design Leaves / Flames",
      price: 22.99,
      fromPrice: true,
    },
    {
      id: "6",
      image: productBonbonVanilla,
      title: "Limited Edition Whiskey Ganache Collection",
      price: 34.99,
      isNew: true,
    },
  ];

  return (
    <section id="catalog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted selection of premium Belgian chocolates and artisan bonbons
          </p>
        </div>
        
        {/* Chocolate Carousel */}
        <div className="mb-16">
          <ChocolateCarousel />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;