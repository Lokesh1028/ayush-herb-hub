
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getPlantById } from '@/data/plants';
import { ArrowLeft } from 'lucide-react';

const PlantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const plant = id ? getPlantById(id) : undefined;
  
  if (!plant) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-white mb-4">Plant Not Found</h1>
          <p className="text-gray-200 mb-6">The plant you are looking for does not exist in our database.</p>
          <Button onClick={() => navigate('/browse')}>Browse All Plants</Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Button 
        variant="outline" 
        className="mb-6 flex items-center gap-2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="rounded-lg overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
              <div className="h-64 bg-teal-900/40 backdrop-blur-sm flex items-center justify-center">
                <span className="text-amber-200">Plant Image</span>
              </div>
              <div className="p-4">
                <h1 className="text-2xl font-bold text-white mb-1">{plant.commonName}</h1>
                <p className="text-lg italic text-amber-100 mb-2">{plant.botanicalName}</p>
                <div className="text-sm text-blue-100 mb-4">Family: {plant.familyName}</div>
                <div className="flex flex-wrap gap-2">
                  {plant.partsUsed.map((part, index) => (
                    <Badge key={index} variant="secondary" className="bg-teal-800/60 text-amber-100 border border-teal-700/60">
                      {part}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-amber-100 mb-4">Description</h2>
              <p className="text-white whitespace-pre-line">{plant.description}</p>
            </CardContent>
          </Card>
          
          <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-amber-100 mb-4">Medicinal Uses</h2>
              <ul className="list-disc pl-5 space-y-2 text-white text-left">
                {plant.medicinalUses.map((use, index) => (
                  <li key={index} className="pl-2">{use}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-amber-100 mb-4">Ailments Treated</h2>
              <div className="flex flex-wrap gap-2">
                {plant.ailmentsTreated.map((ailment, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1 bg-teal-800/60 text-amber-100 border-teal-700/60">
                    {ailment}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-white/20 bg-white/10 backdrop-blur-md shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-amber-100 mb-4">Identification Tips</h2>
              <ul className="list-disc pl-5 space-y-2 text-white text-left">
                {plant.identificationTips.map((tip, index) => (
                  <li key={index} className="pl-2">{tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PlantDetail;
