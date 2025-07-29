import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import productBonbonVanilla from "@/assets/product-bonbon-vanilla.jpg";
import productTruffles from "@/assets/product-truffles.jpg";
import productCoffeeBonbon from "@/assets/product-coffee-bonbon.jpg";
import productIrishCream from "@/assets/product-irish-cream.jpg";
import productDesignShapes from "@/assets/product-design-shapes.jpg";

const ChocolateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof chocolateImages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % chocolateImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + chocolateImages.length) % chocolateImages.length);
  };

  const handleImageClick = (chocolate: typeof chocolateImages[0]) => {
    setSelectedImage(chocolate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const chocolateImages = [
    {
      id: 1,
      image: productBonbonVanilla,
      title: "Belgian Dark Chocolate Bonbon with Vanilla",
      description: "Handcrafted with premium Galliano Vanilla liqueur"
    },
    {
      id: 2,
      image: productTruffles,
      title: "Dark Chocolate Truffles",
      description: "Covered in rich cacao powder"
    },
    {
      id: 3,
      image: productCoffeeBonbon,
      title: "Coffee Bonbon",
      description: "Infused with premium Colombian coffee"
    },
    {
      id: 4,
      image: productIrishCream,
      title: "Irish Cream Bonbon",
      description: "Made with authentic Baileys Irish Cream"
    },
    {
      id: 5,
      image: productDesignShapes,
      title: "Artisan Design Chocolates",
      description: "Beautiful leaf and flame shaped chocolates"
    }
  ];

  return (
    <>
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {chocolateImages.map((chocolate) => (
              <div key={chocolate.id} className="w-full flex-shrink-0 px-4 sm:px-6">
                <div 
                  className="relative group cursor-pointer active:scale-95 transition-transform duration-200"
                  onClick={() => handleImageClick(chocolate)}
                >
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md">
                    <img
                      src={chocolate.image}
                      alt={chocolate.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                    <div className="p-3 sm:p-4 text-white w-full">
                      <h3 className="font-playfair text-sm sm:text-lg font-semibold mb-1 line-clamp-2">
                        {chocolate.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                        {chocolate.description}
                      </p>
                    </div>
                  </div>
                  {/* Click indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons - Hidden on mobile, visible on larger screens */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-amber-800 hover:bg-amber-700 text-white border-amber-800 hover:border-amber-700 shadow-lg z-10 hidden sm:flex"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-amber-800 hover:bg-amber-700 text-white border-amber-800 hover:border-amber-700 shadow-lg z-10 hidden sm:flex"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-3">
          {chocolateImages.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full transition-all duration-300 active:scale-125 ${
                index === currentIndex 
                  ? 'bg-amber-800 shadow-lg scale-110' 
                  : 'bg-amber-300 hover:bg-amber-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        {/* Mobile instruction */}
        <div className="flex justify-center mt-3 sm:hidden">
          <div className="text-xs text-muted-foreground bg-amber-50 px-3 py-1 rounded-full">
            👆 Toca los puntos o la imagen para navegar
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-sm sm:max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-transparent border-none mx-2 my-4 sm:m-4">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-square max-h-[70vh] sm:max-h-[80vh]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChocolateCarousel;
