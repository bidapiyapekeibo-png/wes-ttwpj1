import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, CheckCircle, Users, Image as ImageIcon, Calendar, Award, Download, ArrowRight, User, MapPin, Phone, Mail, ChevronDown, ChevronRight, X, ZoomIn, Search, Library, ExternalLink, Filter, FileText, CreditCard, PenTool } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HistorySection from './components/HistorySection';
import Programs from './components/Programs';
import Footer from './components/Footer';
import PageHeader from './components/PageHeader';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Layout Components ---

interface PageLayoutProps {
  title: string;
  parent?: string;
  parentPath?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, parent, parentPath, children }) => (
  <div className="min-h-screen bg-gray-50">
    <PageHeader title={title} parent={parent} parentPath={parentPath} />
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content Area */}
        <div className="lg:w-3/4">
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 min-h-[500px]">
             {children}
           </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24 space-y-8">
            {/* Widget 1: Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-blue border-b pb-2">Tautan Cepat</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/layanan/pmb" className="flex items-center text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Pendaftaran Online</Link></li>
                <li><Link to="/layanan/elibrary" className="flex items-center text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> E-Library</Link></li>
                <li><Link to="/prodi/fasilitas" className="flex items-center text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Fasilitas Kampus</Link></li>
                <li><Link to="/berita/informasi" className="flex items-center text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Pengumuman</Link></li>
                <li><Link to="/contact" className="flex items-center text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Widget 2: Brochure */}
            <div className="bg-gray-50 p-4 rounded border border-gray-200 text-center">
              <Download className="mx-auto text-brand-gold mb-2" size={32} />
              <h4 className="font-bold text-sm text-gray-800 mb-1">Brosur Akademik</h4>
              <p className="text-xs text-gray-500 mb-3">Unduh panduan lengkap akademik tahun 2024.</p>
              <button className="text-xs font-bold text-brand-blue border border-brand-blue px-4 py-2 rounded hover:bg-brand-blue hover:text-white transition-colors w-full">
                Download PDF
              </button>
            </div>
            
            {/* Widget 3: CTA */}
            <div className="bg-brand-blue text-white p-6 rounded-lg text-center shadow-lg">
              <h4 className="font-bold text-lg mb-2">Pendaftaran Dibuka</h4>
              <p className="text-sm opacity-90 mb-4">Bergabunglah dengan STT Walter Post Jayapura.</p>
              <Link to="/layanan/pmb" className="inline-block bg-brand-gold text-white font-bold py-2 px-4 rounded w-full hover:bg-amber-600 transition-colors">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Content Components ---

// 1. PROFIL SECTION

const SejarahPage: React.FC = () => (
  <PageLayout title="Sejarah" parent="Profil">
    <HistorySection />
  </PageLayout>
);

