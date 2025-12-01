import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1018/1920/1080" 
          alt="STT Walter Post Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white pt-16">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-6 border border-brand-gold/50 rounded-full bg-brand-blue/30 backdrop-blur-md">
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Membentuk Hamba Tuhan</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
            Berkarakter Kristus, <br/>
            <span className="text-brand-gold">Unggul dalam Ilmu</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Sekolah Tinggi Teologi Walter Post Jayapura mempersiapkan pemimpin gereja dan pendidik Kristen yang siap melayani di tanah Papua dan bangsa-bangsa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/about" className="px-8 py-4 bg-brand-gold hover:bg-amber-600 text-white font-bold rounded-lg transition-all flex items-center justify-center group shadow-lg shadow-brand-gold/20">
              Tentang Kami
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/programs" className="px-8 py-4 bg-white hover:bg-gray-100 text-brand-blue font-bold rounded-lg transition-all flex items-center justify-center shadow-lg">
              Program Studi
              <BookOpen className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;