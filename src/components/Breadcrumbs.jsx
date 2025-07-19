
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNames = {
    sobre: 'Sobre Nós',
    servicos: 'Serviços',
    produtos: 'Produtos',
    blog: 'Blog',
    contato: 'Contato'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="breadcrumb container mx-auto px-4 mt-20">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link 
            to="/" 
            className="flex items-center text-muted-foreground hover:text-[#2d7e43] transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbNames[name] || name;

          return (
            <li key={name} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
              {isLast ? (
                <span className="text-[#2d7e43] font-medium">{displayName}</span>
              ) : (
                <Link 
                  to={routeTo}
                  className="text-muted-foreground hover:text-[#2d7e43] transition-colors"
                >
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