const VisiMisiPage: React.FC = () => (
  <PageLayout title="Visi, Misi & Nilai" parent="Profil">
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6 flex items-center">
          <span className="w-10 h-1 bg-brand-gold mr-4"></span>Visi
        </h3>
        <blockquote className="text-xl text-gray-700 italic leading-relaxed pl-8 border-l-4 border-brand-gold bg-gray-50 py-6 pr-4 rounded-r-lg">
          "Menjadi Perguruan Tinggi Teologi yang Unggul dalam Akademik, Spiritual, dan Pelayanan di Tanah Papua dan Indonesia pada tahun 2030."
        </blockquote>
      </div>
      
      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6 flex items-center">
          <span className="w-10 h-1 bg-brand-gold mr-4"></span>Misi
        </h3>
        <div className="grid gap-4">
          {[
            "Menyelenggarakan pendidikan teologi yang alkitabiah, kontekstual, dan holistik.",
            "Melaksanakan penelitian teologi yang menjawab kebutuhan gereja dan masyarakat di era global.",
            "Melaksanakan pengabdian kepada masyarakat sebagai wujud kesaksian iman dan kasih Kristus.",
            "Membangun karakter hamba Tuhan yang berintegritas, rendah hati, dan berjiwa misioner."
          ].map((item, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mr-4 text-sm">{idx + 1}</div>
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6 flex items-center">
          <span className="w-10 h-1 bg-brand-gold mr-4"></span>Nilai Dasar (Core Values)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-blue hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-blue text-lg mb-2">Christ-Centered</h4>
            <p className="text-gray-600">Menjadikan Kristus sebagai pusat dari seluruh kegiatan akademik dan kehidupan kampus.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-gold hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-gold text-lg mb-2">Integrity</h4>
            <p className="text-gray-600">Menjunjung tinggi kejujuran, transparansi, dan tanggung jawab dalam pelayanan.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-blue hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-blue text-lg mb-2">Excellence</h4>
            <p className="text-gray-600">Berkomitmen memberikan kualitas terbaik dalam pengajaran dan pembelajaran.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-brand-gold hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-gold text-lg mb-2">Servanthood</h4>
            <p className="text-gray-600">Memiliki hati hamba yang sedia melayani gereja dan masyarakat.</p>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

const AkreditasiPage: React.FC = () => (
  <PageLayout title="Akreditasi" parent="Profil">
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-lg text-gray-700 mb-4 md:mb-0">
          STT Walter Post Jayapura berkomitmen terhadap mutu pendidikan yang diakui secara nasional.
        </p>
        <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors shadow-sm">
          <FileText className="mr-2" size={18} />
          Unduh Laporan PDF
        </button>
      </div>
      
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 mt-4">
        <table className="min-w-full bg-white">
          <thead className="bg-brand-blue text-white">
            <tr>
              <th className="py-4 px-6 text-left">Program Studi / Institusi</th>
              <th className="py-4 px-6 text-left">Jenjang</th>
              <th className="py-4 px-6 text-left">No. SK BAN-PT</th>
              <th className="py-4 px-6 text-center">Peringkat</th>
              <th className="py-4 px-6 text-center">Masa Berlaku</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 font-bold text-gray-800">Institusi STT Walter Post</td>
              <td className="py-4 px-6">-</td>
              <td className="py-4 px-6 text-sm text-gray-600">SK.BAN-PT/No.xxx/2022</td>
              <td className="py-4 px-6 text-center"><span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs font-bold">Baik</span></td>
              <td className="py-4 px-6 text-center text-sm">2027</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 font-medium">Teologi (Kependetaan)</td>
              <td className="py-4 px-6">S1 (Sarjana)</td>
              <td className="py-4 px-6 text-sm text-gray-600">SK.BAN-PT/No.xxx/2023</td>
              <td className="py-4 px-6 text-center"><span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs font-bold">Baik Sekali</span></td>
              <td className="py-4 px-6 text-center text-sm">2028</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 font-medium">Pendidikan Agama Kristen</td>
              <td className="py-4 px-6">S1 (Sarjana)</td>
              <td className="py-4 px-6 text-sm text-gray-600">SK.BAN-PT/No.xxx/2023</td>
              <td className="py-4 px-6 text-center"><span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs font-bold">Baik</span></td>
              <td className="py-4 px-6 text-center text-sm">2028</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-6 font-medium">Teologi</td>
              <td className="py-4 px-6">S2 (Magister)</td>
              <td className="py-4 px-6 text-sm text-gray-600">Dalam Proses</td>
              <td className="py-4 px-6 text-center"><span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-xs font-bold">Proses</span></td>
              <td className="py-4 px-6 text-center text-sm">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageLayout>
);

// --- Interactive Structure Component ---
interface OrgNodeData {
  title: string;
  name: string;
  children?: OrgNodeData[];
}

const OrgNode: React.FC<{ data: OrgNodeData; isRoot?: boolean }> = ({ data, isRoot = false }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = data.children && data.children.length > 0;

  return (
    <div className="flex flex-col items-center mx-2">
      <div 
        className={`relative z-10 p-4 rounded-lg shadow-md border border-gray-200 text-center w-60 transition-all duration-300 flex-shrink-0 ${isRoot ? 'bg-brand-blue text-white ring-4 ring-brand-blue/20' : 'bg-white hover:bg-gray-50'}`}
      >
        <h4 className={`font-bold text-sm uppercase mb-1 leading-tight ${isRoot ? 'text-brand-gold' : 'text-brand-blue'}`}>{data.title}</h4>
        <p className={`text-sm ${isRoot ? 'text-white' : 'text-gray-700'}`}>{data.name}</p>
        
        {hasChildren && (
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
            className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm z-20 ${isRoot ? 'bg-brand-gold text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          >
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Connector to children */}
          <div className="w-0.5 h-8 bg-gray-3