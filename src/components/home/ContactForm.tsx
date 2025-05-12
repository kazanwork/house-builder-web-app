
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    selectedHouse: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // In a real implementation, you would send data to server or Telegram API
      console.log("Form submitted:", formData);
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        selectedHouse: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact-form" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Оставьте заявку</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Заполните форму, и мы свяжемся с вами для консультации по вашему проекту
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="heading-sm mb-4">Контактная информация</h3>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-construction-light rounded-full">
                <Phone className="h-6 w-6 text-construction-accent" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Телефон</h4>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-gray-600">+7 (495) 765-43-21</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-construction-light rounded-full">
                <Mail className="h-6 w-6 text-construction-accent" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-gray-600">info@stroydom.ru</p>
                <p className="text-gray-600">sales@stroydom.ru</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-construction-light rounded-full">
                <MapPin className="h-6 w-6 text-construction-accent" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Адрес</h4>
                <p className="text-gray-600">г. Москва, ул. Строительная, д. 42</p>
                <p className="text-gray-600">Офис 310, 3 этаж</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Часы работы</h4>
              <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-600">Сб: 10:00 - 18:00</p>
              <p className="text-gray-600">Вс: выходной</p>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                <label htmlFor="selectedHouse" className="block mb-2 font-medium">
                  Интересующий проект
                </label>
                <select
                  id="selectedHouse"
                  name="selectedHouse"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.selectedHouse}
                  onChange={handleChange}
                >
                  <option value="">Выберите проект (если известен)</option>
                  <option value="1">Альпийский</option>
                  <option value="2">Модерн</option>
                  <option value="3">Классика</option>
                  <option value="4">Минимализм</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ваше сообщение или вопрос"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
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
                    <span>Отправить заявку</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
