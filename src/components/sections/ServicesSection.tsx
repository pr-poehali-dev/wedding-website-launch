
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ServiceCard from '@/components/cards/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
      title: 'Организация свадьбы под ключ',
      description: 'Мы делаем стильные свадьбы на любой бюджет. Наш гонорар уже входит в ваш бюджет и не выйдет за его пределы.',
      price: 'Мы берем 10% от бюджета вашей свадьбы, но не менее 50 000 рублей. Камерные свадьбы обсуждаются индивидуально.',
      priceLabel: true
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      title: 'Подбор идеальной площадки',
      description: 'Фото многих площадок сильно отличаются от реальности, поэтому каждую потенциально подходящую площадку нужно увидеть вживую. Мы отсмотрели сотни площадок и сразу же предоставим вам только те, которые максимально подходят под ваш запрос и достойны просмотра. Мы подберем идеальную площадку за неделю.',
      price: '5 000 рублей'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
      title: 'Ведущий, музыка, шоу',
      description: 'Мы поможем подобрать ведущего, с которым будем весело и не стыдно. Разработаем сценарий, тайминг, подберем диджея и музыку, под которую все будут танцевать. Организуем кавер группу или пригласим звезду.',
      price: '5 000 рублей'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Наши услуги
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              price={service.price}
              priceLabel={service.priceLabel}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Показать все услуги
            <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
