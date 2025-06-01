
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleEmailClick = () => {
    window.open('mailto:support@studentmarketplace.com', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello! I need help with StudentMarketplace', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/studentmarketplace', '_blank');
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
      <footer className="bg-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Background Emoji Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-4xl sm:text-6xl blur-sm">🚀</div>
          <div className="absolute top-20 right-20 text-3xl sm:text-5xl blur-sm">💻</div>
          <div className="absolute bottom-20 left-1/4 text-5xl sm:text-7xl blur-sm">🎓</div>
          <div className="absolute bottom-10 right-10 text-4xl sm:text-6xl blur-sm">⚡</div>
          <div className="absolute top-1/2 left-1/2 text-6xl sm:text-8xl blur-md transform -translate-x-1/2 -translate-y-1/2">🌟</div>
          <div className="absolute top-32 left-1/3 text-3xl sm:text-5xl blur-sm">🔥</div>
          <div className="absolute bottom-32 right-1/3 text-4xl sm:text-6xl blur-sm">💡</div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 relative">
              <div className="absolute -top-4 -left-4 text-2xl sm:text-4xl opacity-20 blur-sm">🎯</div>
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text relative z-10">
                StudentMarketplace
              </h3>
              <p className="text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed relative z-10 text-sm sm:text-base">
                Connecting students directly. No middlemen, no inflated prices. 
                Just authentic projects with real support from fellow students.
              </p>
              <div className="flex space-x-3 sm:space-x-4 relative z-10">
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                >
                  <span className="text-lg sm:text-2xl">📧</span>
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                >
                  <span className="text-lg sm:text-2xl">📱</span>
                </button>
                <button 
                  onClick={handleTelegramClick}
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                >
                  <span className="text-lg sm:text-2xl">💬</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="relative">
              <div className="absolute -top-2 -right-2 text-xl sm:text-3xl opacity-20 blur-sm">📚</div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 relative z-10">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 relative z-10">
                <li>
                  <button 
                    onClick={handleProjectsClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    Browse Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleContributorClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    Become Contributor
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleHowItWorksClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleSupportClick}
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-xl sm:text-3xl opacity-20 blur-sm">🛠️</div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 relative z-10">Popular Categories</h4>
              <ul className="space-y-1 sm:space-y-2 relative z-10">
                <li>
                  <a 
                    href="/projects?domain=Web+Development" 
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a 
                    href="/projects?domain=Mobile+Development" 
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a 
                    href="/projects?domain=IoT+%26+Hardware" 
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    IoT & Hardware
                  </a>
                </li>
                <li>
                  <a 
                    href="/projects?domain=AI+%26+ML" 
                    className="text-gray-400 hover:text-white transition-colors hover:underline text-sm sm:text-base"
                  >
                    AI & Machine Learning
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-lg sm:text-2xl opacity-30">❤️</div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © {currentYear} StudentMarketplace. Made with ❤️ by students, for students.
              </p>
              <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
                <button 
                  onClick={() => setPrivacyOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm hover:underline"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setTermsOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm hover:underline"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setContactOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm hover:underline"
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
        <DialogContent className="max-w-sm sm:max-w-2xl lg:max-w-4xl max-h-[80vh] sm:max-h-[85vh] overflow-y-auto mx-4 sm:mx-auto">
          <div className="absolute -top-4 -right-4 text-2xl sm:text-4xl opacity-10 blur-sm">🔒</div>
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Privacy Policy
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 sm:space-y-6 text-gray-700 relative z-10">
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">🛡️</div>
              <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Information Collection</h3>
              <p className="text-xs sm:text-sm">We collect minimal information necessary to provide our services, including your name, WhatsApp number, and project preferences when you submit requests through our Google Forms.</p>
            </div>
            
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">💚</div>
              <h3 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">Data Usage</h3>
              <p className="text-xs sm:text-sm">Your data is used solely for processing project requests, facilitating communication between students, and providing customer support. We never sell or share your personal information with third parties.</p>
            </div>
            
            <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border-l-4 border-purple-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">🔐</div>
              <h3 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Data Security</h3>
              <p className="text-xs sm:text-sm">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All communications are conducted through secure channels.</p>
            </div>
            
            <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border-l-4 border-orange-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">📞</div>
              <h3 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">Contact Information</h3>
              <p className="text-xs sm:text-sm">If you have any questions about this Privacy Policy, please contact us via WhatsApp or email. We are committed to addressing your concerns promptly.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-sm sm:max-w-2xl lg:max-w-4xl max-h-[80vh] sm:max-h-[85vh] overflow-y-auto mx-4 sm:mx-auto">
          <div className="absolute -top-4 -left-4 text-2xl sm:text-4xl opacity-10 blur-sm">📋</div>
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Terms of Service
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 sm:space-y-6 text-gray-700 relative z-10">
            <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg border-l-4 border-indigo-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">🤝</div>
              <h3 className="font-semibold text-indigo-800 mb-2 text-sm sm:text-base">Service Agreement</h3>
              <p className="text-xs sm:text-sm">By using StudentMarketplace, you agree to these terms. Our platform connects students for project sharing and support. All transactions are conducted directly between students.</p>
            </div>
            
            <div className="bg-red-50 p-3 sm:p-4 rounded-lg border-l-4 border-red-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">⚖️</div>
              <h3 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">User Responsibilities</h3>
              <p className="text-xs sm:text-sm">Users must provide accurate information, respect intellectual property rights, and use projects for educational purposes only. Misuse of projects or platform may result in account termination.</p>
            </div>
            
            <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">💰</div>
              <h3 className="font-semibold text-yellow-800 mb-2 text-sm sm:text-base">Payment Terms</h3>
              <p className="text-xs sm:text-sm">All payments are processed manually via UPI. StudentMarketplace acts as a facilitator only. We are not responsible for payment disputes between users.</p>
            </div>
            
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-gray-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">🔄</div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Refund Policy</h3>
              <p className="text-xs sm:text-sm">Refunds are handled on a case-by-case basis. Please contact our support team within 24 hours of purchase for any issues with project delivery or quality.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Us Modal */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="max-w-sm sm:max-w-xl lg:max-w-2xl mx-4 sm:mx-auto">
          <div className="absolute -top-6 -right-6 text-3xl sm:text-5xl opacity-10 blur-sm">📱</div>
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Contact Us
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 sm:space-y-6 relative z-10">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6 rounded-lg relative">
              <div className="absolute top-4 right-4 text-2xl sm:text-3xl opacity-20">🎯</div>
              <h3 className="font-semibold text-purple-800 mb-3 text-sm sm:text-base">Get in Touch</h3>
              <p className="text-gray-700 mb-4 text-xs sm:text-sm">We're here to help! Reach out to us through any of these channels:</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-50 hover:bg-green-100 p-3 sm:p-4 rounded-lg border border-green-200 transition-colors text-left relative group"
              >
                <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20 group-hover:opacity-40 transition-opacity">📱</div>
                <div className="text-lg sm:text-2xl mb-2">📱</div>
                <h4 className="font-semibold text-green-800 text-sm sm:text-base">WhatsApp</h4>
                <p className="text-green-600 text-xs sm:text-sm">+91 98765 43210</p>
                <p className="text-xs text-gray-600">24/7 Support Available</p>
              </button>
              
              <button 
                onClick={handleEmailClick}
                className="bg-blue-50 hover:bg-blue-100 p-3 sm:p-4 rounded-lg border border-blue-200 transition-colors text-left relative group"
              >
                <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20 group-hover:opacity-40 transition-opacity">📧</div>
                <div className="text-lg sm:text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-blue-800 text-sm sm:text-base">Email</h4>
                <p className="text-blue-600 text-xs sm:text-sm">support@studentmarketplace.com</p>
                <p className="text-xs text-gray-600">Response within 24 hours</p>
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 sm:p-4 rounded-lg border-l-4 border-orange-500 relative">
              <div className="absolute top-2 right-2 text-lg sm:text-2xl opacity-20">⏰</div>
              <h4 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">Support Hours</h4>
              <p className="text-gray-700 text-xs sm:text-sm">Monday - Sunday: 9:00 AM - 11:00 PM IST</p>
              <p className="text-xs text-gray-600 mt-1">Emergency support available 24/7 via WhatsApp</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
