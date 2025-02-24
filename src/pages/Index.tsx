
import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('DMS');

  const departments = [
    { name: 'DAS', label: 'Department of Arts and Sciences' },
    { name: 'DCS', label: 'Department of Computer Studies' },
    { name: 'DTE', label: 'Department of Teacher Education' },
    { name: 'DMS', label: 'Department of Management Studies' },
    { name: 'DCrim', label: 'Department of Criminology' },
  ];

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Programs', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const missionCards = [
    {
      title: "UNIVERSITY MISSION",
      content: "Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction and responsive research and development activities.",
    },
    {
      title: "QUALITY POLICY",
      content: "We Commit to the highest standards of education, value our stakeholders, Strive for continual improvement of our products and services, and uphold the University's tenets of Truth, Excellence, and Service to produce globally competitive and morally upright individuals.",
    },
    {
      title: "UNIVERSITY VISION",
      content: "The premier university in historic Cavite globally recognized for excellence in character development, academics, research, innovation and sustainable community engagement.",
    },
    {
      title: "CORE VALUES",
      content: "TRUTH\nEXCELLENCE\nSERVICE",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-blue-900 flex flex-col">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/public/lovable-uploads/f6eb11f2-3823-4a34-8399-4b05e8a85c70.png" alt="University Logo" className="h-12 w-12"/>
              <h1 className="text-white text-xl font-semibold">Cavite State University - Bacoor City Campus</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-secondary transition-colors">
                  <span>{selectedDepartment}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {departments.map((dept) => (
                    <DropdownMenuItem 
                      key={dept.name}
                      onClick={() => setSelectedDepartment(dept.name)}
                    >
                      {dept.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
          <h1 className="text-white text-5xl font-bold mb-4">
            INSTITUTIONAL DEVELOPMENT OFFICE
          </h1>
          <h2 className="text-white text-6xl font-bold mb-8 tracking-tight">
            ONLINE ACCREDITATION
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <h3 className="text-secondary font-bold mb-4 text-lg">
                {card.title}
              </h3>
              <p className="text-white/90 whitespace-pre-line">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 border-t border-white/10">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
              <p className="text-white/60 text-sm">
                Cavite State University - Bacoor City Campus is committed to excellence in education, research, and community service.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Departments</h3>
              <ul className="space-y-2">
                {departments.map((dept) => (
                  <li key={dept.name}>
                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                      {dept.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
              <address className="text-white/60 text-sm not-italic">
                Molino Road, Bayanan<br />
                Bacoor City, Cavite<br />
                Philippines<br />
                <a href="mailto:info@cvsubacoor.edu.ph" className="hover:text-white transition-colors">
                  info@cvsubacoor.edu.ph
                </a>
              </address>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
            © 2025 Cavite State University - Bacoor City Campus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
