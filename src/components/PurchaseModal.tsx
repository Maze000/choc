import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingCart, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    fromPrice?: boolean;
    soldOut?: boolean;
    isNew?: boolean;
  };
}

const PurchaseModal = ({ isOpen, onClose, product }: PurchaseModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('regular');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    // Simulate purchase process
    setTimeout(() => {
      setIsProcessing(false);
      alert(`¡Gracias por tu compra! ${quantity}x ${product.title} ha sido agregado al carrito.`);
      onClose();
    }, 2000);
  };

  const totalPrice = product.price * quantity;
  const savings = product.originalPrice ? (product.originalPrice - product.price) * quantity : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full max-h-[95vh] overflow-y-auto p-0 bg-white border-none m-2 sm:m-4">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="relative order-1">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 sm:h-64 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    New
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="p-4 sm:p-6 flex flex-col order-2">
              <div className="flex-1">
                <h2 className="font-playfair text-lg sm:text-2xl font-bold text-primary mb-3 pr-8">
                  {product.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  {product.fromPrice && (
                    <span className="text-sm text-muted-foreground">From</span>
                  )}
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)} NZD
                  </span>
                  {product.originalPrice && (
                    <span className="text-base sm:text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="space-y-4 mb-4 sm:mb-6">
                  {/* Size Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tamaño
                    </label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="w-full h-12 text-base">
                        <SelectValue placeholder="Selecciona el tamaño" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Pequeño (6 unidades)</SelectItem>
                        <SelectItem value="regular">Regular (12 unidades)</SelectItem>
                        <SelectItem value="large">Grande (24 unidades)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Quantity Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cantidad
                    </label>
                    <div className="flex items-center justify-center gap-4 bg-gray-50 rounded-lg p-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-2xl font-semibold w-16 text-center bg-white rounded-lg py-2">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full"
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= 10}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Price Summary */}
                <div className="border-t pt-3 sm:pt-4 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm sm:text-base">Subtotal:</span>
                    <span className="font-semibold text-sm sm:text-base">${totalPrice.toFixed(2)} NZD</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between items-center mb-2 text-green-600">
                      <span className="text-sm sm:text-base">Ahorras:</span>
                      <span className="font-semibold text-sm sm:text-base">-${savings.toFixed(2)} NZD</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-base sm:text-lg font-bold bg-amber-50 p-3 rounded-lg">
                    <span>Total:</span>
                    <span className="text-primary">${totalPrice.toFixed(2)} NZD</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3 pb-2">
                <Button
                  onClick={handlePurchase}
                  disabled={isProcessing || product.soldOut}
                  className="w-full h-12 sm:h-10 bg-gradient-chocolate hover:shadow-hover transition-all duration-300 text-white text-base font-semibold"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Procesando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Agregar al Carrito
                    </div>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full h-12 sm:h-10 border-amber-800 text-amber-800 hover:bg-amber-50 text-base font-semibold"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Comprar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
