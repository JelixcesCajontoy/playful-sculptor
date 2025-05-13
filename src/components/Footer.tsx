
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p className="text-white/80 text-sm">
              Cavite State University - Bacoor City Campus is committed to excellence in education, research, and community service.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Departments</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><span className="hover:text-white transition-colors">Department of Arts and Sciences</span></li>
              <li><span className="hover:text-white transition-colors">Department of Computer Studies</span></li>
              <li><span className="hover:text-white transition-colors">Department of Teacher Education</span></li>
              <li><span className="hover:text-white transition-colors">Department of Management Studies</span></li>
              <li><span className="hover:text-white transition-colors">Department of Criminology</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Courses Offered</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><span className="hover:text-white transition-colors">Bachelor of Science in Psychology</span></li>
              <li><span className="hover:text-white transition-colors">Bachelor of Science in Computer Science</span></li>
              <li><span className="hover:text-white transition-colors">Bachelor of Science in Information Technology</span></li>
              <li><span className="hover:text-white transition-colors">Bachelor in Secondary Education - Math</span></li>
              <li><span className="hover:text-white transition-colors">Bachelor of Science in Business Administration</span></li>
              <li><span className="hover:text-white transition-colors">Bachelor of Science in Hospitality Management</span></li>
              <li><span className="hover:text-white transition-colors">Bachelor of Science in Criminology</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="text-white/80 text-sm not-italic space-y-2">
              <p>Soldiers Hills IV, Molino VI</p>
              <p>Bacoor City, Cavite</p>
              <p>Philippines</p>
              <a href="mailto:cvsubacoor@cvsu.edu.ph" className="hover:text-white transition-colors block">
                cvsubacoor@cvsu.edu.ph
              </a>
            </address>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 text-sm">
          © 2025 Cavite State University - Bacoor City Campus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
