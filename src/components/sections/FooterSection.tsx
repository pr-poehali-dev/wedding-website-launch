
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-purple-400 mb-2">WeddingAgency</div>
            <p className="text-gray-400">Делаем стильные свадьбы на любой бюджет</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="flex items-center mb-2">
                <Icon name="Phone" className="mr-2 h-4 w-4 text-purple-400" />
                <a href="tel:89039776195" className="text-gray-300 hover:text-white">8 903 977 61 95</a>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="mr-2 h-4 w-4 text-purple-400" />
                <a href="mailto:info@weddingagency.ru" className="text-gray-300 hover:text-white">info@weddingagency.ru</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Подписаться на новости</h3>
              <div className="flex">
                <input type="email" placeholder="Ваш email" className="px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-purple-500" />
                <Button className="bg-purple-600 hover:bg-purple-700 rounded-l-none">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {currentYear} WeddingAgency. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
