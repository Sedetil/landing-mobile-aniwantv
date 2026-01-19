import React from 'react';
import { Search, User, Bell } from 'lucide-react';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500 cursor-pointer">
              AniWanTV
            </h1>
          </div>

          {/* Right Icons (Menu on mobile/desktop) */}
          <div className="flex items-center gap-6">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
