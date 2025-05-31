
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Users, ExternalLink, Video, Image } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  demoLink: string;
  price: string;
  rating: number;
  students: number;
  featured?: boolean;
}

interface ProjectDetailsDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestProject: (projectTitle: string) => void;
}

const ProjectDetailsDialog = ({ project, isOpen, onClose, onRequestProject }: ProjectDetailsDialogProps) => {
  if (!project) return null;

  // Demo content based on project category
  const getDemoContent = () => {
    const demoImages = [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop", // coding
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop", // laptop
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop", // code
    ];

    return (
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-6">
        <img 
          src={demoImages[project.id % 3]} 
          alt={`${project.title} demo`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-black/70 text-white hover:bg-black/80">
            <Video className="w-3 h-3 mr-1" />
            Demo Preview
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
            onClick={() => window.open(project.demoLink, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-6">
          <DialogHeader className="mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{project.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.students} students</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">{project.price}</div>
                <div className="text-sm text-gray-500">Complete Package</div>
              </div>
            </div>
          </DialogHeader>

          {getDemoContent()}

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-gray-300 text-gray-700 px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Complete Source Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Setup Instructions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                variant="outline" 
                className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => {
                  onRequestProject(project.title);
                  onClose();
                }}
              >
                Request This Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
