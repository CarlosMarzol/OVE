
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Observatorio', href: '/' },
  { label: 'Estadísticas', href: '/estadisticas' },
  { 
    label: 'Publicaciones', 
    href: '/publicaciones', 
    hasDropdown: false, // Simplificado para este ejemplo
  },
  { label: 'Tendencias', href: '/tendencias' },
  { label: 'Blog', href: '/blog' },
  { label: 'Boletín', href: '/boletin' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      {/* Tricolor Top Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-ven-yellow via-ven-blue to-ven-red"></div>
      
      {/* Main Navbar */}
      <div className={`transition-all duration-300 border-b border-gray-100 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                   {/* Yellow Top Swoosh */}
                   <path d="M15 50 C 15 25 35 10 75 12 L 85 5 L 82 20 C 50 20 30 35 30 50 Z" fill="#F7C600"/>
                   {/* Blue Middle Arrow/Swoosh */}
                   <path d="M25 55 C 35 40 65 25 95 15 L 100 28 L 90 32 C 65 35 45 50 35 60 Z" fill="#00247D"/>
                   {/* Red Bottom Swoosh */}
                   <path d="M30 65 C 40 80 65 90 90 88 L 85 98 L 25 85 C 20 70 25 65 30 65 Z" fill="#CF142B"/>
                   
                   {/* Globe Container */}
                   <circle cx="55" cy="58" r="19" fill="white"/>
                   <circle cx="55" cy="58" r="17" fill="#00247D" stroke="white" strokeWidth="1.5"/>
                   
                   {/* Globe Network Lines */}
                   <path d="M45 58 H 65 M 55 48 V 68 M 48 51 L 62 65 M 62 51 L 48 65" stroke="white" strokeWidth="0.8" opacity="0.6"/>
                   
                   {/* Bs Symbol */}
                   <text x="55" y="63" fontSize="13" fontWeight="900" fill="#F7C600" textAnchor="middle" style={{fontFamily: 'Arial, sans-serif'}}>Bs</text>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter leading-none text-gray-800 font-sans">
                  OEV
                </h1>
                <p className="text-[10px] md:text-[11px] leading-tight text-gray-500 font-semibold uppercase tracking-wide max-w-[160px]">
                  Observatorio de Economía de Venezuela
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group px-1">
                  <Link 
                    to={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 
                      ${isActive(item.href) ? 'text-ven-blue bg-ven-blue/5' : 'text-gray-600 hover:text-ven-blue hover:bg-ven-blue/5'}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />}
                  </Link>
                  
                  {/* Desktop Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl rounded-lg py-2 hidden group-hover:block border-t-4 border-ven-yellow transform origin-top animate-fade-in ring-1 ring-black/5 z-50">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link 
                          key={dropItem.label} 
                          to={dropItem.href}
                          className="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-ven-blue font-medium transition-colors border-l-4 border-transparent hover:border-ven-blue"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
               <div className="relative group">
                  <button className="p-2 text-gray-400 hover:text-ven-blue transition-colors hover:bg-gray-100 rounded-full">
                    <Search size={20} />
                  </button>
               </div>
               <Link to="/boletin" className="bg-ven-blue hover:bg-ven-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-ven-blue/20 transition-all transform hover:-translate-y-0.5">
                  Suscribirse
               </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl h-screen overflow-y-auto">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                <div 
                  className="flex justify-between items-center px-6 py-4 text-gray-700 font-semibold hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    if (item.hasDropdown) {
                        toggleDropdown(item.label)
                    } else {
                        setIsOpen(false);
                    }
                  }}
                >
                  <Link to={item.href} className="flex-grow" onClick={() => !item.hasDropdown && setIsOpen(false)}>{item.label}</Link>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-5 h-5 text-ven-blue transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </div>
                
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="bg-gray-50 px-8 py-2 border-l-4 border-ven-yellow mx-6 my-2">
                    {item.dropdownItems?.map((dropItem) => (
                      <Link 
                        key={dropItem.label} 
                        to={dropItem.href}
                        className="block py-3 text-sm text-gray-600 hover:text-ven-blue"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-6 mt-4">
                <Link to="/boletin" onClick={() => setIsOpen(false)} className="w-full bg-ven-red text-white py-3 rounded-lg font-bold shadow-md text-center block">
                    Suscribirse al Boletín
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
