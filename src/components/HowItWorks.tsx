
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Browse Projects",
      description: "Explore our curated collection of student projects with detailed tech stacks and live demos",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Request & Pay",
      description: "Fill our simple form and pay securely via UPI. No hidden fees, transparent pricing",
      icon: "💳",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Get Files + Support",
      description: "Receive complete source code, documentation, and 24/7 WhatsApp support from creators",
      icon: "📦",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Build & Learn",
      description: "Use the project for your academics with full understanding and guidance included",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Getting your perfect project is just 4 simple steps away. 
            We've made it as easy as possible for students like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`}></div>
              
              <CardContent className="p-4 sm:p-8 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${step.color} text-white text-lg sm:text-2xl font-bold mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                
                <div className="text-2xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-green-600 text-lg sm:text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">No Middlemen</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Direct connection with project creators</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-blue-600 text-lg sm:text-xl">💡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Quality Assured</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Every project is manually reviewed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-purple-600 text-lg sm:text-xl">🤝</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">24/7 Support</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Get help whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
