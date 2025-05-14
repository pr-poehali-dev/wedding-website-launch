
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Шапка сайта */}
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

      {/* Первый экран */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519741347686-c1e0aadf4611')] bg-cover bg-center blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Делаем стильные свадьбы на любой бюджет
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Вызовем для вас такси до места встречи
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              Обсудить встречу
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Второй экран - Преимущества */}
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
            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Icon name="BadgePercent" className="h-6 w-6 text-purple-600" />
                  </div>
                  У нас всегда выгодные условия от подрядчиков
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все площадки и подрядчики заинтересованы работать с агентством, потому что мы приводим клиентов, а значит у нас всегда будут самые выгодные условия сотрудничества и скидки. А еще все подрядчики будут особенно тщательно следить за качеством, чтобы мы вернулись к ним с новыми заказами.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Icon name="Wallet" className="h-6 w-6 text-purple-600" />
                  </div>
                  Наш гонорар входит в ваш бюджет
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Расходы на наши услуги уже входят в оговоренный заранее бюджет и вы не потратите ни копейкой больше
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Icon name="Search" className="h-6 w-6 text-purple-600" />
                  </div>
                  Мы предложим лучшие варианты для вашего бюджета
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы знаем рынок площадок и подрядчиков, а значит вам не придется тратить несколько месяцев на его изучение. Мы предоставим вам лучшие варианты в вашем бюджете, а вы выберете из них то, что вам по душе.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Вызовем для вас такси до места встречи</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Назначить встречу
            </Button>
          </div>
        </div>
      </section>

      {/* Третий экран - Услуги */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Наши услуги
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle>Организация свадьбы под ключ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мы делаем стильные свадьбы на любой бюджет. Наш гонорар уже входит в ваш бюджет и не выйдет за его пределы.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Мы берем 10% от бюджета вашей свадьбы, но не менее 50 000 рублей. Камерные свадьбы обсуждаются индивидуально.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Заказать
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle>Подбор идеальной площадки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Фото многих площадок сильно отличаются от реальности, поэтому каждую потенциально подходящую площадку нужно увидеть вживую. Мы отсмотрели сотни площадок и сразу же предоставим вам только те, которые максимально подходят под ваш запрос и достойны просмотра. Мы подберем идеальную площадку за неделю.
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  5 000 рублей
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Заказать
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3')] bg-cover bg-center"></div>
              <CardHeader>
                <CardTitle>Ведущий, музыка, шоу</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Мы поможем подобрать ведущего, с которым будем весело и не стыдно. Разработаем сценарий, тайминг, подберем диджея и музыку, под которую все будут танцевать. Организуем кавер группу или пригласим звезду.
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  5 000 рублей
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Заказать
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Показать все услуги
              <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
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
            © {new Date().getFullYear()} WeddingAgency. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
