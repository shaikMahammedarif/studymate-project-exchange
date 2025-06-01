
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TrustIndicators = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "CSE, Final Year",
      college: "IIT Delhi",
      text: "Got my MERN stack project with complete documentation. The 24/7 support was incredible!",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Arjun Patel",
      course: "IT, 3rd Year", 
      college: "NIT Surat",
      text: "The IoT project helped me understand hardware integration perfectly. Worth every penny!",
      rating: 5,
      project: "Smart Home System"
    },
    {
      name: "Sneha Reddy",
      course: "CSE, Final Year",
      college: "BITS Pilani",
      text: "Amazing quality and the creator was super helpful. Definitely recommending to my friends!",
      rating: 5,
      project: "AI Chatbot"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Happy Students",
      icon: "👨‍🎓"
    },
    {
      number: "100+",
      label: "Quality Projects",
      icon: "💻"
    },
    {
      number: "200+",
      label: "Contributors",
      icon: "👨‍💻"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      


        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our community of students has to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.course}</div>
                  <div className="text-sm text-gray-500">{testimonial.college}</div>
                  <div className="text-xs text-purple-600 mt-2 bg-purple-50 px-2 py-1 rounded-full inline-block">
                    Project: {testimonial.project}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Trust Us?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔒</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Secure Payments</h4>
              <p className="text-gray-600 text-sm">All transactions via trusted UPI. No card details stored.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">✅</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h4>
              <p className="text-gray-600 text-sm">Every project manually reviewed by our expert team.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📱</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Instant Support</h4>
              <p className="text-gray-600 text-sm">Get help immediately via WhatsApp from project creators.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
<div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center">
  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
    Connect With Us
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-yellow-600 text-xl">📧</span>
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
      <p className="text-gray-600 text-sm mb-4">help.zapkits@gmail.com</p>
      <button
        onClick={() => window.location.href = "mailto:help.zapkits@gmail.com"}
        className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
      >
        Email Now
      </button>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-green-600 text-xl">📱</span>
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
      <p className="text-gray-600 text-sm mb-4">+91 85559 03625</p>
      <button
        onClick={() => window.open("https://wa.me/918555903625", "_blank")}
        className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </button>
    </div>
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-blue-600 text-xl">💬</span>
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">Telegram</h4>
      <p className="text-gray-600 text-sm mb-4">@zapkits</p>
      <button
        onClick={() => window.open("https://t.me/zapkitsmarketplace", "_blank")}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Message on Telegram
      </button>
    </div>
  </div>
</div>

    </section>
  );
};

export default TrustIndicators;
