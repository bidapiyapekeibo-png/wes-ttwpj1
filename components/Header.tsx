import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight, Search, Book, GraduationCap, School, HeartHandshake, Moon, Sun } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
    setIsSearchOpen(false);
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const programsData = [
    { 
      name: 'S1 Teologi (S.Th)', 
      path: '/prodi/s1-teologi',
      desc: 'Membentuk teolog kontekstual dan biblikal.',
      icon: <Book className="w-5 h-5" />
    },
    { 
      name: 'S1 PAK (S.Pd)', 
      path: '/prodi/s1-pak',
      desc: 'Menghasilkan pendidik Kristen profesional.',
      icon: <HeartHandshake className="w-5 h-5" />
    },
    { 
      name: 'S2 Magister Teologi', 
      path: '/prodi/s2-teologi',
      desc: 'Pendalaman teologi untuk pemimpin gereja.',
      icon: <GraduationCap className="w-5 h-5" />
    },
    { 
      name: 'S2 Magister PAK', 
      path: '/prodi/s2-pak',
      desc: 'Pengembangan kepemimpinan pendidikan Kristen.',
      icon: <School className="w-5 h-5" />
    },
  ];

  const navigation = [
    { name: 'Beranda', path: '/' },
    {
      name: 'Profil',
      path: '#',
      dropdown: [
        { name: 'Sejarah', path: '/profil/sejarah' },
        { name: 'Visi & Misi', path: '/profil/visi' },
        { name: 'Nilai Dasar', path: '/profil/nilai' },
        { name: 'Akreditasi', path: '/profil/akreditasi' },
        { name: 'Struktur Organisasi', path: '/profil/struktur' },
        { name: 'Galeri Multimedia', path: '/profil/galeri' },
      ]
    },
    {
      name: 'Program Studi',
      path: '/prodi', // Updated to point to the overview page
      type: 'mega', 
      dropdown: programsData 
    },
    {
      name: 'Dosen',
      path: '#',
      dropdown: [
        { name: 'Dosen (Pendidik)', path: '/dosen/pendidik' },
        { name: 'Staf (Kependidikan)', path: '/dosen/staf' },
      ]
    },
    {
      name: 'Alumni & Mahasiswa',
      path: '#',
      dropdown: [
        { name: 'Organisasi Mahasiswa', path: '/mahasiswa/ormawa' },
        { name: 'Kegiatan Mahasiswa', path: '/mahasiswa/kegiatan' },
        { name: 'Profil Alumni', path: '/mahasiswa/alumni' },
        { name: 'Tracer Study', path: '/mahasiswa/tracer' },
      ]
    },
    {
      name: 'Layanan',
      path: '#',
      dropdown: [
        { name: 'PMB (Pendaftaran)', path: '/layanan/pmb' },
        { name: 'SiAkad', path: '/layanan/siakad' },
        { name: 'E-Learning', path: '/layanan/elearning' },
        { name: 'E-Library', path: '/layanan/elibrary' },
        { name: 'E-Journal', path: '/layanan/ejournal' },
      ]
    },
    {
      name: 'Berita',
      path: '#',
      dropdown: [
        { name: 'Berita Terkini', path: '/berita/terkini' },
        { name: 'Agenda Kampus', path: '/berita/agenda' },
        { name: 'Artikel', path: '/berita/artikel' },
        { name: 'Informasi', path: '/berita/informasi' },
      ]
    },
    { name: 'Kontak', path: '/contact' },
  ];

  const toggleMobileSubmenu = (name: string) => {
    if (activeMobileSubmenu === name) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(name);
    }
  };

  return (
    <header className="w-full z-50 fixed top-0 left-0 transition-all duration-300 font-sans">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-brand-blue dark:bg-gray-900 text-white py-2 hidden lg:block transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs tracking-wide">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-brand-gold" />
              <span>+62 967 123456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-brand-gold" />
              <span>info@sttwpj.ac.id</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-brand-gold" />
              <span>Sentani, Jayapura, Papua</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 border-b border-gray-100 dark:border-gray-800 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-white dark:bg-gray-900 py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-brand-gold transition-colors">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-gold transition-colors">STT Walter Post</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">JAYAPURA PAPUA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group h-full flex items-center">
                <Link
                  to={item.path}
                  className={`flex items-center font-bold text-sm uppercase tracking-wide transition-colors py-2 ${
                    location.pathname.startsWith(item.path) && item.path !== '/' 
                      ? 'text-brand-blue dark:text-brand-gold' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-gold'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className="ml-1 mt-0.5" />}
                </Link>

                {/* Dropdown Menu Logic */}
                {item.dropdown && (
                  item.type === 'mega' ? (
                    // Mega Menu
                    <div className="absolute top-full -left-20 w-[600px] bg-white dark:bg-gray-800 shadow-xl rounded-xl border-t-4 border-brand-gold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {item.dropdown.map((subItem: any) => (
                          <Link 
                            key={subItem.name} 
                            to={subItem.path}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group/item"
                          >
                            <div className="p-2 bg-brand-blue/10 dark:bg-gray-700 rounded-lg mr-4 group-hover/item:bg-brand-blue/20">
                              {subItem.icon}
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-900 dark:text-white group-hover/item:text-brand-blue dark:group-hover/item:text-brand-gold">{subItem.name}</h5>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subItem.desc}</p>
                            </div>
                          </Link>
                        ))}
                         <Link to="/prodi/fasilitas" className="col-span-2 mt-2 p-3 bg-brand-light/50 dark:bg-gray-700/50 rounded-lg text-center text-brand-blue dark:text-brand-gold font-bold text-sm hover:bg-brand-light dark:hover:bg-gray-700 border border-dashed border-brand-blue/30 dark:border-gray-600">
                           Lihat Fasilitas Akademik &rarr;
                         </Link>
                      </div>
                    </div>
                  ) : (
                    // Standard Dropdown
                    <div className="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 shadow-xl rounded-b-lg border-t-4 border-brand-gold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <ul className="py-2">
                        {item.dropdown.map((subItem: any) => (
                          <li key={subItem.name}>
                            <Link 
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-gold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-50 dark:border-gray-700 last:border-0"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden xl:flex items-center space-x-3">
             {/* Dark Mode Toggle */}
             <button
               onClick={toggleTheme}
               className="p-2 text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-gold transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
               title={isDarkMode ? "Mode Terang" : "Mode Gelap"}
             >
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>

             {/* Search Toggle */}
             <div className="relative">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-gold transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
                
                {/* Search Input Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top-2">
                    <form onSubmit={handleSearchSubmit} className="relative">
                      <input 
                        type="text" 
                        placeholder="Cari di website..."
                        className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-brand-blue dark:focus:border-brand-gold focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-gold text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                      />
                      <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-brand-blue dark:hover:text-brand-gold">
                        <Search size={16} />
                      </button>
                    </form>
                  </div>
                )}
             </div>

            {/* CTA Button */}
            <Link to="/layanan/pmb" className="bg-brand-gold hover:bg-amber-600 text-white px-5 py-2 rounded font-bold text-sm transition-all shadow-md">
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-gray-700 dark:text-white hover:text-brand-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl fixed inset-0 top-[70px] z-40 overflow-y-auto pb-20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
             <div className="flex justify-end mb-4">
                <button
                 onClick={toggleTheme}
                 className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
               >
                 {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                 <span>{isDarkMode ? "Mode Terang" : "Mode Gelap"}</span>
               </button>
             </div>

            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="mb-4 relative">
              <input 
                type="text" 
                placeholder="Cari..." 
                className="w-full p-3 pl-4 pr-10 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-700 focus:border-brand-blue outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <Search size={20} />
              </button>
            </form>

            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-50 dark:border-gray-800 last:border-0">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="w-full flex justify-between items-center py-3 text-gray-800 dark:text-white font-bold hover:text-brand-blue text-left"
                    >
                      {item.name}
                      {activeMobileSubmenu === item.name ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>
                    {activeMobileSubmenu === item.name && (
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg mb-2 p-2 pl-4">
                        {item.dropdown.map((subItem: any) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-gold transition-colors"
                          >
                             {/* Mobile Mega Menu Rendering: Show icon and description if available */}
                            {subItem.icon ? (
                                <div className="flex items-start">
                                    <div className="mr-3 mt-0.5 text-brand-blue dark:text-brand-gold">{subItem.icon}</div>
                                    <div>
                                        <div className="font-semibold">{subItem.name}</div>
                                        {subItem.desc && <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{subItem.desc}</div>}
                                    </div>
                                </div>
                            ) : (
                                subItem.name
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-3 text-gray-800 dark:text-white font-bold hover:text-brand-blue"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link to="/layanan/pmb" className="block w-full text-center bg-brand-blue text-white py-3 rounded-lg font-bold">
                Pendaftaran Mahasiswa Baru
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;