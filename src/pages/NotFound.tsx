
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-construction-light px-4">
        <div className="text-center max-w-xl">
          <h1 className="text-9xl font-bold text-construction-accent mb-4">404</h1>
          <p className="text-3xl font-medium mb-6">Страница не найдена</p>
          <p className="text-xl text-gray-600 mb-8">
            Запрашиваемая страница не существует или была перемещена
          </p>
          <Link to="/">
            <Button className="btn-primary text-lg">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
