
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProjectFilter, { FilterValues } from "@/components/catalog/ProjectFilter";
import ProjectCard, { Project } from "@/components/catalog/ProjectCard";

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
  },
  {
    id: "5",
    name: "Шале",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    area: 195,
    floors: 2,
    materials: "Дерево, Камень",
    price: 14200000
  },
  {
    id: "6",
    name: "Скандинавский",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    area: 130,
    floors: 1,
    materials: "Дерево",
    price: 7500000
  },
  {
    id: "7",
    name: "Кубический",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    area: 170,
    floors: 2,
    materials: "Бетон, Стекло",
    price: 13800000
  },
  {
    id: "8",
    name: "Таунхаус",
    image: "https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    area: 120,
    floors: 3,
    materials: "Кирпич, Металл",
    price: 10500000
  },
  {
    id: "9",
    name: "Усадьба",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    area: 280,
    floors: 2,
    materials: "Кирпич",
    price: 19500000
  },
  {
    id: "10",
    name: "Хай-тек",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    area: 150,
    floors: 1,
    materials: "Стекло, Металл",
    price: 11800000
  }
];

const Catalog = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
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
          setFilteredProjects(mockProjects);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (filters: FilterValues) => {
    const { priceRange, areaRange, floors, materials, searchTerm } = filters;
    
    const filtered = projects.filter(project => {
      // Price filter
      if (project.price < priceRange[0] || project.price > priceRange[1]) {
        return false;
      }
      
      // Area filter
      if (project.area < areaRange[0] || project.area > areaRange[1]) {
        return false;
      }
      
      // Floors filter
      if (floors.length > 0 && !floors.includes(project.floors)) {
        return false;
      }
      
      // Materials filter
      if (materials.length > 0 && !materials.some(mat => project.materials.includes(mat))) {
        return false;
      }
      
      // Search term
      if (searchTerm && !project.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProjects(filtered);
  };

  return (
    <Layout>
      <div className="bg-construction-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Каталог проектов</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Выберите проект, который соответствует вашим требованиям и предпочтениям
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="md:col-span-1">
              <ProjectFilter onFilterChange={handleFilterChange} />
            </div>
            
            {/* Projects grid */}
            <div className="md:col-span-2 lg:col-span-3">
              {isLoading ? (
                <div className="flex justify-center items-center py-20 bg-white rounded-lg shadow">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-construction-accent"></div>
                </div>
              ) : filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <h3 className="text-xl font-medium mb-2">Проектов не найдено</h3>
                  <p className="text-gray-600 mb-4">
                    Попробуйте изменить параметры фильтрации для получения результатов
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
