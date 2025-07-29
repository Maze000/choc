import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PurchaseModal from './PurchaseModal';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  fromPrice?: boolean;
  soldOut?: boolean;
  isNew?: boolean;
}

const ProductCard = ({ 
  id,
  image, 
  title, 
  price, 
  originalPrice, 
  fromPrice = false, 
  soldOut = false, 
  isNew = false 
}: ProductCardProps) => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  
  const handleAddToCart = () => {
    setIsPurchaseModalOpen(true);
  };
  
  const product = {
    id,
    image,
    title,
    price,
    originalPrice,
    fromPrice,
    soldOut,
    isNew
  };
  return (
    <div className="bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              New
            </Badge>
          )}
          {soldOut && (
            <Badge variant="secondary" className="bg-muted text-muted-foreground">
              Sold Out
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-medium text-foreground mb-3 leading-tight line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {fromPrice && (
              <span className="text-sm text-muted-foreground">From</span>
            )}
            <span className="text-lg font-semibold text-primary">
              ${price.toFixed(2)} NZD
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <Button 
          className={soldOut 
            ? "w-full bg-muted text-muted-foreground cursor-not-allowed" 
            : "w-full bg-gradient-chocolate hover:shadow-hover transition-all duration-300"
          }
          disabled={soldOut}
          onClick={handleAddToCart}
        >
          {soldOut ? "Notify when available" : "Add to Cart"}
        </Button>
      </div>
      
      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default ProductCard;