import { X } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-chocolate text-primary-foreground py-2 px-4 relative">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium tracking-wide">
          NEW ARRIVALS JUST LANDED ✨
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity"
          aria-label="Close announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;