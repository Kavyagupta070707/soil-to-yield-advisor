
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 lg:py-32 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Smart Farming for
            <span className="text-grass-600"> Better Yields</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Get personalized fertilizer recommendations based on your soil analysis. 
            Maximize your crop yields with data-driven farming decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="bg-grass-600 hover:bg-grass-700 text-lg px-8 py-6">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-grass-600 text-grass-600 hover:bg-grass-50">
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto animate-slide-up">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-grass-600 mb-2">98%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-grass-600 mb-2">25%</div>
                <div className="text-gray-600">Yield Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-grass-600 mb-2">5000+</div>
                <div className="text-gray-600">Happy Farmers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
