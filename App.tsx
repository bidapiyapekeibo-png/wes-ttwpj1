import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// --- Page Layout Component ---
// This serves as the template for most sub-pages
interface PageLayoutProps {
  title: string;
  parent?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, parent, children }) => (
  <div className="min-h-screen bg-gray-50">
    <PageHeader title={title} parent={parent} />
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content Area */}
        <div className="lg:w-3/4">
           <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
             {children}
           </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="font-bold text-lg mb-4 text-brand-blue border-b pb-2">Tautan Terkait</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="block text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all">Pendaftaran Online</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all">Download Brosur</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all">Kalender Akademik</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-brand-gold hover:translate-x-1 transition-all">Hubungi Kami</a></li>
            </ul>
            
            <div className="mt-8 bg-brand-blue text-white p-6 rounded-lg text-center">
              <h4 className="font-bold text-lg mb-2">Pendaftaran Dibuka</h4>
              <p className="text-sm opacity-90 mb-4">Bergabunglah dengan STT Walter Post Jayapura Tahun Akademik 2024/2025</p>
              <button className="bg-brand-gold text-white font-bold py-2 px-4 rounded w-full hover:bg-amber-600 transition-colors">Daftar Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Generic Content Components ---
// These are placeholders that would be replaced by actual data in a production CMS

const GenericPage: React.FC<{title: string, content?: string}> = ({ title, content }) => (
  <PageLayout title={title} parent="Halaman">
    <h2 className="text-2xl font-serif font-bold text-brand-blue mb-6">{title}</h2>
    <div className="prose prose-lg text-gray-600">
      {content ? (
        <p>{content}</p>
      ) : (
        <>
          <p>Halaman ini sedang dalam pengembangan. Konten untuk <strong>{title}</strong> akan segera tersedia.</p>
          <p>STT Walter Post Jayapura berkomitmen untuk memberikan layanan informasi terbaik bagi civitas akademika dan masyarakat umum.</p>
        </>
      )}
    </div>
  </PageLayout>
);

const UnderConstruction: React.FC<{title: string}> = ({ title }) => (
  <PageLayout title={title} parent="Layanan">
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-4xl">🚧</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Sedang Dalam Pemeliharaan</h2>
      <p className="text-gray-600 mb-8">Layanan {title} sedang dipersiapkan untuk pengalaman yang lebih baik.</p>
      <button className="bg-brand-blue text-white px-6 py-2 rounded font-bold">Kembali ke Beranda</button>
    </div>
  </PageLayout>
);

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
        <button className="bg-brand-gold hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all">
          Daftar Mahasiswa Baru
        </button>
      </div>
    </section>
  </>
);

const SejarahPage: React.FC = () => (
  <PageLayout title="Sejarah" parent="Profil">
    <HistorySection />
  </PageLayout>
);

