import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navigation = [
    { name: 'Beranda', path: '/' },
    {
      name: 'Profil',
      path: '#',
      dropdown: [
        { name: 'Sejarah', path: '/profil/sejarah' },
        { name: 'Visi', path: '/profil/visi' },
        { name: 'Misi', path: '/profil/misi' },
        { name: 'Nilai', path: '/profil/nilai' },
        { name: 'Akreditasi', path: '/profil/akreditasi' },
        { name: 'Struktur Organisasi', path: '/profil/struktur' },
        { name: 'Galeri Multimedia', path: '/profil/galeri' },
      ]
    },
    {
      name: 'Program Studi',
      path: '#',
      dropdown: [
        { name: 'S1 Teologi (S.Th)', path: '/prodi/s1-teologi' },
        { name: 'S1 Pendidikan Agama Kristen (S.Pd)', path: '/prodi/s1-pak' },
        { name: 'S2 Magister Teologi (M.Th)', path: '/prodi/s2-teologi' },
        { name: 'S2 Magister PAK (M.Pd)', path: '/prodi/s2-pak' },
        { name: 'Fasilitas Akademik', path: '/prodi/fasilitas' },
      ]
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
      <div className="bg-brand-blue text-white py-2 hidden lg:block">
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
          <div className="flex items-center space-x-2">
            <MapPin size={14} className="text-brand-gold" />
            <span>Sentani, Jayapura, Papua</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-brand-gold transition-colors">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight group-hover:text-brand-blue transition-colors">STT Walter Post</span>
              <span className="text-xs text-gray-500 font-medium tracking-wider">JAYAPURA PAPUA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center font-bold text-sm uppercase tracking-wide transition-colors py-2 ${
                    location.pathname.startsWith(item.path) && item.path !== '/' 
                      ? 'text-brand-blue' 
                      : 'text-gray-700 hover:text-brand-blue'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className="ml-1 mt-0.5" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-brand-gold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <ul className="py-2">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <Link 
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-blue hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden xl:flex items-center space-x-3">
             {/* Search Toggle */}
             <div className="relative">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-brand-blue transition-colors rounded-full hover:bg-gray-100"
                >
                  {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
                
                {/* Search Input Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white shadow-lg rounded-lg p-3 border border-gray-200 animate-in fade-in slide-in-from-top-2">
                    <form onSubmit={handleSearchSubmit} className="relative">
                      <input 
                        type="text" 
                        placeholder="Cari di website..."
                        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                      />
                      <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue">
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
            className="xl:hidden text-gray-700 hover:text-brand-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl fixed inset-0 top-[70px] z-40 overflow-y-auto pb-20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="mb-4 relative">
              <input 
                type="text" 
                placeholder="Cari..." 
                className="w-full p-3 pl-4 pr-10 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-brand-blue outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Search size={20} />
              </button>
            </form>

            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-50 last:border-0">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="w-full flex justify-between items-center py-3 text-gray-800 font-bold hover:text-brand-blue text-left"
                    >
                      {item.name}
                      {activeMobileSubmenu === item.name ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>
                    {activeMobileSubmenu === item.name && (
                      <div className="bg-gray-50 rounded-lg mb-2 p-2 pl-4">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-600 hover:text-brand-blue"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-3 text-gray-800 font-bold hover:text-brand-blue"
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