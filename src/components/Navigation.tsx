import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src="/lovable-uploads/7ec653d8-b796-48ee-9657-8f0301af6e55.png"  
                alt="Hayas Marketing Logo" 
                className="h-48 w-auto"  // Doble del tamaño anterior
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#soluciones" className="text-gray-700 hover:text-hayas-600 font-medium transition-colors">
              Soluciones
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-hayas-600 font-medium transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-hayas-600 font-medium transition-colors">
              La Agencia
            </a>
            <Link to="/blog" className="text-gray-700 hover:text-hayas-600 font-medium transition-colors">
              Blog
            </Link>
            <a href="#contacto" className="text-gray-700 hover:text-hayas-600 font-medium transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="gradient-primary text-white">
              Solicitar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#soluciones" 
                className="text-gray-700 hover:text-hayas-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Soluciones
              </a>
              <a 
                href="#servicios" 
                className="text-gray-700 hover:text-hayas-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#nosotros" 
                className="text-gray-700 hover:text-hayas-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                La Agencia
              </a>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-hayas-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-hayas-600 font-medium transition-colors px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <Button className="gradient-primary text-white mx-4">
                Solicitar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