const VisiMisiPage: React.FC = () => (
  <PageLayout title="Visi & Misi" parent="Profil">
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 flex items-center">
          <span className="w-8 h-1 bg-brand-gold mr-3"></span>Visi
        </h3>
        <p className="text-xl text-gray-700 italic leading-relaxed pl-11 border-l-4 border-gray-100">
          "Menjadi Perguruan Tinggi Teologi yang Unggul dalam Akademik, Spiritual, dan Pelayanan di Tanah Papua dan Indonesia pada tahun 2030."
        </p>
      </div>
      
      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 flex items-center">
          <span className="w-8 h-1 bg-brand-gold mr-3"></span>Misi
        </h3>
        <ul className="list-disc pl-11 space-y-3 text-gray-700 text-lg">
          <li>Menyelenggarakan pendidikan teologi yang alkitabiah dan kontekstual.</li>
          <li>Melaksanakan penelitian teologi yang menjawab kebutuhan gereja dan masyarakat.</li>
          <li>Melaksanakan pengabdian kepada masyarakat sebagai wujud kesaksian iman.</li>
          <li>Membangun karakter hamba Tuhan yang berintegritas dan misioner.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 flex items-center">
          <span className="w-8 h-1 bg-brand-gold mr-3"></span>Nilai-Nilai
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-0 md:pl-11">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h4 className="font-bold text-brand-blue mb-2">Kasih</h4>
            <p className="text-sm text-gray-600">Melayani dengan kasih Kristus tanpa membedakan latar belakang.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h4 className="font-bold text-brand-blue mb-2">Integritas</h4>
            <p className="text-sm text-gray-600">Menjunjung tinggi kejujuran dan kebenaran dalam setiap aspek kehidupan.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h4 className="font-bold text-brand-blue mb-2">Unggul</h4>
            <p className="text-sm text-gray-600">Berkomitmen memberikan yang terbaik bagi kemuliaan Tuhan.</p>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

const ContactPage: React.FC = () => (
  <div className="bg-gray-50 min-h-screen">
    <PageHeader title="Hubungi Kami" />
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-md">
           <h2 className="text-2xl font-bold text-brand-blue mb-6">Kirim Pesan</h2>
           <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-brand-blue" placeholder="Masukkan nama anda" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-brand-blue" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Pesan</label>
              <textarea className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-brand-blue h-32" placeholder="Tulis pesan anda di sini..."></textarea>
            </div>
            <button className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors">
              Kirim Pesan
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
           <div className="bg-brand-blue text-white p-8 rounded-xl shadow-md">
             <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
             <p className="mb-6 opacity-90">Kami siap melayani pertanyaan Anda seputar pendaftaran, akademik, dan kerjasama.</p>
             <ul className="space-y-4">
               <li className="flex items-start"><span className="font-bold w-24">Alamat:</span> <span>Jl. Pos 7 Sentani, Jayapura, Papua.</span></li>
               <li className="flex items-start"><span className="font-bold w-24">Telepon:</span> <span>(0967) 591xxx</span></li>
               <li className="flex items-start"><span className="font-bold w-24">Email:</span> <span>info@sttwpj.ac.id</span></li>
             </ul>
           </div>
           
           <div className="bg-white p-4 rounded-xl shadow-md h-64 flex items-center justify-center bg-gray-200">
             <p className="text-gray-500 font-bold">Google Maps Embed Placeholder</p>
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
            <Route path="/profil/akreditasi" element={<GenericPage title="Akreditasi" content="STT Walter Post Jayapura terus meningkatkan standar mutu pendidikan. Saat ini Prodi Teologi dan Prodi PAK sedang dalam proses re-akreditasi BAN-PT untuk memastikan kualitas lulusan yang unggul." />} />
            <Route path="/profil/struktur" element={<GenericPage title="Struktur Organisasi" />} />
            <Route path="/profil/galeri" element={<GenericPage title="Galeri Multimedia" />} />

            {/* Program Studi Routes */}
            <Route path="/prodi/s1-teologi" element={<GenericPage title="S1 Teologi (S.Th)" content="Program Studi Sarjana Teologi mempersiapkan mahasiswa untuk menjadi hamba Tuhan, gembala, dan pemimpin gereja yang memiliki dasar teologi biblika yang kuat." />} />
            <Route path="/prodi/s1-pak" element={<GenericPage title="S1 Pendidikan Agama Kristen" content="Program Studi Pendidikan Agama Kristen mempersiapkan tenaga pendidik yang profesional dan memiliki hati untuk melayani generasi muda melalui pendidikan." />} />
            <Route path="/prodi/s2-teologi" element={<GenericPage title="S2 Magister Teologi" content="Program Pascasarjana Magister Teologi didesain untuk pendalaman keilmuan teologi bagi para praktisi pelayanan yang ingin meningkatkan kompetensi akademis dan praktis." />} />
            <Route path="/prodi/s2-pak" element={<GenericPage title="S2 Magister PAK" />} />
            <Route path="/prodi/fasilitas" element={<GenericPage title="Fasilitas Akademik" content="Kampus STT Walter Post Jayapura dilengkapi dengan Perpustakaan, Asrama Mahasiswa, Ruang Kelas Multimedia, Kapel, dan Laboratorium Komputer." />} />

            {/* Dosen Routes */}
            <Route path="/dosen/pendidik" element={<GenericPage title="Dosen (Pendidik)" />} />
            <Route path="/dosen/staf" element={<GenericPage title="Staf (Kependidikan)" />} />

            {/* Alumni & Mahasiswa Routes */}
            <Route path="/mahasiswa/ormawa" element={<GenericPage title="Organisasi Mahasiswa" />} />
            <Route path="/mahasiswa/kegiatan" element={<GenericPage title="Kegiatan Mahasiswa" />} />
            <Route path="/mahasiswa/alumni" element={<GenericPage title="Profil Alumni" />} />
            <Route path="/mahasiswa/tracer" element={<GenericPage title="Tracer Study" />} />

            {/* Layanan Routes */}
            <Route path="/layanan/pmb" element={<GenericPage title="Pendaftaran Mahasiswa Baru" content="Pendaftaran Mahasiswa Baru Tahun Ajaran 2024/2025 telah dibuka. Silakan hubungi bagian administrasi atau isi formulir online." />} />
            <Route path="/layanan/siakad" element={<UnderConstruction title="Sistem Informasi Akademik (SiAkad)" />} />
            <Route path="/layanan/elearning" element={<UnderConstruction title="E-Learning" />} />
            <Route path="/layanan/elibrary" element={<UnderConstruction title="E-Library" />} />
            <Route path="/layanan/ejournal" element={<UnderConstruction title="E-Journal" />} />

            {/* Berita Routes */}
            <Route path="/berita/terkini" element={<GenericPage title="Berita Terkini" />} />
            <Route path="/berita/artikel" element={<GenericPage title="Artikel" />} />
            <Route path="/berita/informasi" element={<GenericPage title="Informasi Akademik" />} />

            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;