import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-desi-cream overflow-x-hidden flex justify-center items-center relative texture-grain">
      {/* Message */}
      <div className="absolute flex flex-col justify-center items-center w-[90%] h-[90%] z-[100]">
        <div
          className={`flex flex-col items-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="font-display text-2xl md:text-3xl font-semibold text-foreground m-[1%] tracking-wide">
            Page Not Found
          </div>
          <div className="font-display text-7xl md:text-8xl font-bold text-primary m-[1%]">
            404
          </div>
          <div className="text-sm md:text-base w-full max-w-md text-center text-muted-foreground m-[1%] font-sans">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out px-6 py-2.5 h-auto text-sm font-bold flex items-center gap-2 hover:scale-105 rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Go Back
            </button>
            <Link
              to="/"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out px-6 py-2.5 h-auto text-sm font-bold flex items-center gap-2 hover:scale-105 rounded-lg desi-shadow-sm"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: 60 + Math.random() * 80,
              height: 60 + Math.random() * 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `wobble 3s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
