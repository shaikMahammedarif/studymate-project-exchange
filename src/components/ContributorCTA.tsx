
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ContributorCTA = () => {
  const handleContributeClick = () => {
    const formUrl = "https://forms.google.com/your-contributor-form-url"; // Replace with actual Google Form URL
    window.open(formUrl, '_blank');
  };

  const benefits = [
    {
      icon: "💰",
      title: "Earn Money",
      description: "Get paid for every project sale with competitive commissions"
    },
    {
      icon: "🎯",
      title: "Build Portfolio",
      description: "Showcase your skills and gain recognition in the community"
    },
    {
      icon: "📈",
      title: "Passive Income",
      description: "Your projects can generate income long after you graduate"
    },
    {
      icon: "🤝",
      title: "Help Peers",
      description: "Support fellow students while monetizing your hard work"
    }
  ];

  return (
    <section id="contribute" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-lg font-medium">👨‍💻 For Project Creators</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn Your Projects Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Profit
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Have a great project sitting in your repository? 
            Share it with fellow students and earn money while helping others succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Earning?
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-green-900 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/90">Submit your project details via our simple form</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-green-900 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/90">Our team reviews and lists your project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-green-900 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/90">Earn commission on every sale automatically</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-green-900 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/90">Get paid monthly via UPI</span>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={handleContributeClick}
              >
                Submit Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold mb-4">Join 200+ Contributors</h4>
                <p className="text-white/80 mb-6">
                  Our contributors have earned over ₹2,50,000 collectively by sharing their projects
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">₹15,000</div>
                    <div className="text-sm text-white/70">Avg. Monthly Earnings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">85%</div>
                    <div className="text-sm text-white/70">Commission Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorCTA;
