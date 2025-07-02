
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Target, BarChart3, Users, Smartphone, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-grass-600" />,
      title: "Precise Soil Analysis",
      description: "Get detailed insights into your soil's pH, nitrogen, phosphorus, potassium, and moisture levels for accurate recommendations."
    },
    {
      icon: <Leaf className="h-8 w-8 text-grass-600" />,
      title: "Smart Fertilizer Recommendations",
      description: "Receive personalized fertilizer suggestions based on your specific soil conditions and crop requirements."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-grass-600" />,
      title: "Yield Tracking",
      description: "Monitor your crop performance and track improvements over time with our comprehensive analytics dashboard."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-grass-600" />,
      title: "Mobile-First Design",
      description: "Access your farm data anywhere, anytime with our responsive design optimized for mobile devices."
    },
    {
      icon: <Users className="h-8 w-8 text-grass-600" />,
      title: "Expert Support",
      description: "Get guidance from agricultural experts and connect with a community of successful farmers."
    },
    {
      icon: <Shield className="h-8 w-8 text-grass-600" />,
      title: "Data Security",
      description: "Your farm data is protected with enterprise-grade security and privacy measures."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Smart Farming
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and insights you need to optimize your farming operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
