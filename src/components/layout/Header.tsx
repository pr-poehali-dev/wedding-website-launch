
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-purple-600">WeddingAgency</div>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">О нас</a>
          <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Услуги</a>
          <a href="#process" className="text-gray-600 hover:text-purple-600 transition-colors">Как мы работаем</a>
          <a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">Портфолио</a>
          <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center">
          <a href="tel:89039776195" className="text-gray-700 hover:text-purple-600 transition-colors flex items-center">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            <span className="hidden md:block">8 903 977 61 95</span>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden ml-4">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
