
import { Building, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">О нашей компании</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Более 15 лет мы проектируем и строим качественные дома, которые становятся уютным семейным пространством для наших клиентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              <span className="text-construction-accent font-serif text-xl">СтройДом</span> – это команда профессионалов, специализирующихся на строительстве частных домов с использованием современных технологий и качественных материалов.
            </p>
            
            <p className="text-lg">
              Наша миссия – создавать не просто здания, а комфортные пространства для жизни, где каждая деталь продумана до мелочей. Мы гордимся своей репутацией и стремимся превосходить ожидания наших клиентов.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-construction-accent">15+</div>
                <p className="text-gray-600">лет опыта</p>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-construction-accent">500+</div>
                <p className="text-gray-600">построенных домов</p>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-construction-accent">100%</div>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Строительные работы" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
              <div className="text-construction-accent text-lg font-bold">2010</div>
              <p className="text-gray-600">год основания компании</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
