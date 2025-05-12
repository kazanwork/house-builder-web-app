
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";

interface ProjectFilterProps {
  onFilterChange: (filters: FilterValues) => void;
}

export interface FilterValues {
  priceRange: [number, number];
  areaRange: [number, number];
  floors: number[];
  materials: string[];
  searchTerm: string;
}

const ProjectFilter = ({ onFilterChange }: ProjectFilterProps) => {
  // Initial filter values
  const [filters, setFilters] = useState<FilterValues>({
    priceRange: [0, 20000000],
    areaRange: [50, 300],
    floors: [],
    materials: [],
    searchTerm: '',
  });

  // UI state for price/area display
  const [priceDisplay, setPriceDisplay] = useState({
    min: filters.priceRange[0],
    max: filters.priceRange[1]
  });
  
  const [areaDisplay, setAreaDisplay] = useState({
    min: filters.areaRange[0],
    max: filters.areaRange[1]
  });
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const handlePriceChange = (value: number[]) => {
    const newPriceRange: [number, number] = [value[0], value[1]];
    setPriceDisplay({ min: newPriceRange[0], max: newPriceRange[1] });
    
    const newFilters = {
      ...filters,
      priceRange: newPriceRange
    };
    
    setFilters(newFilters);
  };
  
  const handleAreaChange = (value: number[]) => {
    const newAreaRange: [number, number] = [value[0], value[1]];
    setAreaDisplay({ min: newAreaRange[0], max: newAreaRange[1] });
    
    const newFilters = {
      ...filters,
      areaRange: newAreaRange
    };
    
    setFilters(newFilters);
  };
  
  const handleFloorChange = (floor: number) => {
    const newFloors = filters.floors.includes(floor)
      ? filters.floors.filter(f => f !== floor)
      : [...filters.floors, floor];
      
    const newFilters = {
      ...filters,
      floors: newFloors
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleMaterialChange = (material: string) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter(m => m !== material)
      : [...filters.materials, material];
      
    const newFilters = {
      ...filters,
      materials: newMaterials
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = {
      ...filters,
      searchTerm: e.target.value
    };
    
    setFilters(newFilters);
  };
  
  const applyRangeFilters = () => {
    onFilterChange(filters);
  };
  
  const resetFilters = () => {
    const initialFilters = {
      priceRange: [0, 20000000],
      areaRange: [50, 300],
      floors: [],
      materials: [],
      searchTerm: '',
    };
    
    setFilters(initialFilters);
    setPriceDisplay({ min: initialFilters.priceRange[0], max: initialFilters.priceRange[1] });
    setAreaDisplay({ min: initialFilters.areaRange[0], max: initialFilters.areaRange[1] });
    onFilterChange(initialFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium">Фильтры</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetFilters}
          className="text-gray-500 hover:text-construction-accent flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          <span>Сбросить</span>
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Поиск по названию"
          value={filters.searchTerm}
          onChange={handleSearchChange}
          className="pl-10"
        />
        <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        {filters.searchTerm && (
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setFilters({...filters, searchTerm: ''})}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Стоимость</h4>
        <Slider 
          min={0}
          max={20000000}
          step={100000}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="my-6"
        />
        <div className="flex justify-between text-sm">
          <span>{formatPrice(priceDisplay.min)}</span>
          <span>{formatPrice(priceDisplay.max)}</span>
        </div>
      </div>

      {/* Area Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Площадь (м²)</h4>
        <Slider 
          min={50}
          max={300}
          step={5}
          value={filters.areaRange}
          onValueChange={handleAreaChange}
          className="my-6"
        />
        <div className="flex justify-between text-sm">
          <span>{areaDisplay.min} м²</span>
          <span>{areaDisplay.max} м²</span>
        </div>
      </div>

      {/* Floors */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Этажность</h4>
        <div className="space-y-2">
          {[1, 2, 3].map((floor) => (
            <div key={floor} className="flex items-center">
              <Checkbox 
                id={`floor-${floor}`} 
                checked={filters.floors.includes(floor)}
                onCheckedChange={() => handleFloorChange(floor)}
              />
              <label 
                htmlFor={`floor-${floor}`} 
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {floor === 1 ? '1 этаж' : `${floor} этажа`}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Материал</h4>
        <div className="space-y-2">
          {['Кирпич', 'Дерево', 'Бетон', 'Газобетон'].map((material) => (
            <div key={material} className="flex items-center">
              <Checkbox 
                id={`material-${material}`}
                checked={filters.materials.includes(material)}
                onCheckedChange={() => handleMaterialChange(material)}
              />
              <label 
                htmlFor={`material-${material}`}
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {material}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={applyRangeFilters} className="w-full btn-primary">
        Применить фильтры
      </Button>
    </div>
  );
};

export default ProjectFilter;
