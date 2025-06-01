import { Link } from "react-router-dom"; // ✅ make sure this is at the top of the file
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleEmailClick = () => {
    window.open('mailto:help.zapkits@gmail.com', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918555903625?text=Hello! I’m interested in a project from Zapkits and would like to know more about pricing and support.', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/zapkitsmarketplace', '_blank');
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContributorClick = () => {
    const contributorSection = document.getElementById('contribute');
    if (contributorSection) {
      contributorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorksClick = () => {
    window.open('https://forms.google.com/how-it-works', '_blank');
  };

  const handleSupportClick = () => {
    setContactOpen(true);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background Emoji Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl blur-sm">🚀</div>
          <div className="absolute top-20 right-20 text-5xl blur-sm">💻</div>
          <div className="absolute bottom-20 left-1/4 text-7xl blur-sm">🎓</div>
          <div className="absolute bottom-10 right-10 text-6xl blur-sm">⚡</div>
          <div className="absolute top-1/2 left-1/2 text-8xl blur-md transform -translate-x-1/2 -translate-y-1/2">🌟</div>
          <div className="absolute top-32 left-1/3 text-5xl blur-sm">🔥</div>
          <div className="absolute bottom-32 right-1/3 text-6xl blur-sm">💡</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2 relative">
  <div className="absolute -top-4 -left-4 text-4xl opacity-20 blur-sm">🎯</div>
  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text relative z-10">
    Zapkits
  </h3>
  <p className="text-gray-400 mb-6 max-w-md leading-relaxed relative z-10">
    Connecting students directly. No middlemen, no inflated prices. <br />
    Just authentic projects with real support from fellow students.
  </p>
  <div className="flex space-x-10 relative z-10">
    <button 
      onClick={handleEmailClick}
      className="flex flex-col items-center text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
      aria-label="Email"
    >
      <span className="text-4xl">📧</span>
      <span className="mt-1 text-sm font-medium">Email</span>
    </button>

    <button 
      onClick={handleWhatsAppClick}
      className="flex flex-col items-center text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
      aria-label="WhatsApp"
    >
      <span className="text-4xl">📱</span>
      <span className="mt-1 text-sm font-medium">WhatsApp</span>
    </button>

    <button 
      onClick={handleTelegramClick}
      className="flex flex-col items-center text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
      aria-label="Telegram"
    >
      <span className="text-4xl">💬</span>
      <span className="mt-1 text-sm font-medium">Telegram</span>
    </button>
  </div>
</div>

            {/* Quick Links */}
            <div className="relative">
              <div className="absolute -top-2 -right-2 text-3xl opacity-20 blur-sm">📚</div>
              <h4 className="text-lg font-semibold mb-4 relative z-10">Quick Links</h4>
              <ul className="space-y-2 relative z-10">
                <li>
                  <button 
                    onClick={handleProjectsClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Browse Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleContributorClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Become Contributor
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleHowItWorksClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleSupportClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>


       
           

<div className="relative">
  <div className="absolute -top-2 -left-2 text-3xl opacity-20 blur-sm">🛠️</div>
  <h4 className="text-lg font-semibold mb-4 relative z-10">Popular Categories</h4>
  <ul className="space-y-2 relative z-10">
    <li>
      <button 
        onClick={handleProjectsClick}
        className="text-gray-400 hover:text-white transition-colors hover:underline"
      >
        Web Development
      </button>
    </li>
    <li>
      <button 
        onClick={handleProjectsClick}
        className="text-gray-400 hover:text-white transition-colors hover:underline"
      >
        Mobile Apps
      </button>
    </li>
    <li>
      <button 
        onClick={handleProjectsClick}
        className="text-gray-400 hover:text-white transition-colors hover:underline"
      >
        IoT & Hardware
      </button>
    </li>
    <li>
      <button 
        onClick={handleProjectsClick}
        className="text-gray-400 hover:text-white transition-colors hover:underline"
      >
        AI & Machine Learning
      </button>
    </li>
  </ul>
</div>
</div>

          <div className="border-t border-gray-800 mt-12 pt-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-2xl opacity-30">❤️</div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zapkits. Made with ❤️ by students, for students.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button 
                  onClick={() => setPrivacyOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-sm hover:underline"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setTermsOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-sm hover:underline"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setContactOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-sm hover:underline"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed">
          <div className="absolute -top-4 -right-4 text-4xl opacity-10 blur-sm">🔒</div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Privacy Policy
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-gray-700 relative z-10">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">🛡️</div>
              <h3 className="font-semibold text-blue-800 mb-2">Information Collection</h3>
              <p>We collect minimal information necessary to provide our services, including your name, WhatsApp number, and project preferences when you submit requests through our Google Forms.</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">💚</div>
              <h3 className="font-semibold text-green-800 mb-2">Data Usage</h3>
              <p>Your data is used solely for processing project requests, facilitating communication between students, and providing customer support. We never sell or share your personal information with third parties.</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">🔐</div>
              <h3 className="font-semibold text-purple-800 mb-2">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All communications are conducted through secure channels.</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">📞</div>
              <h3 className="font-semibold text-orange-800 mb-2">Contact Information</h3>
              <p>If you have any questions about this Privacy Policy, please contact us via WhatsApp or email. We are committed to addressing your concerns promptly.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed">
          <div className="absolute -top-4 -left-4 text-4xl opacity-10 blur-sm">📋</div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Terms of Service
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-gray-700 relative z-10">
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">🤝</div>
              <h3 className="font-semibold text-indigo-800 mb-2">Service Agreement</h3>
              <p>By using StudentMarketplace, you agree to these terms. Our platform connects students for project sharing and support. All transactions are conducted directly between students.</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">⚖️</div>
              <h3 className="font-semibold text-red-800 mb-2">User Responsibilities</h3>
              <p>Users must provide accurate information, respect intellectual property rights, and use projects for educational purposes only. Misuse of projects or platform may result in account termination.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">💰</div>
              <h3 className="font-semibold text-yellow-800 mb-2">Payment Terms</h3>
              <p>All payments are processed manually via UPI. StudentMarketplace acts as a facilitator only. We are not responsible for payment disputes between users.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">🔄</div>
              <h3 className="font-semibold text-gray-800 mb-2">Refund Policy</h3>
              <p>Refunds are handled on a case-by-case basis. Please contact our support team within 24 hours of purchase for any issues with project delivery or quality.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Us Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="max-w-2xl relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed">
          <div className="absolute -top-6 -right-6 text-5xl opacity-10 blur-sm">📱</div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Contact Us
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 relative z-10">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg relative">
              <div className="absolute top-4 right-4 text-3xl opacity-20">🎯</div>
              <h3 className="font-semibold text-purple-800 mb-3">Get in Touch</h3>
              <p className="text-gray-700 mb-4">We're here to help! Reach out to us through any of these channels:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-50 hover:bg-green-100 p-4 rounded-lg border border-green-200 transition-colors text-left relative group"
              >
                <div className="absolute top-2 right-2 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">📱</div>
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-semibold text-green-800">WhatsApp</h4>
                <p className="text-green-600">+91 85559 03625</p>
                <p className="text-sm text-gray-600">24/7 Support Available</p>
              </button>
              
              <button 
                onClick={handleEmailClick}
                className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg border border-blue-200 transition-colors text-left relative group"
              >
                <div className="absolute top-2 right-2 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">📧</div>
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-blue-800">Email</h4>
                <p className="text-blue-600">help.zapkits@gmail.com</p>
                <p className="text-sm text-gray-600">Response within 24 hours</p>
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-500 relative">
              <div className="absolute top-2 right-2 text-2xl opacity-20">⏰</div>
              <h4 className="font-semibold text-orange-800 mb-2">Support Hours</h4>
              <p className="text-gray-700">Monday - Sunday: 9:00 AM - 11:00 PM IST</p>
              <p className="text-sm text-gray-600 mt-1">Emergency support available 24/7 via WhatsApp</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
