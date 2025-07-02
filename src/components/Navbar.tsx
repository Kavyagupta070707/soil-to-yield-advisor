
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-grass-600" />
            <span className="text-2xl font-bold text-grass-800">AgriSmart</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-grass-600 transition-colors">
              Home
            </Link>
            <a href="#features" className="text-gray-700 hover:text-grass-600 transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-grass-600 transition-colors">
              About
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-grass-600 hover:bg-grass-700">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
