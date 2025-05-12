
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  image: string;
  area: number;
  floors: number;
  materials: string;
  price: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="card-project group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <span className="font-medium flex items-center">
              Подробнее <ArrowRight className="ml-1 h-4 w-4" />
            </span>
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
          <Link to={`/catalog/${project.id}`}>
            <Button variant="outline" size="sm" className="text-construction-accent border-construction-accent hover:bg-construction-accent hover:text-white">
              Подробнее
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
