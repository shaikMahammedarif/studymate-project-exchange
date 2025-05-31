
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface ProjectSearchProps {
  searchTerm: string;
  selectedDomain: string;
  onSearchChange: (value: string) => void;
  onDomainChange: (value: string) => void;
}

const ProjectSearch = ({ searchTerm, selectedDomain, onSearchChange, onDomainChange }: ProjectSearchProps) => {
  const domains = [
    "All Domains",
    "Web Development",
    "Mobile Development", 
    "AI & ML",
    "IoT & Hardware",
    "Blockchain",
    "Data Science",
    "Game Development",
    "Desktop Applications"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects by title, tech stack..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="sm:w-64">
          <Select value={selectedDomain} onValueChange={onDomainChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Domain" />
            </SelectTrigger>
            <SelectContent>
              {domains.map((domain) => (
                <SelectItem key={domain} value={domain}>
                  {domain}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProjectSearch;
