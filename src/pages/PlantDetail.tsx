
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
          <h1 className="text-2xl font-bold text-herb-800 dark:text-herb-100 mb-4">Plant Not Found</h1>
          <p className="text-muted-foreground mb-6">The plant you are looking for does not exist in our database.</p>
          <Button onClick={() => navigate('/browse')}>Browse All Plants</Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Button 
        variant="outline" 
        className="mb-6 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="rounded-lg overflow-hidden border border-herb-200 dark:border-herb-700 bg-white dark:bg-herb-900 shadow-md">
              <div className="h-64 bg-herb-200 dark:bg-herb-800 flex items-center justify-center">
                <span className="text-herb-500 dark:text-herb-300">Plant Image</span>
              </div>
              <div className="p-4">
                <h1 className="text-2xl font-bold text-herb-800 dark:text-herb-100">{plant.commonName}</h1>
                <p className="text-lg italic text-herb-600 dark:text-herb-300 mb-2">{plant.botanicalName}</p>
                <div className="text-sm text-muted-foreground mb-4">Family: {plant.familyName}</div>
                <div className="flex flex-wrap gap-2">
                  {plant.partsUsed.map((part, index) => (
                    <Badge key={index} variant="secondary" className="bg-herb-100 text-herb-700 dark:bg-herb-800 dark:text-herb-200">
                      {part}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-herb-800 dark:text-herb-100 mb-4">Description</h2>
              <p className="text-herb-700 dark:text-herb-300 whitespace-pre-line">{plant.description}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-herb-800 dark:text-herb-100 mb-4">Medicinal Uses</h2>
              <ul className="list-disc pl-5 space-y-2 text-herb-700 dark:text-herb-300 text-left">
                {plant.medicinalUses.map((use, index) => (
                  <li key={index} className="pl-2">{use}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-herb-800 dark:text-herb-100 mb-4">Ailments Treated</h2>
              <div className="flex flex-wrap gap-2">
                {plant.ailmentsTreated.map((ailment, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1 bg-herb-50 text-herb-700 border-herb-200 dark:bg-herb-900 dark:text-herb-300 dark:border-herb-700">
                    {ailment}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-herb-800 dark:text-herb-100 mb-4">Identification Tips</h2>
              <ul className="list-disc pl-5 space-y-2 text-herb-700 dark:text-herb-300 text-left">
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
