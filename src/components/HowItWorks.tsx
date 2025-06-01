
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your perfect project is just 4 simple steps away. 
            We've made it as easy as possible for students like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`}></div>
              
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>
                
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">No Middlemen</h4>
              <p className="text-gray-600 text-sm">Direct connection with project creators</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">💡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600 text-sm">Every project is manually reviewed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🤝</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Get help whenever you need it</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
  );
};

export default HowItWorks;
