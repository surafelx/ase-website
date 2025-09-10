import { X } from "lucide-react";
import { useState } from "react";

const NewYearBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-sunset text-white py-3 px-6 text-center relative overflow-hidden">
      <div className="animate-pulse">
        <span className="text-lg font-semibold">
          ☀️ Happy Ethiopian New Year! ☀️ Celebrating 2017 with sustainable farming solutions ☀️
        </span>
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-agriculture-green-light transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Decorative elements */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce">
        ☀️
      </div>
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce delay-300">
        ☀️
      </div>
    </div>
  );
};

export default NewYearBanner;