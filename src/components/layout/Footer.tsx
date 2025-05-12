
import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-DEFAULT text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-construction-accent" />
              <span className="font-serif text-2xl font-medium">СтройДом</span>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональное строительство частных домов с 2010 года. Качество, надежность, современные технологии.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons - can be replaced with actual social media icons */}
              <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.82 2H4.18C2.97 2 2 2.97 2 4.18v15.64C2 21.03 2.97 22 4.18 22h15.64c1.21 0 2.18-.97 2.18-2.18V4.18C22 2.97 21.03 2 19.82 2zm-7 13.36c-2.95 0-5.36-2.4-5.36-5.36 0-2.95 2.4-5.36 5.36-5.36 2.95 0 5.36 2.4 5.36 5.36 0 2.95-2.4 5.36-5.36 5.36z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.57c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.668h-3.55V9h3.4v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Каталог домов
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-construction-accent transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Проектирование домов
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Строительство под ключ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Ремонт и реконструкция
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Ландшафтный дизайн
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-accent transition-colors">
                  Инженерные системы
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-construction-accent mt-0.5" />
                <span className="text-gray-300">г. Москва, ул. Строительная, д. 42</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-construction-accent mt-0.5" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-construction-accent mt-0.5" />
                <span className="text-gray-300">info@stroydom.ru</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 СтройДом. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-construction-accent text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-construction-accent text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
