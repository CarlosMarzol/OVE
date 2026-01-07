import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems: NavItem[] = [
  { 
    label: 'Observatorio', 
    href: '/',
    hasDropdown: true,
    dropdownItems: [
        { label: 'Inicio', href: '/' },
        { label: 'Misión y Metodología', href: '/mision' }
    ]
  },
  { 
    label: 'Estadísticas', 
    href: '/estadisticas',
    hasDropdown: true,
    dropdownItems: [
        { label: 'Panel General', href: '/estadisticas' },
        { label: 'Macroeconomía', href: '/estadisticas/macroeconomia' },
        { label: 'Sector Monetario', href: '/estadisticas/monetario' },
        { label: 'Energía y Petróleo', href: '/estadisticas/energia' },
        { label: 'Social y Consumo', href: '/estadisticas/social' }
    ]
  },
  { 
    label: 'Publicaciones', 
    href: '/publicaciones', 
    hasDropdown: false, 
  },
  { label: 'Tendencias', href: '/tendencias' },
  { label: 'Blog', href: '/blog' },
  { label: 'Boletín', href: '/boletin' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const location = useLocation();
  
  // URL directa optimizada para evitar bloqueos de Google Drive
  const logoUrl = "https://lh3.googleusercontent.com/d/1xmD_TZzJLzviRzNEnKTA7_n8EADxpHPx";

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
    <header className={`fixed w-full z-50 transition-all duration-300 top-0 
      ${scrolled ? 'shadow-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm' : 'bg-white dark:bg-slate-950'}`}>
      {/* Tricolor Top Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-ven-yellow via-ven-blue to-ven-red"></div>
      
      {/* Main Navbar */}
      <div className={`transition-all duration-300 border-b border-gray-100 dark:border-slate-800 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-300 flex items-center justify-center">
                {!imageError ? (
                  <img 
                    src={logoUrl} 
                    alt="Observatorio de Economía de Venezuela Logo" 
                    className="w-full h-full object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-ven-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    OEV
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter leading-none text-gray-800 dark:text-gray-100 font-sans">
                  OEV
                </h1>
                <p className="text-[10px] md:text-[11px] leading-tight text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide max-w-[160px]">
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
                      ${isActive(item.href) 
                        ? 'text-ven-blue dark:text-ven-yellow bg-ven-blue/5 dark:bg-ven-yellow/10' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-ven-blue dark:hover:text-ven-yellow hover:bg-ven-blue/5 dark:hover:bg-ven-yellow/10'}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />}
                  </Link>
                  
                  {/* Desktop Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-slate-900 shadow-xl rounded-lg py-2 hidden group-hover:block border-t-4 border-ven-yellow transform origin-top animate-fade-in ring-1 ring-black/5 dark:ring-white/10 z-50">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link 
                          key={dropItem.label} 
                          to={dropItem.href}
                          className="block px-5 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-ven-blue dark:hover:text-ven-yellow font-medium transition-colors border-l-4 border-transparent hover:border-ven-blue"
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
               <ThemeToggle />
               <div className="relative group">
                  <button className="p-2.5 text-gray-400 dark:text-gray-400 hover:text-ven-blue dark:hover:text-ven-yellow transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full">
                    <Search size={20} />
                  </button>
               </div>
               <Link to="/boletin" className="bg-ven-blue hover:bg-ven-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-ven-blue/20 transition-all transform hover:-translate-y-0.5">
                  Suscribirse
               </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-600 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 absolute w-full shadow-2xl h-screen overflow-y-auto top-[72px]">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 dark:border-slate-800 last:border-0">
                <div 
                  className="flex justify-between items-center px-6 py-4 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"
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
                    <ChevronDown className={`w-5 h-5 text-ven-blue dark:text-ven-yellow transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </div>
                
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="bg-gray-50 dark:bg-slate-950 px-8 py-2 border-l-4 border-ven-yellow mx-6 my-2">
                    {item.dropdownItems?.map((dropItem) => (
                      <Link 
                        key={dropItem.label} 
                        to={dropItem.href}
                        className="block py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-ven-blue dark:hover:text-ven-yellow"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-6 mt-4 space-y-4">
                <div className="flex justify-center">
                    <ThemeToggle />
                </div>
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