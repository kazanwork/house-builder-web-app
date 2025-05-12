
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-4">
        <div className="max-w-3xl fade-up">
          <h1 className="heading-xl text-white mb-6">
            Постройте дом своей мечты с нами
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            СтройДом - надёжный партнёр в строительстве частных домов под ключ. Современные технологии, качественные материалы и опытные специалисты.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="btn-primary text-lg py-6 px-8" 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})}
            >
              Оставить заявку
            </Button>
            <Button className="btn-outline text-white border-white hover:bg-white hover:text-construction-DEFAULT text-lg py-6 px-8">
              Наши проекты
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
           onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
