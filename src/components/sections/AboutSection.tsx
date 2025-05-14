
import React from 'react';
import { Button } from "@/components/ui/button";
import FeatureCard from '@/components/cards/FeatureCard';

const AboutSection = () => {
  const features = [
    {
      icon: "BadgePercent",
      title: "У нас всегда выгодные условия от подрядчиков",
      description: "Все площадки и подрядчики заинтересованы работать с агентством, потому что мы приводим клиентов, а значит у нас всегда будут самые выгодные условия сотрудничества и скидки. А еще все подрядчики будут особенно тщательно следить за качеством, чтобы мы вернулись к ним с новыми заказами."
    },
    {
      icon: "Wallet",
      title: "Наш гонорар входит в ваш бюджет",
      description: "Расходы на наши услуги уже входят в оговоренный заранее бюджет и вы не потратите ни копейкой больше"
    },
    {
      icon: "Search",
      title: "Мы предложим лучшие варианты для вашего бюджета",
      description: "Мы знаем рынок площадок и подрядчиков, а значит вам не придется тратить несколько месяцев на его изучение. Мы предоставим вам лучшие варианты в вашем бюджете, а вы выберете из них то, что вам по душе."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Свадьба с нами дешевле и проще, чем свадьба без нас.
          </h2>
          <p className="text-xl text-gray-600">
            Почему? Никакой магии, все объяснимо.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Вызовем для вас такси до места встречи</p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Назначить встречу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
