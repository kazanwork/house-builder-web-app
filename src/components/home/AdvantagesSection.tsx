
import { Shield, Clock, ThumbsUp, HeartHandshake, Lightbulb, Settings } from "lucide-react";

const advantages = [
  {
    icon: <Shield className="h-10 w-10 text-construction-accent" />,
    title: "Надежность",
    description: "Мы используем только проверенные материалы и технологии, гарантируя долговечность вашего дома."
  },
  {
    icon: <Clock className="h-10 w-10 text-construction-accent" />,
    title: "Соблюдение сроков",
    description: "Работаем по четкому графику и сдаем объекты вовремя, избегая задержек и непредвиденных обстоятельств."
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-construction-accent" />,
    title: "Высокое качество",
    description: "Строгий контроль на всех этапах строительства обеспечивает безупречное качество конечного результата."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-construction-accent" />,
    title: "Индивидуальный подход",
    description: "Учитываем все пожелания заказчика и адаптируем проекты под конкретные потребности и условия."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-construction-accent" />,
    title: "Современные решения",
    description: "Применяем инновационные технологии строительства и энергоэффективные решения для вашего комфорта."
  },
  {
    icon: <Settings className="h-10 w-10 text-construction-accent" />,
    title: "Полный цикл работ",
    description: "От проектирования до финальной отделки - полное сопровождение на всех этапах строительства."
  }
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Наши преимущества</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы стремимся к совершенству в каждом проекте и гордимся качеством наших услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div key={index} className="card-advantage group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
