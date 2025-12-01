import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, CheckCircle, Users, Image as ImageIcon, Calendar, Award, Download, ArrowRight, User, MapPin, Phone, Mail, ChevronDown, ChevronRight, X, ZoomIn, Search, Library, ExternalLink, Filter, FileText } from 'lucide-react';
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
          <div className="w-0.5 h-8 bg-gray-300"></div>
          
          <div className="flex relative items-start space-x-4">
            {/* Horizontal line */}
            {data.children!.length > 1 && (
               <div className="absolute top-0 left-4 right-4 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
            )}
            
            {data.children!.map((child, index) => (
              <div key={index} className="flex flex-col items-center relative">
                 {/* Vertical connector for each child */}
                 <div className="w-0.5 h-8 bg-gray-300 -mt-8 mb-4 absolute top-0"></div>
                 <div className="mt-4">
                   <OrgNode data={child} />
                 </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const StrukturPage: React.FC = () => {
  const orgData: OrgNodeData = {
    title: "KETUA",
    name: "Dr. (Cand) Nama Ketua, M.Th",
    children: [
      {
        title: "WAKET I (AKADEMIK)",
        name: "Pdt. Nama Waket, M.Pd.K",
        children: [
          { title: "Kaprodi S1 Teologi", name: "Pdt. Dosen, M.Th" },
          { title: "Kaprodi S1 PAK", name: "Pdt. Dosen, M.Pd.K" },
          { title: "Kaprodi S2 Teologi", name: "Dr. Dosen, M.Th" },
          { title: "Kepala Perpustakaan", name: "Staf, S.Ip" },
        ]
      },
      {
        title: "WAKET II (KEU & SDM)",
        name: "Pdt. Nama Waket, M.Th",
        children: [
          { title: "Kepala BAUK", name: "Staf, S.E" },
          { title: "Bendahara", name: "Staf, S.Ak" },
        ]
      },
      {
        title: "WAKET III (KEMAHASISWAAN)",
        name: "Pdt. Nama Waket, M.Th",
        children: [
          { title: "Koord. Kerohanian", name: "Pdt. Kapel, S.Th" },
          { title: "Koord. Asrama", name: "Ibu Asrama" },
        ]
      }
    ]
  };

  return (
    <PageLayout title="Struktur Organisasi" parent="Profil">
      <div className="text-center mb-10">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Struktur organisasi STT Walter Post Jayapura dirancang untuk mendukung tata kelola perguruan tinggi yang efektif, transparan, dan akuntabel.
          Klik pada tanda panah untuk melihat detail bawahan.
        </p>
      </div>
      <div className="overflow-x-auto pb-12 cursor-grab active:cursor-grabbing border border-gray-100 rounded-lg bg-gray-50/50">
        <div className="min-w-max p-10 flex justify-center">
          <OrgNode data={orgData} isRoot />
        </div>
      </div>
    </PageLayout>
  );
};

// --- Galeri Page with Lightbox ---
const GaleriPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate varied images for masonry effect (mock data)
  const images = [
    { src: 'https://picsum.photos/600/400?random=1', aspect: 'aspect-video' },
    { src: 'https://picsum.photos/400/600?random=2', aspect: 'aspect-[2/3]' },
    { src: 'https://picsum.photos/500/500?random=3', aspect: 'aspect-square' },
    { src: 'https://picsum.photos/600/800?random=4', aspect: 'aspect-[3/4]' },
    { src: 'https://picsum.photos/800/600?random=5', aspect: 'aspect-video' },
    { src: 'https://picsum.photos/500/700?random=6', aspect: 'aspect-[5/7]' },
    { src: 'https://picsum.photos/600/600?random=7', aspect: 'aspect-square' },
    { src: 'https://picsum.photos/700/500?random=8', aspect: 'aspect-[7/5]' },
    { src: 'https://picsum.photos/400/500?random=9', aspect: 'aspect-[4/5]' },
    { src: 'https://picsum.photos/800/400?random=10', aspect: 'aspect-[2/1]' },
    { src: 'https://picsum.photos/400/400?random=11', aspect: 'aspect-square' },
    { src: 'https://picsum.photos/300/600?random=12', aspect: 'aspect-[1/2]' },
    { src: 'https://picsum.photos/600/300?random=13', aspect: 'aspect-[2/1]' },
    { src: 'https://picsum.photos/500/600?random=14', aspect: 'aspect-[5/6]' },
    { src: 'https://picsum.photos/450/450?random=15', aspect: 'aspect-square' },
  ];

  return (
    <PageLayout title="Galeri Multimedia" parent="Profil">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid relative group rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            onClick={() => setSelectedImage(img.src)}
          >
            <img 
              src={img.src} 
              alt={`Gallery ${idx}`} 
              className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-brand-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
             <img 
              src={selectedImage} 
              alt="Full view" 
              className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl" 
             />
          </div>
        </div>
      )}
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue font-bold rounded-full hover:bg-brand-blue hover:text-white transition-all">
          Lihat Lebih Banyak Dokumentasi
        </button>
      </div>
    </PageLayout>
  );
};

