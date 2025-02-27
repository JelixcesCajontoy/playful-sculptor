import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('DMS');

  const departments = [
    { 
      name: 'DAS', 
      label: 'Department of Arts and Sciences',
      programs: ['Bachelor of Science in Psychology', 'Bachelor of Arts in Communication']
    },
    { 
      name: 'DCS', 
      label: 'Department of Computer Studies',
      programs: ['BS in Computer Science', 'BS in Information Technology']
    },
    { 
      name: 'DTE', 
      label: 'Department of Teacher Education',
      programs: ['Bachelor in Elementary Education', 'Bachelor in Secondary Education']
    },
    { 
      name: 'DMS', 
      label: 'Department of Management Studies',
      programs: ['BS in Business Administration', 'BS in Hospitality Management']
    },
    { 
      name: 'DCrim', 
      label: 'Department of Criminology',
      programs: ['BS in Criminology']
    },
  ];

  const missionCards = [
    {
      title: "UNIVERSITY MISSION",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      alt: "University students collaborating"
    },
    {
      title: "QUALITY POLICY",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      alt: "Quality education representation"
    },
    {
      title: "UNIVERSITY VISION",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      alt: "Vision and growth representation"
    },
    {
      title: "CORE VALUES",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=800&q=80",
      alt: "Core values representation"
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/public/lovable-uploads/Cavite_State_University_(CvSU).png" alt="University Logo" className="h-12 w-12"/>
              <h1 className="text-white text-xl font-semibold">Cavite State University - Bacoor City Campus</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {departments.map((dept) => (
                <DropdownMenu key={dept.name}>
                  <DropdownMenuTrigger className={`flex items-center space-x-1 text-white hover:text-secondary transition-colors ${
                    selectedDepartment === dept.name ? 'text-secondary font-semibold' : ''
                  }`}>
                    <span>{dept.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {dept.programs.map((program) => (
                      <DropdownMenuItem 
                        key={program}
                        onClick={() => setSelectedDepartment(dept.name)}
                      >
                        {program}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-secondary transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-primary text-5xl font-bold mb-4">
            INSTITUTIONAL DEVELOPMENT OFFICE
          </h1>
          <h2 className="text-primary text-6xl font-bold mb-8 tracking-tight">
            ONLINE ACCREDITATION
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video w-full relative">
                <img 
                  src={card.image} 
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                  <h3 className="text-white font-bold text-xl px-4 text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <p className="text-white/80 text-sm">
                Cavite State University - Bacoor City Campus is committed to excellence in education, research, and community service.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {departments.map((dept) => (
                  <li key={dept.name}>
                    <button 
                      onClick={() => setSelectedDepartment(dept.name)}
                      className="text-white/80 hover:text-white text-sm transition-colors text-left"
                    >
                      {dept.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Departments</h3>
              <ul className="space-y-2">
                {departments.map((dept) => (
                  <li key={dept.name}>
                    <button 
                      onClick={() => setSelectedDepartment(dept.name)}
                      className="text-white/80 hover:text-white text-sm transition-colors text-left"
                    >
                      {dept.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="text-white/80 text-sm not-italic">
                Molino Road, Bayanan<br />
                Bacoor City, Cavite<br />
                Philippines<br />
                <a href="mailto:info@cvsubacoor.edu.ph" className="hover:text-white transition-colors">
                  info@cvsubacoor.edu.ph
                </a>
              </address>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 text-sm">
            © 2025 Cavite State University - Bacoor City Campus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
