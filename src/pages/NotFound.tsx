
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, FileText } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add page title and meta tags for SEO
    document.title = "404 - Page Not Found | Invoice Generator";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The page you are looking for does not exist. Return to our free invoice generator tool to create professional invoices online.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'The page you are looking for does not exist. Return to our free invoice generator tool to create professional invoices online.';
      document.head.appendChild(newMeta);
    }
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
            <Button asChild size="lg" className="w-full flex items-center justify-center gap-2">
              <Link to="/">
                <Home className="h-5 w-5" />
                <span>Return to Home</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full flex items-center justify-center gap-2">
              <Link to="/invoice">
                <FileText className="h-5 w-5" />
                <span>Create an Invoice</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
