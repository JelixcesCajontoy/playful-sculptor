
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
      image: "/lovable-uploads/mission.png",
      alt: "University Mission"
    },
    {
      title: "QUALITY POLICY",
      image: "/lovable-uploads/quality policy.png",
      alt: "Quality Policy"
    },
    {
      title: "UNIVERSITY VISION",
      image: "/lovable-uploads/vision.png",
      alt: "University Vision"
    },
    {
      title: "CORE VALUES",
      image: "/lovable-uploads/core values.png",
      alt: "Core Values"
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/Cavite_State_University_(CvSU).png" alt="University Logo" className="h-12 w-12"/>
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
        {/* Hero Section with Background Image */}
        <div 
          className="relative rounded-xl overflow-hidden mb-16 animate-fade-in py-16"
          style={{
            backgroundImage: `url('/lovable-uploads/cvsu_building.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0026B0]/70 to-[#FFD700]/50"></div>

          
          {/* Text content */}
          <div className="relative z-10 text-center">
            <h1 className="text-white text-5xl font-bold mb-2">
              Cavite State University - Bacoor City Campus
            </h1>
            <h1 className="text-white text-4xl mb-2">
              INSTITUTIONAL DEVELOPMENT OFFICE
            </h1>
            <h2 className="text-white text-8xl font-bold mb-2 tracking-tight">
              ONLINE ACCREDITATION
            </h2>
          </div>
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
