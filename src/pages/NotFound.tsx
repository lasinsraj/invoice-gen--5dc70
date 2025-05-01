
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add page title for SEO
    document.title = "404 - Page Not Found | Invoice Generator";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-invoice-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link to="/invoice">Create an Invoice</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
