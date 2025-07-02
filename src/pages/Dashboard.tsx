
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/DashboardHeader";
import SoilDataForm from "@/components/SoilDataForm";
import FertilizerRecommendations from "@/components/FertilizerRecommendations";
import FarmOverview from "@/components/FarmOverview";

const Dashboard = () => {
  const [soilData, setSoilData] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  const handleSoilDataSubmit = (data) => {
    setSoilData(data);
    
    // Generate mock recommendations based on soil data
    const mockRecommendations = {
      primaryFertilizer: {
        name: "NPK 20-10-10",
        amount: "150 kg/hectare",
        reason: "High nitrogen content needed based on your soil analysis"
      },
      secondaryFertilizer: {
        name: "Phosphate Rock",
        amount: "75 kg/hectare", 
        reason: "Low phosphorus levels detected"
      },
      organicOptions: [
        {
          name: "Compost",
          amount: "2 tons/hectare",
          benefits: "Improves soil structure and water retention"
        },
        {
          name: "Bone Meal",
          amount: "100 kg/hectare",
          benefits: "Slow-release phosphorus source"
        }
      ],
      applicationTiming: "Apply 2 weeks before planting season",
      costEstimate: "$180-220 per hectare"
    };
    
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farm Dashboard</h1>
          <p className="text-gray-600">Manage your soil data and get personalized fertilizer recommendations</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="soil-analysis">Soil Analysis</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <FarmOverview soilData={soilData} recommendations={recommendations} />
          </TabsContent>

          <TabsContent value="soil-analysis" className="space-y-6">
            <SoilDataForm onSubmit={handleSoilDataSubmit} />
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <FertilizerRecommendations 
              recommendations={recommendations}
              soilData={soilData}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
