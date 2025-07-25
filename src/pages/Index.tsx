import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const modules = [
    {
      title: "Основы ухода",
      description: "Базовые принципы заботы о пожилых людях",
      duration: "45 мин",
      icon: "Heart"
    },
    {
      title: "Медицинские аспекты", 
      description: "Контроль здоровья и прием лекарств",
      duration: "60 мин",
      icon: "Stethoscope"
    },
    {
      title: "Психологическая поддержка",
      description: "Эмоциональное благополучие пожилых",
      duration: "40 мин", 
      icon: "Users"
    },
    {
      title: "Безопасность дома",
      description: "Создание безопасной среды",
      duration: "35 мин",
      icon: "Shield"
    }
  ];

  const materials = [
    { title: "Методические рекомендации", type: "PDF", size: "2.3 МБ" },
    { title: "Памятка по уходу", type: "PDF", size: "1.8 МБ" },
    { title: "Видеоуроки", type: "Видео", size: "245 МБ" },
    { title: "Тестовые задания", type: "Интерактив", size: "—" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-soft-white to-cream font-open-sans">
      {/* Header */}
      <header className="border-b border-coral/20 bg-soft-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-coral" size={24} />
            <span className="font-montserrat font-semibold text-xl text-gray-800">
              Забота+
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#program" className="text-warm-gray hover:text-coral transition-colors">Программа</a>
            <a href="#materials" className="text-warm-gray hover:text-coral transition-colors">Материалы</a>
            <a href="#contacts" className="text-warm-gray hover:text-coral transition-colors">Контакты</a>
          </nav>
          <Button className="bg-coral hover:bg-coral/90 text-white font-medium">
            Регистрация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-teal/10 text-teal border-teal/20 px-4 py-2 text-sm font-medium">
            Бесплатно • С сертификатом • Онлайн
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-gray-800 mb-6 leading-tight">
            Основы ухода за
            <span className="text-coral block">пожилыми людьми</span>
          </h1>
          
          <p className="text-xl text-warm-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Изучите профессиональные методы заботы о старшем поколении. 
            Получите знания и навыки для качественного ухода дома.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-3">
              <Icon name="Play" className="mr-2" size={20} />
              Начать курс бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white font-semibold px-8 py-3">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать программу
            </Button>
          </div>

          <div className="bg-soft-white rounded-2xl p-8 shadow-sm border border-coral/10">
            <img 
              src="/img/6d8e513d-c996-487a-a2a4-5fd2df7cb633.jpg" 
              alt="Профессиональный уход за пожилыми людьми"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-montserrat font-bold text-coral mb-1">4</div>
                <div className="text-sm text-warm-gray">модуля</div>
              </div>
              <div>
                <div className="text-2xl font-montserrat font-bold text-coral mb-1">3 часа</div>
                <div className="text-sm text-warm-gray">обучения</div>
              </div>
              <div>
                <div className="text-2xl font-montserrat font-bold text-coral mb-1">100%</div>
                <div className="text-sm text-warm-gray">онлайн</div>
              </div>
              <div>
                <div className="text-2xl font-montserrat font-bold text-coral mb-1">
                  <Icon name="Award" className="inline-block" size={24} />
                </div>
                <div className="text-sm text-warm-gray">сертификат</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="bg-soft-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Программа курса
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Структурированная программа с практическими знаниями и реальными примерами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <Card key={index} className="border-2 border-cream hover:border-coral/30 transition-all duration-300 hover:shadow-lg bg-soft-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="bg-coral/10 p-2 rounded-lg">
                        <Icon name={module.icon as any} className="text-coral" size={20} />
                      </div>
                      <Badge variant="secondary" className="bg-teal/10 text-teal text-xs">
                        {module.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-montserrat font-semibold text-gray-800">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-gradient-to-r from-coral/5 to-teal/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <img 
              src="/img/7853fab3-fb0f-41af-bf5b-2e020370c2dd.jpg" 
              alt="Сертификат о прохождении курса"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-coral/20"
            />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Получите сертификат
            </h2>
            <p className="text-lg text-warm-gray mb-8">
              После успешного прохождения курса вы получите официальный сертификат 
              о повышении квалификации в области ухода за пожилыми людьми
            </p>
            
            <div className="bg-soft-white rounded-xl p-6 shadow-sm border border-coral/10 mb-8">
              <div className="flex items-center justify-center space-x-4 text-sm text-warm-gray">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" className="text-teal" size={16} />
                  <span>4 модуля</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" className="text-teal" size={16} />
                  <span>3 часа</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center space-x-2">
                  <Icon name="Award" className="text-teal" size={16} />
                  <span>Сертификат</span>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white font-semibold px-12 py-4 text-lg">
              <Icon name="UserPlus" className="mr-2" size={20} />
              Зарегистрироваться бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-16 bg-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Учебные материалы
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Полный набор материалов для эффективного обучения и дальнейшего применения знаний
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {materials.map((material, index) => (
              <Card key={index} className="border border-cream hover:border-coral/30 transition-all duration-300 bg-soft-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-teal/10 p-2 rounded-lg">
                        <Icon 
                          name={material.type === 'PDF' ? 'FileText' : material.type === 'Видео' ? 'Video' : 'Monitor'} 
                          className="text-teal" 
                          size={16} 
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 text-sm">{material.title}</div>
                        <div className="text-xs text-warm-gray">{material.type} • {material.size}</div>
                      </div>
                    </div>
                    <Icon name="Download" className="text-warm-gray hover:text-coral cursor-pointer" size={16} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gradient-to-br from-cream to-soft-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Контакты
            </h2>
            <p className="text-lg text-warm-gray mb-8">
              Остались вопросы? Мы всегда готовы помочь
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-cream bg-soft-white">
                <CardContent className="p-6 text-center">
                  <div className="bg-coral/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Icon name="Mail" className="text-coral" size={24} />
                  </div>
                  <h3 className="font-montserrat font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-warm-gray">info@eldercare-course.ru</p>
                </CardContent>
              </Card>

              <Card className="border border-cream bg-soft-white">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Icon name="Phone" className="text-teal" size={24} />
                  </div>
                  <h3 className="font-montserrat font-semibold text-gray-800 mb-2">Телефон</h3>
                  <p className="text-warm-gray">+7 (800) 123-45-67</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Heart" className="text-coral" size={20} />
            <span className="font-montserrat font-semibold text-lg">Забота+</span>
          </div>
          <p className="text-sm">© 2024 Курс "Основы ухода за пожилыми людьми". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;