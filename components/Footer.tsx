import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-brand-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Widget */}
          <div>
            <div className="flex items-center space-x-2 mb-6 text-white">
              <div className="w-10 h-10 bg-brand-gold rounded flex items-center justify-center font-bold text-gray-900 text-xl">W</div>
              <span className="font-bold text-xl leading-none">STT Walter Post <br/><span className="text-xs font-normal text-gray-400">JAYAPURA PAPUA</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Membentuk pemimpin Kristen yang berintegritas, berilmu, dan siap melayani di tengah masyarakat yang majemuk.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Profil
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/profil/sejarah" className="hover:text-brand-gold transition-colors">Sejarah</Link></li>
              <li><Link to="/profil/visi" className="hover:text-brand-gold transition-colors">Visi & Misi</Link></li>
              <li><Link to="/profil/akreditasi" className="hover:text-brand-gold transition-colors">Akreditasi</Link></li>
              <li><Link to="/profil/struktur" className="hover:text-brand-gold transition-colors">Struktur Organisasi</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Akademik
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/prodi/s1-teologi" className="hover:text-brand-gold transition-colors">S1 Teologi</Link></li>
              <li><Link to="/prodi/s1-pak" className="hover:text-brand-gold transition-colors">S1 Pendidikan Agama Kristen</Link></li>
              <li><Link to="/prodi/s2-teologi" className="hover:text-brand-gold transition-colors">S2 Magister Teologi</Link></li>
              <li><Link to="/prodi/s2-pak" className="hover:text-brand-gold transition-colors">S2 Magister PAK</Link></li>
              <li><Link to="/layanan/ejournal" className="hover:text-brand-gold transition-colors">E-Journal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Hubungi Kami
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                <span>Jl. Pos 7 Sentani, Jayapura, Papua, Indonesia.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <span>(0967) 591xxx</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <span>admin@sttwpj.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} STT Walter Post Jayapura. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;