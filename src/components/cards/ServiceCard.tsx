
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price?: string | React.ReactNode;
  priceLabel?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  imageUrl, 
  title, 
  description, 
  price,
  priceLabel 
}) => {
  return (
    <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className={`h-48 bg-[url('${imageUrl}')] bg-cover bg-center`}></div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {price && (
          <p className={`text-sm text-gray-500 ${priceLabel ? 'italic' : 'font-semibold'}`}>
            {price}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
