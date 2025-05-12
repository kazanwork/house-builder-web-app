import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, MapPin, Ruler, Building, Award, Phone, ExternalLink, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock project data to simulate fetching from Google Sheets
const mockProjects = [
  {
    id: "1",
    name: "Альпийский",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    area: 180,
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    materials: "Кирпич",
    price: 12000000,
    description: "Проект дома «Альпийский» сочетает в себе современную архитектуру и функциональность. Просторная планировка включает в себя 4 спальни, гостиную с панорамными окнами и большую террасу. Кирпичное строение обеспечивает высокие теплоизоляционные характеристики и долговечность конструкции.",
    features: [
      "Просторная гостиная с камином",
      "Кухня-столовая с выходом на террасу",
      "Мастер-спальня с гардеробной и собственной ванной комнатой",
      "Детские спальни с общей ванной комнатой",
      "Кабинет/гостевая комната на первом этаже",
      "Двойной гараж",
      "Техническое помещение для инженерных систем"
    ]
  },
  {
    id: "2",
    name: "Модерн",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
    ],
    area: 160,
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    materials: "Дерево, Стекло",
    price: 9800000,
    description: "Дом в стиле «Модерн» выполнен в современной архитектуре с большими панорамными окнами и плоской крышей. Особенностью проекта является сочетание дерева и стекла, что придает дому легкость и современный вид. Функциональная планировка с открытым пространством гостиной, столовой и кухни создает комфортную атмосферу для жизни.",
    features: [
      "Открытая планировка с совмещенной гостиной, столовой и кухней",
      "Панорамное остекление для максимального естественного освещения",
      "Мастер-спальня с собственной ванной комнатой",
      "Две дополнительные спальни с общей ванной",
      "Крытая терраса с выходом из гостиной",
      "Экономичные инженерные системы",
      "Гараж на одну машину"
    ]
  },
  // Other projects...
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call to get project details
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, we would fetch data from Google Sheets API
        // const response = await fetch(`your-api-endpoint/${id}`);
        // const data = await response.json();
        
        // Using mock data instead
        setTimeout(() => {
          const foundProject = mockProjects.find(p => p.id === id);
          setProject(foundProject || null);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching project details:', error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleTelegramLink = () => {
    if (!project) return;
    
    const telegramMessage = `Здравствуйте! Меня заинтересовал проект дома: ${project.name}, ID: ${project.id}`;
    const telegramUrl = `https://t.me/username?text=${encodeURIComponent(telegramMessage)}`;
    
    // Copy message to clipboard
    navigator.clipboard.writeText(telegramMessage)
      .then(() => {
        toast({
          title: "Текст скопирован в буфер обмена",
          description: "Теперь вы можете вставить его в Telegram"
        });
        // Open Telegram in new tab
        window.open(telegramUrl, '_blank');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        // Just open Telegram if clipboard fails
        window.open(telegramUrl, '_blank');
      });
  };

  return (
    <Layout>
      <div className="bg-construction-light py-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/catalog" className="flex items-center text-construction-accent hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Вернуться в каталог</span>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20 bg-white rounded-lg shadow">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-construction-accent"></div>
            </div>
          ) : project ? (
            <>
              {/* Project heading */}
              <div className="mb-8">
                <h1 className="heading-lg mb-4">Дом "{project.name}"</h1>
                <p className="text-lg text-gray-600">
                  ID проекта: {project.id}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project gallery */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={project.gallery[selectedImage]} 
                        alt={`${project.name} - фото ${selectedImage + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex space-x-2 overflow-x-auto">
                      {project.gallery.map((image: string, index: number) => (
                        <div 
                          key={index}
                          className={`cursor-pointer rounded-md overflow-hidden w-24 h-16 flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-construction-accent' : ''}`}
                          onClick={() => setSelectedImage(index)}
                        >
                          <img 
                            src={image} 
                            alt={`Миниатюра ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                    <h2 className="text-2xl font-medium mb-4">Описание проекта</h2>
                    <p className="text-gray-700 mb-6">
                      {project.description}
                    </p>
                    
                    <h3 className="text-xl font-medium mb-3">Особенности проекта</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                      {project.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project details sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                    <div className="text-2xl font-semibold text-construction-accent mb-4">
                      {formatPrice(project.price)}
                    </div>
                    
                    {/* Project specs */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Ruler className="h-5 w-5 text-construction-accent mr-3 mt-0.5" />
                        <div>
                          <p className="text-gray-500 text-sm">Площадь</p>
                          <p className="font-medium">{project.area} м²</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Building className="h-5 w-5 text-construction-accent mr-3 mt-0.5" />
                        <div>
                          <p className="text-gray-500 text-sm">Этажность</p>
                          <p className="font-medium">{project.floors} {project.floors === 1 ? 'этаж' : 'этажа'}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Home className="h-5 w-5 text-construction-accent mr-3 mt-0.5" />
                        <div>
                          <p className="text-gray-500 text-sm">Спальни</p>
                          <p className="font-medium">{project.bedrooms}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-construction-accent mr-3 mt-0.5" />
                        <div>
                          <p className="text-gray-500 text-sm">Материал</p>
                          <p className="font-medium">{project.materials}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-construction-accent hover:bg-blue-700 flex items-center justify-center space-x-2 py-6"
                        onClick={handleTelegramLink}
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Хочу этот дом</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-construction-accent text-construction-accent hover:bg-construction-accent hover:text-white flex items-center justify-center space-x-2 py-6"
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})}
                      >
                        <Phone className="h-5 w-5" />
                        <span>Заказать звонок</span>
                      </Button>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-500 text-sm mb-2">Остались вопросы?</p>
                      <div className="flex space-x-3">
                        <Link to="/contact" className="text-construction-accent hover:text-blue-700 flex items-center">
                          <Send className="h-4 w-4 mr-1" />
                          <span>Напишите нам</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h3 className="text-xl font-medium mb-2">Проект не найден</h3>
              <p className="text-gray-600 mb-4">
                Такого проекта не существует или он был удален
              </p>
              <Link to="/catalog">
                <Button className="btn-primary">
                  Вернуться к каталогу
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
