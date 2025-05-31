import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import ProjectSearch from '../components/ProjectSearch';
import ProjectDetailsDialog from '../components/ProjectDetailsDialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: "E-Commerce MERN Stack",
      description: "Complete online store with payment integration, admin panel, user authentication, shopping cart functionality, and order management system",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Web Development",
      demoLink: "#",
      price: "₹999",
      rating: 4.8,
      students: 45,
      featured: true
    },
    {
      id: 2,
      title: "IoT Smart Home System",
      description: "Arduino-based home automation with mobile app control, sensor monitoring, voice commands, and real-time data visualization",
      tech: ["Arduino", "React Native", "Firebase", "NodeMCU", "IoT"],
      category: "IoT & Hardware",
      demoLink: "#",
      price: "₹1,299",
      rating: 4.9,
      students: 32,
      featured: true
    },
    {
      id: 3,
      title: "AI Chatbot with NLP",
      description: "Intelligent customer service bot with natural language processing, sentiment analysis, and machine learning capabilities",
      tech: ["Python", "TensorFlow", "Flask", "React", "NLTK"],
      category: "AI & ML",
      demoLink: "#",
      price: "₹1,599",
      rating: 4.7,
      students: 28,
      featured: true
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain technology with smart contracts and decentralized storage",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      demoLink: "#",
      price: "₹1,799",
      rating: 4.9,
      students: 19,
      featured: true
    },
    {
      id: 5,
      title: "Flutter Food Delivery App",
      description: "Cross-platform mobile app with real-time tracking, payment integration, restaurant management, and user reviews",
      tech: ["Flutter", "Firebase", "Google Maps", "Razorpay", "Dart"],
      category: "Mobile Development",
      demoLink: "#",
      price: "₹1,199",
      rating: 4.8,
      students: 41,
      featured: true
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence with charts, reporting, data visualization, and real-time analytics",
      tech: ["Python", "Django", "D3.js", "PostgreSQL", "Chart.js"],
      category: "Data Science",
      demoLink: "#",
      price: "₹899",
      rating: 4.6,
      students: 37,
      featured: false
    },
    {
      id: 7,
      title: "Unity 3D Game Project",
      description: "Complete 3D adventure game with character control, level design, sound effects, scoring system, and mobile optimization",
      tech: ["Unity", "C#", "Blender", "Photoshop", "Android"],
      category: "Game Development",
      demoLink: "#",
      price: "₹1,399",
      rating: 4.5,
      students: 23,
      featured: false
    },
    {
      id: 8,
      title: "Hospital Management System",
      description: "Complete hospital management with patient records, appointment scheduling, billing, inventory, and staff management",
      tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      category: "Web Development",
      demoLink: "#",
      price: "₹1,099",
      rating: 4.4,
      students: 35,
      featured: false
    },
    {
      id: 9,
      title: "Stock Price Predictor",
      description: "Machine learning model for stock price prediction using historical data, technical indicators, and neural networks",
      tech: ["Python", "Pandas", "Sklearn", "Keras", "Matplotlib"],
      category: "AI & ML",
      demoLink: "#",
      price: "₹1,299",
      rating: 4.6,
      students: 29,
      featured: false
    },
    {
      id: 10,
      title: "Weather Monitoring IoT",
      description: "Real-time weather monitoring system with sensors, data logging, web dashboard, and mobile notifications",
      tech: ["Arduino", "Python", "Flask", "SQLite", "Chart.js"],
      category: "IoT & Hardware",
      demoLink: "#",
      price: "₹899",
      rating: 4.3,
      students: 31,
      featured: false
    },
    {
      id: 11,
      title: "Social Media App React Native",
      description: "Full-featured social media application with posts, stories, messaging, notifications, and user profiles",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Redux"],
      category: "Mobile Development",
      demoLink: "#",
      price: "₹1,599",
      rating: 4.7,
      students: 26,
      featured: false
    },
    {
      id: 12,
      title: "Desktop Invoice Generator",
      description: "Professional desktop application for generating invoices, managing clients, tracking payments, and financial reports",
      tech: ["Electron", "React", "SQLite", "PDF-lib", "Chart.js"],
      category: "Desktop Applications",
      demoLink: "#",
      price: "₹799",
      rating: 4.2,
      students: 18,
      featured: false
    }
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDomain = selectedDomain === 'All Domains' || project.category === selectedDomain;
      
      return matchesSearch && matchesDomain;
    });
  }, [searchTerm, selectedDomain]);

  const handleRequestProject = (projectTitle: string) => {
    const formUrl = "https://forms.google.com/your-form-url";
    window.open(formUrl, '_blank');
  };

  const handleViewDemo = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header title="All Projects" showBack={true} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProjectSearch
            searchTerm={searchTerm}
            selectedDomain={selectedDomain}
            onSearchChange={setSearchTerm}
            onDomainChange={setSelectedDomain}
          />

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredProjects.length} Projects Found
              </h2>
              <div className="text-sm text-gray-600">
                {selectedDomain !== 'All Domains' && (
                  <span>in {selectedDomain}</span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{project.price}</div>
                      <div className="text-sm text-gray-500">⭐ {project.rating} ({project.students})</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-500">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50"
                      onClick={() => handleViewDemo(project)}
                    >
                      👀 Demo
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => handleRequestProject(project.title)}
                    >
                      Request
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search terms or domain filter</p>
            </div>
          )}
        </div>
      </div>

      <ProjectDetailsDialog 
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onRequestProject={handleRequestProject}
      />
    </>
  );
};

export default Projects;
