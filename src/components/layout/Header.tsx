
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-construction-accent" />
          <span className="font-serif text-2xl font-medium text-construction-DEFAULT">СтройДом</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-construction-DEFAULT hover:text-construction-accent transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="text-construction-DEFAULT hover:text-construction-accent transition-colors">
            Каталог домов
          </Link>
          <Link to="/about" className="text-construction-DEFAULT hover:text-construction-accent transition-colors">
            О компании
          </Link>
          <Link to="/contact" className="text-construction-DEFAULT hover:text-construction-accent transition-colors">
            Контакты
          </Link>
          <Button className="btn-primary flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Заказать звонок</span>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-construction-DEFAULT"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-construction-DEFAULT hover:text-construction-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="text-construction-DEFAULT hover:text-construction-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог домов
            </Link>
            <Link 
              to="/about" 
              className="text-construction-DEFAULT hover:text-construction-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </Link>
            <Link 
              to="/contact" 
              className="text-construction-DEFAULT hover:text-construction-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button 
              className="btn-primary w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Заказать звонок
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
