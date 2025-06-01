import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">
        <div className="text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-medium">🎓 By Students, For Students</span>
          </div>
          
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Real Projects,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Real Results
            </span>
          </h1>
          
          <p className="text-xs sm:text-lg md:text-xl mb-4 sm:mb-6 text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Discover quality academic projects from your peers. 
            No brokers, no inflated costs. Just authentic student work 
            with 24/7 guidance included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-4">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold w-full sm:w-auto"
              onClick={() => document.getElementById('contribute')?.scrollIntoView({ behavior: 'smooth' })}
            >
              💰 Earn with Your Projects
            </Button>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-white/70 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">500+ Happy Students</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">100+ Projects Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">24/7 Support Included</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300/20 rounded-full blur-lg"></div>
    </section>
  );
};

export default Hero;
