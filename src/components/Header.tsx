
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

const Header = ({ title, showBack = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="flex items-center gap-2 sm:gap-4">
            {showBack && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="p-1 sm:p-2"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            )}
            <h1 className="text-base sm:text-xl font-bold text-gray-900 truncate">{title}</h1>
          </div>
          
          <div className="text-sm sm:text-lg font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text">
            StudentMarketplace
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
