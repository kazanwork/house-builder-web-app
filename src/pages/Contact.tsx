
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-construction-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-lg mb-6">Свяжитесь с нами</h1>
            <p className="text-lg text-gray-700 mb-6">
              Есть вопросы о нашей компании или проектах? Нужна консультация специалиста? Заполните форму ниже или воспользуйтесь другими способами связи.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-construction-light rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <Phone className="h-8 w-8 text-construction-accent" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Телефон</h3>
              <p className="text-gray-700 mb-1">+7 (495) 123-45-67</p>
              <p className="text-gray-700">+7 (495) 765-43-21</p>
            </div>

            {/* Email */}
            <div className="bg-construction-light rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <Mail className="h-8 w-8 text-construction-accent" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Email</h3>
              <p className="text-gray-700 mb-1">info@stroydom.ru</p>
              <p className="text-gray-700">sales@stroydom.ru</p>
            </div>

            {/* Address */}
            <div className="bg-construction-light rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <MapPin className="h-8 w-8 text-construction-accent" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Адрес</h3>
              <p className="text-gray-700 mb-1">г. Москва, ул. Строительная, д. 42</p>
              <p className="text-gray-700">Офис 310, 3 этаж</p>
            </div>

            {/* Working Hours */}
            <div className="bg-construction-light rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <Clock className="h-8 w-8 text-construction-accent" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Часы работы</h3>
              <p className="text-gray-700 mb-1">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-700 mb-1">Сб: 10:00 - 18:00</p>
              <p className="text-gray-700">Вс: выходной</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-medium mb-6">Отправить сообщение</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Ваше имя <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Введите ваш email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ваше сообщение или вопрос"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent"></div>
                      <span>Отправка...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Отправить сообщение</span>
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-medium mb-6">Наше расположение</h2>
              
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden mb-6">
                {/* This would be replaced with an actual map component in a real implementation */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">
                    Здесь будет интегрирована карта с расположением офиса
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Как нас найти</h3>
                <p className="text-gray-700 mb-4">
                  Наш офис расположен в центре Москвы, в 5 минутах ходьбы от станции метро "Строительная".
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>От метро "Строительная" выход №3, далее 400 метров по улице Строительная</li>
                  <li>Вход со стороны улицы, 3 этаж, офис 310</li>
                  <li>Для автомобилистов доступна парковка рядом со зданием</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-construction-light">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-12">Часто задаваемые вопросы</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Как долго строится частный дом?</h3>
              <p className="text-gray-700">
                Сроки строительства зависят от сложности и размера проекта. В среднем, строительство занимает от 4 до 12 месяцев. Точные сроки указываются в договоре после утверждения проекта.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Какие гарантии вы предоставляете?</h3>
              <p className="text-gray-700">
                Мы предоставляем гарантию на все строительные работы сроком на 5 лет. Гарантия на инженерные системы составляет 3 года. Условия гарантийного обслуживания подробно описываются в договоре.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Можно ли внести изменения в типовой проект?</h3>
              <p className="text-gray-700">
                Да, мы готовы адаптировать любой из типовых проектов под ваши требования. Стоимость и сроки внесения изменений зависят от их сложности и согласовываются дополнительно.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Какие материалы вы используете при строительстве?</h3>
              <p className="text-gray-700">
                Мы используем только сертифицированные, качественные строительные материалы от проверенных поставщиков. Конкретный перечень материалов зависит от проекта и согласовывается с заказчиком на этапе заключения договора.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium mb-2">Предоставляете ли вы услугу "под ключ"?</h3>
              <p className="text-gray-700">
                Да, мы предлагаем строительство "под ключ", включающее все этапы от проектирования до финальной отделки и подключения инженерных коммуникаций. Вы можете выбрать как полный комплекс услуг, так и отдельные этапы строительства.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