// 2. PRODI SECTION

interface ProdiDetailProps {
  name: string;
  degree: string;
  desc: string;
  vision: string;
  careers: string[];
}

const ProdiDetail: React.FC<ProdiDetailProps> = ({ name, degree, desc, vision, careers }) => (
  <PageLayout title={name} parent="Program Studi">
    <div className="space-y-10">
      <div className="bg-brand-light p-6 rounded-xl border-l-4 border-brand-blue">
        <h3 className="text-xl font-bold text-brand-blue mb-2">Tentang Program Studi</h3>
        <p className="text-gray-700 leading-relaxed">{desc}</p>
        <div className="mt-4 inline-flex items-center text-sm font-bold text-gray-500">
          <Award size={16} className="mr-2 text-brand-gold" />
          Gelar Lulusan: <span className="text-gray-900 ml-1">{degree}</span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Visi Keilmuan</h3>
        <p className="text-gray-600 text-lg">{vision}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="mr-2 text-brand-gold" /> Profil Lulusan
          </h3>
          <ul className="space-y-3">
            {careers.map((career, idx) => (
              <li key={idx} className="flex items-start bg-white p-3 rounded shadow-sm border border-gray-100">
                <CheckCircle size={18} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{career}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <BookOpen className="mr-2 text-brand-gold" /> Mata Kuliah Unggulan
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Hermeneutik Biblika</li>
              <li>Teologi Kontekstual Papua</li>
              <li>Misiologi & Evangelisasi</li>
              <li>Kepemimpinan Kristen</li>
              <li>Metode Penelitian Teologi</li>
            </ul>
            <button className="mt-4 text-sm text-brand-blue font-bold hover:underline">
              Lihat Kurikulum Lengkap &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

const FasilitasPage: React.FC = () => (
  <PageLayout title="Fasilitas Akademik" parent="Program Studi">
    <div className="grid grid-cols-1 gap-8">
      {[
        { title: "Perpustakaan", desc: "Koleksi ribuan buku teologi, jurnal, dan ruang baca yang nyaman.", img: "https://picsum.photos/id/190/800/400" },
        { title: "Kapel Kampus", desc: "Pusat kegiatan spiritual, ibadah harian, dan praktik khotbah mahasiswa.", img: "https://picsum.photos/id/201/800/400" },
        { title: "Asrama Mahasiswa", desc: "Tempat tinggal yang kondusif untuk pembentukan karakter dan komunitas.", img: "https://picsum.photos/id/515/800/400" },
        { title: "Ruang Kelas Multimedia", desc: "Kelas dilengkapi proyektor dan pendingin ruangan untuk kenyamanan belajar.", img: "https://picsum.photos/id/4/800/400" },
      ].map((fac, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow border border-gray-100">
          <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
            <img src={fac.img} alt={fac.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-8 flex flex-col justify-center md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{fac.title}</h3>
            <p className="text-gray-600 mb-6">{fac.desc}</p>
            <span className="text-brand-blue font-bold text-sm cursor-pointer hover:text-brand-gold">Lihat Detail &rarr;</span>
          </div>
        </div>
      ))}
    </div>
  </PageLayout>
);

// 3. DOSEN SECTION

const DosenPage: React.FC<{ type: 'pendidik' | 'staf' }> = ({ type }) => {
  const title = type === 'pendidik' ? "Dosen (Tenaga Pendidik)" : "Staf (Tenaga Kependidikan)";
  const role = type === 'pendidik' ? "Dosen Tetap" : "Staf Administrasi";
  
  return (
    <PageLayout title={title} parent="SDM">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
            <div className="h-64 overflow-hidden bg-gray-200 relative">
              <img 
                src={`https://i.pravatar.cc/400?img=${i + 10}`} 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                 <p className="text-white font-bold text-lg">Nama Lengkap, M.Th</p>
              </div>
            </div>
            <div className="p-5 text-center">
              <span className="inline-block bg-brand-light text-brand-blue text-xs font-bold px-3 py-1 rounded-full mb-3">{role}</span>
              <p className="text-sm text-gray-600 mb-4">Spesialisasi: {type === 'pendidik' ? 'Teologi Sistematika' : 'Administrasi Akademik'}</p>
              <div className="flex justify-center space-x-3">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-brand-gold hover:text-white transition-colors"><Mail size={16}/></button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-brand-blue hover:text-white transition-colors"><User size={16}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

// 4. MAHASISWA SECTION

const GenericList: React.FC<{title: string, items: any[]}> = ({title, items}) => (
  <PageLayout title={title} parent="Mahasiswa">
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
           <div className="w-full md:w-1/4 h-40 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
             <img src={`https://picsum.photos/400/300?random=${idx}`} className="w-full h-full object-cover" alt="Thumb"/>
           </div>
           <div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
             <p className="text-gray-600 mb-4">{item.desc}</p>
             <button className="text-brand-blue font-bold text-sm hover:underline">Baca Selengkapnya</button>
           </div>
        </div>
      ))}
    </div>
  </PageLayout>
);

// 5. LAYANAN SECTION

const PMBPage: React.FC = () => (
  <PageLayout title="Pendaftaran Mahasiswa Baru (PMB)" parent="Layanan">
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-serif font-bold text-brand-blue mb-4">Mari Bergabung Bersama Kami</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">STT Walter Post Jayapura membuka pendaftaran mahasiswa baru untuk Tahun Akademik 2024/2025.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
      {[
        { step: "1", title: "Isi Formulir", desc: "Lengkapi data diri secara online atau offline." },
        { step: "2", title: "Pembayaran", desc: "Bayar biaya pendaftaran via transfer bank." },
        { step: "3", title: "Ujian Masuk", desc: "Ikuti tes tertulis dan wawancara." },
        { step: "4", title: "Daftar Ulang", desc: "Konfirmasi penerimaan dan registrasi ulang." }
      ].map((s, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-50 opacity-50 z-0">{s.step}</div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">{s.step}</div>
            <h4 className="font-bold text-lg mb-2">{s.title}</h4>
            <p className="text-sm text-gray-500">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-blue-50 border border-blue-100 p-8 rounded-xl text-center">
      <h3 className="text-xl font-bold text-brand-blue mb-4">Siap untuk mendaftar?</h3>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-amber-600 transition-colors shadow-md">
          Daftar Online Sekarang
        </button>
        <button className="bg-white text-brand-blue border border-brand-blue font-bold py-3 px-8 rounded hover:bg-blue-50 transition-colors">
          Download Formulir PDF
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-500">Butuh bantuan? Hubungi Panitia PMB di <span className="font-bold text-brand-blue">0812-xxxx-xxxx</span></p>
    </div>
  </PageLayout>
);

const ServiceLogin: React.FC<{title: string}> = ({ title }) => (
  <PageLayout title={title} parent="Layanan">
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mt-8 text-center">
      <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
        <Users size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Login {title}</h3>
      <p className="text-gray-500 mb-8 text-sm">Silahkan masuk menggunakan akun akademik anda.</p>
      
      <form className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Username / NIM</label>
          <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="Masukkan NIM..." />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
          <input type="password" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder="••••••••" />
        </div>
        <button className="w-full bg-brand-blue text-white font-bold py-3 rounded hover:bg-blue-900 transition-colors">
          Masuk Portal
        </button>
      </form>
      <p className="mt-6 text-xs text-gray-400">Lupa password? Hubungi bagian BAAK.</p>
    </div>
  </PageLayout>
);

const ELibraryPage: React.FC = () => (
  <PageLayout title="E-Library" parent="Layanan">
    <div className="text-center mb-12">
      <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
        <Library className="text-brand-blue w-12 h-12" />
      </div>
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Perpustakaan Digital</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Akses ribuan koleksi literatur teologi, jurnal ilmiah, dan e-book pendidikan Kristen kapan saja dan di mana saja.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Koleksi Digital</h3>
        <ul className="space-y-3 mb-6 text-gray-600">
          <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2"/> 5,000+ E-Book Teologi</li>
          <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2"/> Jurnal Internasional & Nasional</li>
          <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2"/> Tesis & Disertasi</li>
          <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2"/> Majalah Rohani</li>
        </ul>
        <button className="w-full bg-brand-blue text-white font-bold py-3 rounded hover:bg-blue-900 transition-colors flex items-center justify-center">
          Masuk Pustaka Digital <ExternalLink size={16} className="ml-2"/>
        </button>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 flex flex-col justify-center text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Belum punya akun?</h3>
        <p className="text-gray-600 mb-6 text-sm">
          Akses E-Library khusus untuk civitas akademika STT Walter Post Jayapura. Silahkan hubungi petugas perpustakaan untuk aktivasi akun.
        </p>
        <div className="space-y-2 text-sm">
          <p><span className="font-bold">Email:</span> library@sttwpj.ac.id</p>
          <p><span className="font-bold">WhatsApp:</span> 0812-3456-7890</p>
        </div>
      </div>
    </div>
  </PageLayout>
);

// 6. BERITA SECTION

const NewsPage: React.FC<{ initialCategory: string }> = ({ initialCategory }) => {
  const [activeFilter, setActiveFilter] = useState(initialCategory === 'Berita Terkini' ? 'Semua' : initialCategory);
  
  const filters = ['Semua', 'Akademik', 'Pengumuman', 'Kegiatan Kampus'];
  
  // Mock News Data with Types
  const allNews = [
    { id: 1, title: "Pendaftaran Wisuda Tahun 2024 Dibuka", type: "Akademik", date: "12 Agustus 2024", img: 21 },
    { id: 2, title: "Seminar Teologi Kontekstual Papua", type: "Kegiatan Kampus", date: "10 Agustus 2024", img: 22 },
    { id: 3, title: "Libur Perkuliahan Semester Genap", type: "Pengumuman", date: "05 Agustus 2024", img: 23 },
    { id: 4, title: "Kunjungan Studi Banding dari STT Jakarta", type: "Kegiatan Kampus", date: "01 Agustus 2024", img: 24 },
    { id: 5, title: "Jadwal Ujian Akhir Semester", type: "Akademik", date: "28 Juli 2024", img: 25 },
    { id: 6, title: "Peluncuran Jurnal Teologi Edisi Terbaru", type: "Akademik", date: "20 Juli 2024", img: 26 },
  ];

  const filteredNews = activeFilter === 'Semua' 
    ? allNews 
    : allNews.filter(item => item.type === activeFilter || (activeFilter === 'Artikel Dosen' && item.type === 'Akademik')); // Simple mapping fallback

  return (
    <PageLayout title={initialCategory} parent="Berita">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 items-center">
        <div className="flex items-center text-gray-500 mr-2">
          <Filter size={18} className="mr-1" />
          <span className="text-sm font-bold">Filter:</span>
        </div>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter 
                ? 'bg-brand-blue text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <img src={`https://picsum.photos/600/400?random=${item.img}`} alt="News" className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar size={12} className="mr-1"/> {item.date}</span>
                  <span className="text-brand-gold font-bold uppercase">{item.type}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-brand-blue cursor-pointer line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="#" className="text-brand-blue text-sm font-bold flex items-center hover:underline mt-auto">
                  Baca Selengkapnya <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Tidak ada berita dalam kategori ini.</p>
        </div>
      )}
      
      {/* Pagination */}
      {filteredNews.length > 0 && (
        <div className="flex justify-center mt-10 space-x-2">
          <button className="w-10 h-10 rounded border hover:bg-brand-blue hover:text-white transition-colors">1</button>
          <button className="w-10 h-10 rounded border bg-brand-blue text-white">2</button>
          <button className="w-10 h-10 rounded border hover:bg-brand-blue hover:text-white transition-colors">3</button>
        </div>
      )}
    </PageLayout>
  );
};

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Mock results
  const results = [
    { title: "Pendaftaran Mahasiswa Baru 2024", url: "/layanan/pmb", desc: "Informasi lengkap mengenai jalur pendaftaran, biaya, dan persyaratan masuk STT Walter Post." },
    { title: "Program Studi S1 Teologi", url: "/prodi/s1-teologi", desc: "Kurikulum dan profil lulusan sarjana teologi yang relevan dengan konteks Papua." },
    { title: "Visi dan Misi", url: "/profil/visi", desc: "Menjadi perguruan tinggi teologi yang unggul dalam akademik dan spiritual." },
    { title: "Dosen dan Pengajar", url: "/dosen/pendidik", desc: "Daftar tenaga pendidik profesional dan berpengalaman di bidangnya." },
  ].filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <PageLayout title="Hasil Pencarian" parent="Search">
      <div className="mb-6">
        <p className="text-gray-600">Menampilkan hasil untuk kata kunci: <span className="font-bold text-gray-900">"{query}"</span></p>
      </div>
      
      {results.length > 0 ? (
        <div className="space-y-6">
          {results.map((res, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
              <Link to={res.url} className="text-xl font-bold text-brand-blue hover:underline mb-2 block">{res.title}</Link>
              <p className="text-gray-600 text-sm mb-2">{res.desc}</p>
              <Link to={res.url} className="text-xs text-green-600 hover:underline">{res.url}</Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
            <Search size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Tidak ditemukan hasil</h3>
          <p className="text-gray-500">Coba gunakan kata kunci lain yang lebih umum.</p>
        </div>
      )}
    </PageLayout>
  );
};

// --- Specific Page Components ---

const Home: React.FC = () => (
  <>
    <Hero />
    <Features />
    <HistorySection />
    <Programs />
    {/* CTA Section */}
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Siap Melayani Bersama Kami?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Bergabunglah dengan komunitas akademis yang berpusat pada Kristus dan mulailah perjalanan pelayanan Anda hari ini.
        </p>
        <Link to="/layanan/pmb" className="inline-block bg-brand-gold hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all">
          Daftar Mahasiswa Baru
        </Link>
      </div>
    </section>
  </>
);

const ContactPage: React.FC = () => (
  <div className="bg-gray-50 min-h-screen">
    <PageHeader title="Hubungi Kami" />
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
           <h2 className="text-2xl font-bold text-brand-blue mb-6">Kirim Pesan</h2>
           <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="Masukkan nama anda" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Pesan</label>
              <textarea className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors h-32" placeholder="Tulis pesan anda di sini..."></textarea>
            </div>
            <button className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors shadow-lg shadow-brand-blue/30">
              Kirim Pesan
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
           <div className="bg-brand-blue text-white p-8 rounded-xl shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
             <h3 className="text-xl font-bold mb-6 relative z-10">Informasi Kontak</h3>
             <ul className="space-y-6 relative z-10">
               <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <MapPin className="text-brand-gold" size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-sm opacity-70 mb-1">Alamat Kampus</span>
                    <span className="leading-tight block">Jl. Pos 7 Sentani, Jayapura,<br/>Papua, Indonesia.</span>
                  </div>
               </li>
               <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <Phone className="text-brand-gold" size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-sm opacity-70 mb-1">Telepon</span>
                    <span>(0967) 591xxx</span>
                  </div>
               </li>
               <li className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <Mail className="text-brand-gold" size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-sm opacity-70 mb-1">Email</span>
                    <span>info@sttwpj.ac.id</span>
                  </div>
               </li>
             </ul>
           </div>
           
           <div className="bg-white p-4 rounded-xl shadow-md h-64 overflow-hidden border border-gray-100">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.7482811326447!2d140.5170!3d-2.5880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cf5c361406691%3A0x807662c505872242!2sSentani%2C%20Jayapura%20Regency%2C%20Papua!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy">
             </iframe>
           </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
        <Header />
        <main className="flex-grow pt-[80px] lg:pt-[100px]"> 
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Profil Routes */}
            <Route path="/profil/sejarah" element={<SejarahPage />} />
            <Route path="/profil/visi" element={<VisiMisiPage />} />
            <Route path="/profil/misi" element={<VisiMisiPage />} />
            <Route path="/profil/nilai" element={<VisiMisiPage />} />
            <Route path="/profil/akreditasi" element={<AkreditasiPage />} />
            <Route path="/profil/struktur" element={<StrukturPage />} />
            <Route path="/profil/galeri" element={<GaleriPage />} />

            {/* Program Studi Routes */}
            <Route path="/prodi/s1-teologi" element={
              <ProdiDetail 
                name="S1 Teologi (S.Th)" 
                degree="Sarjana Teologi (S.Th)"
                desc="Program Studi Sarjana Teologi STT-WPJ didesain untuk memperlengkapi mahasiswa dengan pengetahuan teologi biblika, sistematika, dan praktika yang mendalam. Mahasiswa akan dibentuk menjadi pemimpin yang memiliki spiritualitas matang dan kepekaan terhadap konteks pelayanan di Papua dan Indonesia."
                vision="Menjadi pusat pendidikan teologi biblika yang unggul dan relevan dalam menghasilkan hamba Tuhan yang berkarakter Kristus, misioner, dan kontekstual."
                careers={["Gembala Jemaat", "Penginjil / Misionaris", "Pemimpin Organisasi Kristen", "Peneliti Teologi Pemula"]}
              />
            } />
            <Route path="/prodi/s1-pak" element={
               <ProdiDetail 
                name="S1 Pendidikan Agama Kristen (S.Pd)" 
                degree="Sarjana Pendidikan (S.Pd)"
                desc="Program Studi Pendidikan Agama Kristen mempersiapkan tenaga pendidik profesional yang mampu mengajar PAK di sekolah, gereja, dan masyarakat. Kurikulum disusun dengan memadukan teologi, pedagogi, dan psikologi pendidikan."
                vision="Menghasilkan pendidik Kristen yang profesional, kreatif, inovatif, dan berkarakter Kristus dalam pelayanan pendidikan di sekolah dan gereja."
                careers={["Guru PAK di Sekolah (SD-SMA)", "Guru Sekolah Minggu", "Konselor Pendidikan", "Pengembang Kurikulum PAK"]}
              />
            } />
            <Route path="/prodi/s2-teologi" element={
               <ProdiDetail 
                name="S2 Magister Teologi (M.Th)" 
                degree="Magister Teologi (M.Th)"
                desc="Program Pascasarjana Magister Teologi ditujukan bagi hamba Tuhan dan praktisi pelayanan yang ingin memperdalam keilmuan teologi secara akademis dan praktis. Program ini menekankan pada analisis teologis mendalam dan kepemimpinan strategis."
                vision="Menjadi program pascasarjana teologi yang terkemuka dalam pengembangan pemikiran teologis yang injili dan aplikatif."
                careers={["Dosen Teologi", "Penulis Buku Rohani", "Pemimpin Sinode/Gereja", "Konsultan Pelayanan"]}
              />
            } />
            <Route path="/prodi/s2-pak" element={
               <ProdiDetail 
                name="S2 Magister PAK (M.Pd)" 
                degree="Magister Pendidikan (M.Pd)"
                desc="Program Magister Pendidikan Agama Kristen (M.Pd) dirancang untuk mengembangkan kompetensi profesional pemimpin pendidikan dan pengajar yang mampu merancang, mengelola, dan mengevaluasi sistem pendidikan Kristen yang transformatif. Mahasiswa akan diperlengkapi dengan kemampuan riset pendidikan, manajemen sekolah Kristen, dan pengembangan kurikulum yang relevan dengan kebutuhan zaman."
                vision="Menjadi pusat pengembangan kepemimpinan pendidikan Kristen yang unggul dalam riset, inovasi pedagogis, dan manajemen pendidikan berbasis nilai-nilai Kristiani untuk menjawab tantangan global."
                careers={[
                  "Dosen Pendidikan Agama Kristen", 
                  "Kepala Sekolah / Yayasan Kristen", 
                  "Konsultan Manajemen Pendidikan", 
                  "Peneliti Pendidikan",
                  "Pengawas Pendidikan Agama Kristen"
                ]}
              />
            } />
            <Route path="/prodi/fasilitas" element={<FasilitasPage />} />

            {/* Dosen Routes */}
            <Route path="/dosen/pendidik" element={<DosenPage type="pendidik" />} />
            <Route path="/dosen/staf" element={<DosenPage type="staf" />} />

            {/* Alumni & Mahasiswa Routes */}
            <Route path="/mahasiswa/ormawa" element={
              <GenericList title="Organisasi Mahasiswa" items={[
                {title: "Badan Eksekutif Mahasiswa (BEM)", desc: "Wadah aspirasi dan kepemimpinan mahasiswa tingkat kampus."},
                {title: "Persekutuan Doa Mahasiswa", desc: "Komunitas doa dan penyembahan yang diadakan setiap minggu."},
                {title: "Tim Misi & Evangelisasi", desc: "Kelompok yang fokus pada pelayanan penjangkauan keluar kampus."}
              ]} />
            } />
            <Route path="/mahasiswa/kegiatan" element={
               <GenericList title="Kegiatan Mahasiswa" items={[
                {title: "Retreat Awal Semester", desc: "Kegiatan penyegaran rohani bagi seluruh civitas akademika."},
                {title: "Praktek Pelayanan Lapangan (PPL)", desc: "Mahasiswa diutus ke gereja-gereja pedalaman untuk melayani selama 2 bulan."},
                {title: "Dies Natalis Kampus", desc: "Perayaan ulang tahun kampus dengan berbagai lomba dan seminar."}
              ]} />
            } />
            <Route path="/mahasiswa/alumni" element={
              <PageLayout title="Profil Alumni" parent="Mahasiswa">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-white p-6 rounded-xl shadow border border-gray-100 italic text-gray-600">
                     "Pendidikan di STT Walter Post membentuk karakter saya untuk bertahan dalam pelayanan di pedalaman Papua. Dosen-dosennya sangat peduli."
                     <p className="mt-4 font-bold text-brand-blue not-italic">- Pdt. Yosia, Alumni 2010</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl shadow border border-gray-100 italic text-gray-600">
                     "Ilmu teologi yang saya dapatkan sangat relevan dengan tantangan zaman sekarang. Saya bangga menjadi bagian dari almamater ini."
                     <p className="mt-4 font-bold text-brand-blue not-italic">- Sarah, Guru PAK, Alumni 2018</p>
                   </div>
                 </div>
              </PageLayout>
            } />
            <Route path="/mahasiswa/tracer" element={
              <PageLayout title="Tracer Study" parent="Mahasiswa">
                <div className="text-center py-10">
                  <p className="mb-6">Mohon partisipasi Alumni untuk mengisi kuesioner Tracer Study guna peningkatan mutu pendidikan kami.</p>
                  <button className="bg-brand-gold text-white font-bold py-3 px-8 rounded hover:bg-amber-600">Isi Kuesioner Alumni</button>
                </div>
              </PageLayout>
            } />

            {/* Layanan Routes */}
            <Route path="/layanan/pmb" element={<PMBPage />} />
            <Route path="/layanan/siakad" element={<ServiceLogin title="SiAkad (Sistem Akademik)" />} />
            <Route path="/layanan/elearning" element={<ServiceLogin title="E-Learning" />} />
            <Route path="/layanan/elibrary" element={<ELibraryPage />} />
            <Route path="/layanan/ejournal" element={
               <PageLayout title="E-Journal" parent="Layanan">
                 <div className="space-y-6">
                   <div className="border p-6 rounded hover:bg-gray-50 cursor-pointer">
                     <h3 className="text-xl font-bold text-brand-blue">Jurnal Teologi Walter Post</h3>
                     <p className="text-sm text-gray-500 mb-2">ISSN: 1234-5678 | Terakreditasi SINTA 4</p>
                     <p>Jurnal ilmiah teologi yang memuat hasil penelitian biblika, sistematika, dan praktika.</p>
                   </div>
                   <div className="border p-6 rounded hover:bg-gray-50 cursor-pointer">
                     <h3 className="text-xl font-bold text-brand-blue">Jurnal Pendidikan Kristen Papua</h3>
                     <p className="text-sm text-gray-500 mb-2">ISSN: 8765-4321</p>
                     <p>Wadah publikasi bagi penelitian di bidang pendidikan agama Kristen dan keguruan.</p>
                   </div>
                 </div>
               </PageLayout>
            } />

            {/* Berita Routes */}
            <Route path="/berita/terkini" element={<NewsPage initialCategory="Berita Terkini" />} />
            <Route path="/berita/artikel" element={<NewsPage initialCategory="Artikel Dosen" />} />
            <Route path="/berita/informasi" element={<NewsPage initialCategory="Informasi Akademik" />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;