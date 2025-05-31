import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectDetailsDialog from './ProjectDetailsDialog';

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce MERN Stack",
      description: "Complete online store with payment integration, admin panel, and user authentication",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      demoLink: "#",
      price: "₹999",
      rating: 4.8,
      students: 45
    },
    {
      id: 2,
      title: "IoT Smart Home System",
      description: "Arduino-based home automation with mobile app control and sensor monitoring",
      tech: ["Arduino", "React Native", "Firebase", "NodeMCU"],
      category: "IoT & Hardware",
      demoLink: "#",
      price: "₹1,299",
      rating: 4.9,
      students: 32
    },
    {
      id: 3,
      title: "AI Chatbot with NLP",
      description: "Intelligent customer service bot with natural language processing capabilities",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      category: "AI & ML",
      demoLink: "#",
      price: "₹1,599",
      rating: 4.7,
      students: 28
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain technology",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      category: "Blockchain",
      demoLink: "#",
      price: "₹1,799",
      rating: 4.9,
      students: 19
    },
    {
      id: 5,
      title: "Flutter Food Delivery App",
      description: "Cross-platform mobile app with real-time tracking and payment integration",
      tech: ["Flutter", "Firebase", "Google Maps", "Razorpay"],
      category: "Mobile Development",
      demoLink: "#",
      price: "₹1,199",
      rating: 4.8,
      students: 41
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence with charts and reporting",
      tech: ["Python", "Django", "D3.js", "PostgreSQL"],
      category: "Data Science",
      demoLink: "#",
      price: "₹899",
      rating: 4.6,
      students: 37
    }
  ];

  const handleRequestProject = (projectTitle: string) => {
    const formUrl = "https://forms.google.com/your-form-url"; // Replace with actual Google Form URL
    window.open(formUrl, '_blank');
  };

  const handleViewDemo = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our curated collection of high-quality student projects. 
              Each comes with complete source code, documentation, and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      {project.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{project.price}</div>
                      <div className="text-sm text-gray-500">⭐ {project.rating} ({project.students})</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50"
                      onClick={() => handleViewDemo(project)}
                    >
                      👀 View Demo
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => handleRequestProject(project.title)}
                    >
                      Request Project
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
              onClick={() => navigate('/projects')}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ProjectDetailsDialog 
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onRequestProject={handleRequestProject}
      />
    </>
  );
};

export default ProjectShowcase;
