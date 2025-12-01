import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  parent?: string;
  parentPath?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  parent, 
  parentPath = '#',
  image = 'https://picsum.photos/id/437/1920/600' // Default academic background
}) => {
  return (
    <div className="relative bg-gray-900 text-white h-[300px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">{title}</h1>
        <div className="flex items-center justify-center space-x-2 text-sm font-medium opacity-90">
          <Link to="/" className="hover:text-brand-gold transition-colors">Beranda</Link>
          <ChevronRight size={14} className="text-brand-gold" />
          {parent && (
            <>
              <Link to={parentPath} className="hover:text-brand-gold transition-colors">{parent}</Link>
              <ChevronRight size={14} className="text-brand-gold" />
            </>
          )}
          <span className="text-brand-gold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;