
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock data to simulate fetching from Google Sheets
const mockProjects = [
  {
    id: "1",
    name: "Альпийский",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    area: 180,
    floors: 2,
    materials: "Кирпич",
    price: 12000000
  },
  {
    id: "2",
    name: "Модерн",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    area: 160,
    floors: 1,
    materials: "Дерево, Стекло",
    price: 9800000
  },
  {
    id: "3",
    name: "Классика",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    area: 220,
    floors: 2,
    materials: "Кирпич",
    price: 15500000
  },
  {
    id: "4",
    name: "Минимализм",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    area: 140,
    floors: 1,
    materials: "Бетон, Стекло",
    price: 8200000
  }
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to Google Sheets
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, we would fetch data from Google Sheets API
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        
        // Using mock data instead
        setTimeout(() => {
          setProjects(mockProjects);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="section-padding bg-construction-light">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="heading-lg mb-4">Популярные проекты</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Выберите готовый проект из нашего каталога или закажите индивидуальное проектирование
            </p>
          </div>
          <Link to="/catalog" className="mt-4 md:mt-0 flex items-center text-construction-accent hover:text-blue-700 transition-colors">
            <span className="mr-2">Смотреть все проекты</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-construction-accent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <Link key={project.id} to={`/catalog/${project.id}`} className="card-project group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Подробнее</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">Дом "{project.name}"</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                    <div>
                      <span className="font-medium">Площадь:</span> {project.area} м²
                    </div>
                    <div>
                      <span className="font-medium">Этажей:</span> {project.floors}
                    </div>
                    <div>
                      <span className="font-medium">Материал:</span> {project.materials}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-medium text-construction-accent">
                      {formatPrice(project.price)}
                    </div>
                    <Button variant="outline" size="sm" className="text-construction-accent border-construction-accent hover:bg-construction-accent hover:text-white">
                      Смотреть
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
