
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-construction-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-lg mb-6">О компании СтройДом</h1>
              <p className="text-lg text-gray-700 mb-6">
                Мы — команда профессионалов, специализирующаяся на проектировании и строительстве частных домов высокого качества с 2010 года. За это время мы реализовали более 500 проектов разной сложности и масштаба.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Наша цель — создавать не просто дома, а пространства для комфортной жизни, где учтены все потребности наших клиентов.
              </p>
              <Link to="/contact">
                <Button className="btn-primary">
                  Связаться с нами
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1626885930974-4b69aa21ed88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Наша команда" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-12">Наша история</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-3xl font-bold text-construction-accent">2010</div>
                  <div className="h-full w-px bg-gray-300 hidden md:block mt-4"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-medium mb-3">Основание компании</h3>
                  <p className="text-gray-700">
                    Компания СтройДом была основана группой опытных инженеров и архитекторов, объединенных идеей создания качественного, современного и доступного жилья. Начали с небольших проектов в Московской области.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-3xl font-bold text-construction-accent">2012</div>
                  <div className="h-full w-px bg-gray-300 hidden md:block mt-4"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-medium mb-3">Расширение деятельности</h3>
                  <p className="text-gray-700">
                    Успешно реализовали более 50 проектов, расширили команду и открыли собственный офис в Москве. Начали работать не только над типовыми, но и над индивидуальными проектами.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-3xl font-bold text-construction-accent">2015</div>
                  <div className="h-full w-px bg-gray-300 hidden md:block mt-4"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-medium mb-3">Внедрение новых технологий</h3>
                  <p className="text-gray-700">
                    Начали активно внедрять энергоэффективные технологии и современные материалы в строительстве. Получили несколько отраслевых наград за инновационные решения.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-3xl font-bold text-construction-accent">2018</div>
                  <div className="h-full w-px bg-gray-300 hidden md:block mt-4"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-medium mb-3">Расширение географии</h3>
                  <p className="text-gray-700">
                    Вышли на региональные рынки, открыв представительства в Санкт-Петербурге и Казани. Портфолио пополнилось разнообразными проектами: от небольших дачных домиков до элитных коттеджей.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-3xl font-bold text-construction-accent">2022</div>
                  <div className="h-full w-px bg-gray-300 hidden md:block mt-4"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-medium mb-3">Современная компания</h3>
                  <p className="text-gray-700">
                    Сегодня СтройДом — это команда из более чем 100 специалистов, собственное производство, современная техника и безупречная репутация на рынке частного домостроения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 bg-construction-light">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-12">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Александр Иванов" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium mb-1">Александр Иванов</h3>
                <p className="text-gray-600 mb-3">Генеральный директор</p>
                <p className="text-sm text-gray-500">
                  Более 20 лет опыта в строительстве и управлении проектами
                </p>
              </div>
            </div>
            
            {/* Team member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                  alt="Елена Петрова" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium mb-1">Елена Петрова</h3>
                <p className="text-gray-600 mb-3">Главный архитектор</p>
                <p className="text-sm text-gray-500">
                  Разработала более 200 уникальных проектов домов
                </p>
              </div>
            </div>
            
            {/* Team member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="Дмитрий Сидоров" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium mb-1">Дмитрий Сидоров</h3>
                <p className="text-gray-600 mb-3">Технический директор</p>
                <p className="text-sm text-gray-500">
                  Эксперт по инженерным системам и новым технологиям
                </p>
              </div>
            </div>
            
            {/* Team member 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80" 
                  alt="Наталья Козлова" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-medium mb-1">Наталья Козлова</h3>
                <p className="text-gray-600 mb-3">Руководитель проектов</p>
                <p className="text-sm text-gray-500">
                  Специализируется на сложных и нестандартных проектах
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-construction-DEFAULT text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6">Готовы начать строительство своего дома?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto">
            Свяжитесь с нами сегодня, и мы поможем воплотить вашу мечту о собственном доме в реальность.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/catalog">
              <Button className="bg-white text-construction-DEFAULT hover:bg-gray-100 hover:text-construction-DEFAULT">
                Смотреть каталог
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-construction-accent hover:bg-blue-700 text-white">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
