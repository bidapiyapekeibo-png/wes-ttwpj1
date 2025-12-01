import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, CheckCircle, Users, Image as ImageIcon, Calendar, Award, Download, ArrowRight, User, MapPin, Phone, Mail, ChevronDown, ChevronRight, X, ZoomIn, Search, Library, ExternalLink, Filter, FileText, CreditCard, PenTool, Dumbbell, Church, Clock, Video, GraduationCap, Printer, Bookmark, ArrowUp, ArrowDown, Bell, Send, Globe, LogIn, Lock, School, HeartHandshake } from 'lucide-react';
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
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <PageHeader title={title} parent={parent} parentPath={parentPath} />
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content Area */}
        <div className="lg:w-3/4">
           <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 min-h-[500px] transition-colors duration-300 text-gray-800 dark:text-gray-200">
             {children}
           </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24 space-y-8 transition-colors duration-300">
            {/* Widget 1: Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-blue dark:text-brand-gold border-b dark:border-gray-700 pb-2">Tautan Cepat</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/layanan/pmb" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Pendaftaran Online</Link></li>
                <li><Link to="/layanan/elibrary" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> E-Library</Link></li>
                <li><Link to="/prodi/fasilitas" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Fasilitas Kampus</Link></li>
                <li><Link to="/berita/agenda" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Kalender Akademik</Link></li>
                <li><Link to="/contact" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-gold hover:translate-x-1 transition-all"><ArrowRight size={14} className="mr-2"/> Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Widget 2: Brochure */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600 text-center">
              <Download className="mx-auto text-brand-gold mb-2" size={32} />
              <h4 className="font-bold text-sm text-gray-800 dark:text-white mb-1">Brosur Akademik</h4>
              <p className="text-xs text-gray-500 dark:text-gray-300 mb-3">Unduh panduan lengkap akademik tahun 2024.</p>
              <button 
                onClick={() => alert("Mengunduh brosur...")}
                className="text-xs font-bold text-brand-blue dark:text-white border border-brand-blue dark:border-white px-4 py-2 rounded hover:bg-brand-blue hover:text-white dark:hover:bg-white dark:hover:text-brand-blue transition-colors w-full"
              >
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

// --- Popup Information Component ---
const InfoPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-800 w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-500 transition-colors z-10"
        >
          <X size={20} />
        </button>
        
        <div className="bg-brand-blue p-6 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <Bell size={48} className="mx-auto mb-3 text-brand-gold relative z-10" />
           <h3 className="text-2xl font-bold relative z-10">Informasi Penting</h3>
        </div>
        
        <div className="p-6">
           <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-brand-blue p-4 rounded-r-lg">
                 <h4 className="font-bold text-gray-900 dark:text-white mb-1">Pendaftaran Mahasiswa Baru Gelombang II</h4>
                 <p className="text-sm text-gray-600 dark:text-gray-300">Telah dibuka pendaftaran gelombang kedua mulai tanggal 1 Agustus - 30 Agustus 2024.</p>
                 <Link to="/layanan/pmb" onClick={onClose} className="text-xs font-bold text-brand-blue dark:text-brand-gold mt-2 inline-block hover:underline">Daftar Sekarang &rarr;</Link>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-brand-gold p-4 rounded-r-lg">
                 <h4 className="font-bold text-gray-900 dark:text-white mb-1">Yudisium Angkatan XX</h4>
                 <p className="text-sm text-gray-600 dark:text-gray-300">Bagi mahasiswa tingkat akhir, batas pengumpulan berkas yudisium diperpanjang hingga 25 Agustus 2024.</p>
              </div>
           </div>
           
           <div className="mt-8 text-center">
              <Link 
                to="/berita/informasi" 
                onClick={onClose}
                className="inline-block w-full py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold rounded-lg transition-colors"
              >
                Lihat Semua Informasi
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};


// --- Content Components ---

// NEW: Informasi Page (Template for the Popup content)
const InformasiPage: React.FC = () => (
  <PageLayout title="Informasi & Pengumuman" parent="Berita">
     <div className="space-y-6">
        {[
          { title: "Pendaftaran Mahasiswa Baru Gelombang II", date: "01 Agustus 2024", type: "Akademik", content: "Telah dibuka pendaftaran mahasiswa baru untuk Tahun Akademik 2024/2025 Gelombang II. Pendaftaran dapat dilakukan secara online melalui menu PMB atau datang langsung ke kampus." },
          { title: "Jadwal Yudisium Semester Genap", date: "28 Juli 2024", type: "Akademik", content: "Diberitahukan kepada seluruh mahasiswa tingkat akhir bahwa pelaksanaan Yudisium akan dilaksanakan pada tanggal 10 September 2024." },
          { title: "Libur Hari Kemerdekaan RI", date: "15 Agustus 2024", type: "Umum", content: "Sehubungan dengan HUT RI ke-79, maka kegiatan perkuliahan dan pelayanan administrasi diliburkan pada tanggal 17 Agustus 2024." },
          { title: "Pemeliharaan Sistem SiAkad", date: "10 Agustus 2024", type: "Teknis", content: "Akan dilakukan maintenance server SiAkad pada hari Sabtu, 12 Agustus 2024 pukul 22:00 WIT s/d selesai." }
        ].map((info, idx) => (
          <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-brand-blue transition-colors bg-white dark:bg-gray-800">
             <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded ${info.type === 'Akademik' ? 'bg-blue-100 text-blue-800' : info.type === 'Teknis' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>{info.type}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center"><Clock size={12} className="mr-1"/> {info.date}</span>
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{info.title}</h3>
             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{info.content}</p>
          </div>
        ))}
     </div>
  </PageLayout>
);

// NEW: Program Studi Overview
const ProdiIndexPage: React.FC = () => {
  const programs = [
    { title: "S1 Teologi (S.Th)", link: "/prodi/s1-teologi", icon: <BookOpen size={40}/>, color: "text-brand-blue", bg: "bg-blue-50 dark:bg-blue-900/20", desc: "Membentuk teolog kontekstual dan biblikal." },
    { title: "S1 Pendidikan Agama Kristen", link: "/prodi/s1-pak", icon: <HeartHandshake size={40}/>, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20", desc: "Menghasilkan pendidik Kristen profesional." },
    { title: "S2 Magister Teologi", link: "/prodi/s2-teologi", icon: <GraduationCap size={40}/>, color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20", desc: "Pendalaman teologi untuk pemimpin gereja." },
    { title: "S2 Magister PAK", link: "/prodi/s2-pak", icon: <School size={40}/>, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20", desc: "Pengembangan kepemimpinan pendidikan Kristen." }
  ];

  return (
    <PageLayout title="Program Studi" parent="Akademik">
       <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            STT Walter Post Jayapura menyelenggarakan pendidikan tinggi teologi berkualitas dengan berbagai jenjang program studi yang terakreditasi.
          </p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
             <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg transition-all group bg-white dark:bg-gray-800">
                <div className={`w-20 h-20 ${p.bg} ${p.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                   {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{p.desc}</p>
                <Link to={p.link} className="inline-flex items-center text-brand-blue dark:text-brand-gold font-bold hover:underline">
                   Lihat Kurikulum & Profil <ArrowRight size={16} className="ml-2" />
                </Link>
             </div>
          ))}
       </div>
    </PageLayout>
  );
};

// NEW: Contact Page Template
const ContactPage: React.FC = () => (
  <PageLayout title="Hubungi Kami" parent="Kontak">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-xl font-bold text-brand-blue dark:text-brand-gold mb-4">Informasi Kontak</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-brand-light dark:bg-gray-700 p-3 rounded-lg text-brand-blue dark:text-brand-gold"><MapPin size={24}/></div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Alamat Kampus</h4>
              <p className="text-gray-600 dark:text-gray-300">Jl. Pos 7 Sentani, Jayapura, Papua, Indonesia. Kode Pos 99352.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-brand-light dark:bg-gray-700 p-3 rounded-lg text-brand-blue dark:text-brand-gold"><Phone size={24}/></div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Telepon</h4>
              <p className="text-gray-600 dark:text-gray-300">(0967) 123456</p>
              <p className="text-gray-600 dark:text-gray-300">0812-3456-7890 (WhatsApp)</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-brand-light dark:bg-gray-700 p-3 rounded-lg text-brand-blue dark:text-brand-gold"><Mail size={24}/></div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">info@sttwpj.ac.id</p>
              <p className="text-gray-600 dark:text-gray-300">pmb@sttwpj.ac.id</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
           <h3 className="text-xl font-bold text-brand-blue dark:text-brand-gold mb-4">Lokasi Kami</h3>
           <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 font-medium flex items-center"><MapPin className="mr-2"/> Peta Google Maps akan dimuat di sini</span>
           </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700/30 p-8 rounded-xl border border-gray-100 dark:border-gray-600">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Kirim Pesan</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">Silakan isi formulir di bawah ini untuk pertanyaan atau saran.</p>
        <form className="space-y-4" onSubmit={(e) => {e.preventDefault(); alert('Pesan terkirim!');}}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap</label>
            <input type="text" className="w-full p-2.5 border rounded-lg focus:ring-brand-blue focus:border-brand-blue dark:bg-gray-800 dark:border-gray-600 dark:text-white" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" className="w-full p-2.5 border rounded-lg focus:ring-brand-blue focus:border-brand-blue dark:bg-gray-800 dark:border-gray-600 dark:text-white" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subjek</label>
            <input type="text" className="w-full p-2.5 border rounded-lg focus:ring-brand-blue focus:border-brand-blue dark:bg-gray-800 dark:border-gray-600 dark:text-white" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pesan</label>
            <textarea rows={4} className="w-full p-2.5 border rounded-lg focus:ring-brand-blue focus:border-brand-blue dark:bg-gray-800 dark:border-gray-600 dark:text-white" required></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-blue hover:bg-blue-800 text-white font-bold py-3 rounded-lg flex items-center justify-center">
            <Send size={18} className="mr-2"/> Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  </PageLayout>
);

// NEW: Staff Kependidikan Template
const StaffPage: React.FC = () => (
  <PageLayout title="Staf Kependidikan" parent="Dosen">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {[
         { name: "Bpk. Cornelius", role: "Kepala Administrasi Akademik", img: "https://i.pravatar.cc/300?img=60" },
         { name: "Ibu Deborah", role: "Staf Keuangan", img: "https://i.pravatar.cc/300?img=44" },
         { name: "Bpk. Simon", role: "Staf Perpustakaan", img: "https://i.pravatar.cc/300?img=13" },
         { name: "Ibu Rut", role: "Staf Kemahasiswaan", img: "https://i.pravatar.cc/300?img=20" },
         { name: "Bpk. Thomas", role: "Teknisi IT & Lab", img: "https://i.pravatar.cc/300?img=33" },
         { name: "Ibu Ester", role: "Resepsionis & Umum", img: "https://i.pravatar.cc/300?img=5" },
       ].map((staff, i) => (
         <div key={i} className="flex items-center space-x-4 p-4 border border-gray-100 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
               <img src={staff.img} alt={staff.name} className="w-full h-full object-cover" />
            </div>
            <div>
               <h4 className="font-bold text-gray-900 dark:text-white">{staff.name}</h4>
               <p className="text-sm text-brand-blue dark:text-brand-gold">{staff.role}</p>
               <button className="text-xs text-gray-500 mt-1 hover:text-brand-blue flex items-center"><Mail size={10} className="mr-1"/> Kontak</button>
            </div>
         </div>
       ))}
     </div>
  </PageLayout>
);

// NEW: Organisasi Mahasiswa Template
const OrmawaPage: React.FC = () => (
  <PageLayout title="Organisasi Mahasiswa" parent="Mahasiswa">
     <div className="space-y-12">
        {/* BEM */}
        <div className="bg-brand-blue text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
           <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-brand-blue font-bold text-3xl shrink-0">BEM</div>
           <div>
              <h2 className="text-2xl font-bold mb-2">Badan Eksekutif Mahasiswa (BEM)</h2>
              <p className="text-blue-100 mb-4">Wadah aspirasi dan kreasi mahasiswa STT Walter Post Jayapura. BEM bertanggung jawab mengkoordinir kegiatan kemahasiswaan baik di dalam maupun di luar kampus.</p>
              <div className="flex gap-4">
                 <button className="bg-brand-gold hover:bg-amber-600 text-white px-4 py-2 rounded font-bold text-sm">Struktur Pengurus</button>
                 <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded font-bold text-sm">Program Kerja</button>
              </div>
           </div>
        </div>

        {/* UKM List */}
        <div>
           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2">Unit Kegiatan Mahasiswa (UKM)</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Paduan Suara 'Gema Sion'", icon: <Users size={32}/>, desc: "Melayani dalam ibadah kapel dan gereja-gereja." },
                { name: "Tim Misi & Evangelisasi", icon: <Globe size={32}/>, desc: "Pelayanan penjangkauan ke daerah pedalaman." },
                { name: "Olahraga (Futsal & Voli)", icon: <Dumbbell size={32}/>, desc: "Menjaga kebugaran dan sportivitas mahasiswa." },
                { name: "Multimedia & Jurnalistik", icon: <Video size={32}/>, desc: "Dokumentasi dan publikasi kegiatan kampus." },
                { name: "Persekutuan Doa", icon: <Church size={32}/>, desc: "Wadah pertumbuhan rohani mahasiswa." },
              ].map((ukm, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-brand-gold group">
                   <div className="text-brand-blue dark:text-brand-gold mb-4 group-hover:scale-110 transition-transform">{ukm.icon}</div>
                   <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{ukm.name}</h4>
                   <p className="text-sm text-gray-600 dark:text-gray-300">{ukm.desc}</p>
                </div>
              ))}
           </div>
        </div>
     </div>
  </PageLayout>
);

// NEW: Kegiatan Mahasiswa Template
const KegiatanPage: React.FC = () => (
  <PageLayout title="Kegiatan Mahasiswa" parent="Mahasiswa">
    <div className="space-y-8">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Retret Awal Semester", date: "Februari 2024", img: "https://picsum.photos/600/400?random=20", desc: "Membangun kebersamaan dan spiritualitas mahasiswa baru dan lama." },
            { title: "Paskah Kampus", date: "Maret 2024", img: "https://picsum.photos/600/400?random=21", desc: "Perayaan kebangkitan Kristus dengan ibadah padang dan lomba." },
            { title: "KKN Tematik", date: "Mei 2024", img: "https://picsum.photos/600/400?random=22", desc: "Pengabdian masyarakat di desa-desa sekitar Danau Sentani." },
            { title: "Natal Civitas Akademika", date: "Desember 2023", img: "https://picsum.photos/600/400?random=23", desc: "Perayaan sukacita Natal bersama dosen, staf, dan mahasiswa." },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
               <img src={item.img} alt={item.title} className="w-full h-48 object-cover"/>
               <div className="p-6">
                  <div className="text-xs font-bold text-brand-gold mb-2 uppercase">{item.date}</div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
                  <button className="text-brand-blue dark:text-brand-gold font-bold text-sm hover:underline">Lihat Dokumentasi</button>
               </div>
            </div>
          ))}
       </div>
    </div>
  </PageLayout>
);

// NEW: Profil Alumni Template
const AlumniPage: React.FC = () => (
  <PageLayout title="Profil Alumni" parent="Mahasiswa">
     <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Jejak Langkah Alumni</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Ribuan alumni STT Walter Post Jayapura telah melayani di berbagai ladang Tuhan.</p>
     </div>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Pdt. Obeth", year: "Angkatan 2010", role: "Ketua Klasis", quote: "STT WPJ membentuk karakter saya untuk bertahan dan setia dalam pelayanan di pedalaman.", img: "https://i.pravatar.cc/300?img=11" },
          { name: "Ibu Guru Yuli", year: "Angkatan 2015", role: "Kepala Sekolah Kristen", quote: "Ilmu pendidikan Kristen yang saya dapatkan sangat relevan dengan tantangan pendidikan masa kini.", img: "https://i.pravatar.cc/300?img=5" },
          { name: "Bpk. Matius", year: "Angkatan 2018", role: "Konselor & Penulis", quote: "Dosen-dosen yang berdedikasi menjadi teladan hidup bagi saya hingga hari ini.", img: "https://i.pravatar.cc/300?img=3" },
        ].map((alumni, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue relative">
             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
             <div className="text-center mt-6">
                <p className="italic text-gray-600 dark:text-gray-300 mb-6">"{alumni.quote}"</p>
                <div className="flex items-center justify-center space-x-4">
                   <img src={alumni.img} alt={alumni.name} className="w-12 h-12 rounded-full"/>
                   <div className="text-left">
                      <h4 className="font-bold text-gray-900 dark:text-white">{alumni.name}</h4>
                      <p className="text-xs text-brand-blue dark:text-brand-gold">{alumni.year}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{alumni.role}</p>
                   </div>
                </div>
             </div>
          </div>
        ))}
     </div>
  </PageLayout>
);

// NEW: Digital Services Template (SiAkad, E-Learning)
const DigitalServicePage: React.FC<{ type: 'SiAkad' | 'E-Learning' }> = ({ type }) => (
  <PageLayout title={type} parent="Layanan">
     <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
           <div className="bg-brand-blue/5 dark:bg-white/5 p-8 rounded-full inline-block mb-6">
              {type === 'SiAkad' ? <CreditCard size={64} className="text-brand-blue dark:text-white"/> : <Video size={64} className="text-brand-blue dark:text-white"/>}
           </div>
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Portal {type}</h2>
           <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
             {type === 'SiAkad' 
               ? "Sistem Informasi Akademik Terpadu untuk mahasiswa dan dosen. Akses nilai, KRS, jadwal kuliah, dan data keuangan secara realtime." 
               : "Platform pembelajaran jarak jauh yang interaktif. Akses materi kuliah, tugas, dan diskusi kelas di mana saja dan kapan saja."}
           </p>
           <div className="space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300"><CheckCircle size={20} className="text-green-500 mr-3"/> Akses 24 Jam</div>
              <div className="flex items-center text-gray-700 dark:text-gray-300"><CheckCircle size={20} className="text-green-500 mr-3"/> Terintegrasi Mobile</div>
              <div className="flex items-center text-gray-700 dark:text-gray-300"><CheckCircle size={20} className="text-green-500 mr-3"/> Keamanan Data Terjamin</div>
           </div>
        </div>
        
        <div className="md:w-1/2 bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 w-full max-w-md">
           <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center text-gray-900 dark:text-white">
             <LogIn className="mr-2"/> Login {type}
           </h3>
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                 <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">NIM / NIDN</label>
                 <input type="text" className="w-full p-3 border rounded-lg focus:ring-brand-blue dark:bg-gray-800 dark:border-gray-500 dark:text-white" placeholder="Masukkan ID Pengguna" />
              </div>
              <div>
                 <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Kata Sandi</label>
                 <input type="password" className="w-full p-3 border rounded-lg focus:ring-brand-blue dark:bg-gray-800 dark:border-gray-500 dark:text-white" placeholder="********" />
              </div>
              <button className="w-full bg-brand-blue hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                 Masuk Portal
              </button>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                 <Link to="#" className="hover:text-brand-blue">Lupa Kata Sandi?</Link>
              </div>
           </form>
        </div>
     </div>
  </PageLayout>
);

// NEW: E-Journal Template
const EJournalPage: React.FC = () => (
  <PageLayout title="E-Journal" parent="Layanan">
     <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Jurnal Teologi & Pendidikan Kristen</h2>
        <p className="text-gray-600 dark:text-gray-300">Publikasi ilmiah civitas akademika STT Walter Post Jayapura.</p>
     </div>
     
     <div className="space-y-6">
        {[
          { vol: "Vol 5 No 1 (2024)", title: "Teologi Kontekstual Papua dalam Bingkai NKRI", author: "Dr. Arozatulo Telaumbanua", link: "#" },
          { vol: "Vol 4 No 2 (2023)", title: "Strategi Pendidikan Agama Kristen di Era Digital", author: "Ibu Maria, M.Pd.K", link: "#" },
          { vol: "Vol 4 No 1 (2023)", title: "Misi Holistik: Pendekatan Antropologis", author: "Pdt. Markus, M.Th", link: "#" },
        ].map((journal, i) => (
          <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
             <div className="flex-grow">
                <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded mb-2 inline-block">{journal.vol}</span>
                <h3 className="text-lg font-bold text-brand-blue dark:text-brand-blue-400 mb-1 hover:underline cursor-pointer">{journal.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center"><User size={12} className="mr-1"/> {journal.author}</p>
             </div>
             <div className="mt-4 md:mt-0 md:ml-6 flex space-x-2">
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg flex items-center">
                   <BookOpen size={16} className="mr-2"/> Abstrak
                </button>
                <button className="px-4 py-2 bg-brand-blue hover:bg-blue-800 text-white text-sm font-medium rounded-lg flex items-center">
                   <Download size={16} className="mr-2"/> PDF
                </button>
             </div>
          </div>
        ))}
     </div>
  </PageLayout>
);


const SejarahPage: React.FC = () => (
  <PageLayout title="Sejarah" parent="Profil">
    <HistorySection />
  </PageLayout>
);

const VisiMisiPage: React.FC = () => (
  <PageLayout title="Visi, Misi & Nilai" parent="Profil">
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue dark:text-brand-gold mb-6 flex items-center">
          <span className="w-10 h-1 bg-brand-gold mr-4"></span>Visi
        </h3>
        <blockquote className="text-xl text-gray-700 dark:text-gray-200 italic leading-relaxed pl-8 border-l-4 border-brand-gold bg-gray-50 dark:bg-gray-700 py-6 pr-4 rounded-r-lg">
          "Menjadi Perguruan Tinggi Teologi yang Unggul dalam Akademik, Spiritual, dan Pelayanan di Tanah Papua dan Indonesia pada tahun 2030."
        </blockquote>
      </div>
      
      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue dark:text-brand-gold mb-6 flex items-center">
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
              <p className="text-gray-700 dark:text-gray-300 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-serif font-bold text-brand-blue dark:text-brand-gold mb-6 flex items-center">
          <span className="w-10 h-1 bg-brand-gold mr-4"></span>Nilai Dasar (Core Values)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border-t-4 border-brand-blue hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-blue dark:text-brand-gold text-lg mb-2">Christ-Centered</h4>
            <p className="text-gray-600 dark:text-gray-300">Menjadikan Kristus sebagai pusat dari seluruh kegiatan akademik dan kehidupan kampus.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border-t-4 border-brand-gold hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-gold text-lg mb-2">Integrity</h4>
            <p className="text-gray-600 dark:text-gray-300">Menjunjung tinggi kejujuran, transparansi, dan tanggung jawab dalam pelayanan.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border-t-4 border-brand-blue hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-blue dark:text-brand-gold text-lg mb-2">Excellence</h4>
            <p className="text-gray-600 dark:text-gray-300">Berkomitmen memberikan kualitas terbaik dalam pengajaran dan pembelajaran.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow border-t-4 border-brand-gold hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-brand-gold text-lg mb-2">Servanthood</h4>
            <p className="text-gray-600 dark:text-gray-300">Memiliki hati hamba yang sedia melayani gereja dan masyarakat.</p>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

const AkreditasiPage: React.FC = () => {
  const handleDownload = () => {
    alert("Memulai unduhan Laporan Akreditasi PDF...");
  };

  return (
    <PageLayout title="Akreditasi" parent="Profil">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-0">
            STT Walter Post Jayapura berkomitmen terhadap mutu pendidikan yang diakui secara nasional.
          </p>
          <button 
            onClick={handleDownload}
            className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors shadow-sm"
          >
            <FileText className="mr-2" size={18} />
            Unduh Laporan PDF
          </button>
        </div>
        
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mt-4">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="py-4 px-6 text-left">Program Studi / Institusi</th>
                <th className="py-4 px-6 text-left">Jenjang</th>
                <th className="py-4 px-6 text-left">No. SK BAN-PT</th>
                <th className="py-4 px-6 text-center">Peringkat</th>
                <th className="py-4 px-6 text-center">Masa Berlaku</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4 px-6 font-bold text-gray-800 dark:text-white">Institusi STT Walter Post</td>
                <td className="py-4 px-6 dark:text-gray-300">-</td>
                <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">SK.BAN-PT/No.xxx/2022</td>
                <td className="py-4 px-6 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Baik</span></td>
                <td className="py-4 px-6 text-center text-sm dark:text-gray-300">2027</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4 px-6 font-medium dark:text-white">Teologi (Kependetaan)</td>
                <td className="py-4 px-6 dark:text-gray-300">S1 (Sarjana)</td>
                <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">SK.BAN-PT/No.xxx/2023</td>
                <td className="py-4 px-6 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Baik Sekali</span></td>
                <td className="py-4 px-6 text-center text-sm dark:text-gray-300">2028</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4 px-6 font-medium dark:text-white">Pendidikan Agama Kristen</td>
                <td className="py-4 px-6 dark:text-gray-300">S1 (Sarjana)</td>
                <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">SK.BAN-PT/No.xxx/2023</td>
                <td className="py-4 px-6 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Baik</span></td>
                <td className="py-4 px-6 text-center text-sm dark:text-gray-300">2028</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4 px-6 font-medium dark:text-white">Teologi</td>
                <td className="py-4 px-6 dark:text-gray-300">S2 (Magister)</td>
                <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">Dalam Proses</td>
                <td className="py-4 px-6 text-center"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">Proses</span></td>
                <td className="py-4 px-6 text-center text-sm dark:text-gray-300">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
};

// --- Interactive Structure Component (Horizontal) ---
interface OrgNodeData {
  title: string;
  name: string;
  children?: OrgNodeData[];
}

const OrgNode: React.FC<{ data: OrgNodeData; isRoot?: boolean }> = ({ data, isRoot = false }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = data.children && data.children.length > 0;

  return (
    <div className="flex flex-col items-center mx-4">
      <div 
        className={`relative z-10 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 text-center w-52 transition-all duration-300 flex-shrink-0 ${isRoot ? 'bg-brand-blue text-white ring-4 ring-brand-blue/20' : 'bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'}`}
      >
        <h4 className={`font-bold text-xs uppercase mb-1 leading-tight ${isRoot ? 'text-brand-gold' : 'text-brand-blue dark:text-brand-gold'}`}>{data.title}</h4>
        <p className={`text-sm ${isRoot ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`}>{data.name}</p>
        
        {hasChildren && (
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
            className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm z-20 ${isRoot ? 'bg-brand-gold text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'} transition-transform duration-300`}
            title={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Connector to children */}
          <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
          
          {/* Horizontal Branch */}
          <div className="relative flex pt-4">
             {/* Lines connecting horizontal siblings */}
             {data.children!.length > 1 && (
                 <div className="absolute top-0 left-0 w-full h-px bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2"></div>
             )}
             
             <div className="flex space-x-4">
                {data.children!.map((child, idx) => (
                  <div key={idx} className="relative flex flex-col items-center">
                    {/* Top connector for each child */}
                    <div className="absolute -top-4 w-0.5 h-4 bg-gray-300 dark:bg-gray-600"></div>
                    <OrgNode data={child} />
                  </div>
                ))}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StrukturPage: React.FC = () => {
  const orgData: OrgNodeData = {
    title: "Ketua STT",
    name: "Dr. Arozatulo Telaumbanua, M.Th",
    children: [
      {
        title: "Wakil Ketua I (Akademik)",
        name: "Pdt. Yosua, M.Th",
        children: [
          { 
            title: "Kaprodi Teologi", 
            name: "Pdt. Markus, M.Th",
            children: [
              { title: "Sek. Prodi", name: "Staff Teologi" }
            ]
          },
          { 
            title: "Kaprodi PAK", 
            name: "Ibu Maria, M.Pd.K",
            children: [
              { title: "Sek. Prodi", name: "Staff PAK" }
            ]
          },
        ]
      },
      {
        title: "Wakil Ketua II (Keuangan)",
        name: "Ibu Sarah, S.E",
        children: [
           { 
             title: "Kepala Keuangan", 
             name: "Staff Keuangan",
             children: [
                { title: "Kasir", name: "Ibu Ani" }
             ]
           },
           { title: "Kepala Sarpras", name: "Bpk. Yohanes" }
        ]
      },
      {
        title: "Wakil Ketua III (Kemahasiswaan)",
        name: "Pdt. Lukas, M.Th",
        children: [
           { title: "Unit Kegiatan Mahasiswa", name: "Koordinator BEM" },
           { title: "Asrama", name: "Kepala Asrama Putra/i" }
        ]
      }
    ]
  };

  return (
    <PageLayout title="Struktur Organisasi" parent="Profil">
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-300">Bagan Struktur Organisasi STT Walter Post Jayapura Periode 2022-2026</p>
        <p className="text-xs text-gray-400 mt-2">(Klik tombol panah untuk melihat detail bawahan)</p>
      </div>
      <div className="overflow-x-auto pb-12 pt-4 px-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="min-w-max flex justify-center p-8">
          <OrgNode data={orgData} isRoot />
        </div>
      </div>
    </PageLayout>
  );
};

// --- Gallery with Lightbox & Masonry ---
const GaleriPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [filter, setFilter] = useState('Semua');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarked.includes(id)) {
      setBookmarked(prev => prev.filter(b => b !== id));
    } else {
      setBookmarked(prev => [...prev, id]);
    }
  };

  const categories = ["Semua", "Kampus", "Kegiatan", "Wisuda", "Ibadah"];

  // Generate varied images for masonry effect (12 items) with dates and categories
  const allImages = [
    { id: 1, src: "https://picsum.photos/600/400?random=1", caption: "Kegiatan Wisuda Angkatan XX", category: "Wisuda", date: "2024-08-20" },
    { id: 2, src: "https://picsum.photos/400/600?random=2", caption: "Ibadah Kapel Senin", category: "Ibadah", date: "2024-08-18" },
    { id: 3, src: "https://picsum.photos/600/600?random=3", caption: "Suasana Perpustakaan", category: "Kampus", date: "2024-08-15" },
    { id: 4, src: "https://picsum.photos/500/800?random=4", caption: "Retret Mahasiswa Baru", category: "Kegiatan", date: "2024-09-01" },
    { id: 5, src: "https://picsum.photos/800/500?random=5", caption: "Seminar Nasional Teologi", category: "Kegiatan", date: "2024-07-10" },
    { id: 6, src: "https://picsum.photos/500/500?random=6", caption: "Pertandingan Voli Persahabatan", category: "Kegiatan", date: "2024-08-17" },
    { id: 7, src: "https://picsum.photos/400/700?random=7", caption: "Pelayanan Masyarakat di Sentani", category: "Kegiatan", date: "2024-06-05" },
    { id: 8, src: "https://picsum.photos/800/400?random=8", caption: "Rapat Dosen Semester Ganjil", category: "Kampus", date: "2024-08-01" },
    { id: 9, src: "https://picsum.photos/600/500?random=9", caption: "Perayaan Natal Kampus", category: "Ibadah", date: "2023-12-20" },
    { id: 10, src: "https://picsum.photos/450/600?random=10", caption: "KKN di Pedalaman Wamena", category: "Kegiatan", date: "2024-05-15" },
    { id: 11, src: "https://picsum.photos/700/500?random=11", caption: "Dies Natalis Kampus ke-38", category: "Kampus", date: "2024-03-12" },
    { id: 12, src: "https://picsum.photos/500/700?random=12", caption: "Kunjungan Gerejawi GKII", category: "Ibadah", date: "2024-04-20" }
  ];

  const filteredImages = allImages
    .filter(img => filter === 'Semua' || img.category === filter)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <PageLayout title="Galeri Multimedia" parent="Profil">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-brand-blue text-white shadow-md' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Sort */}
        <button 
          onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
          className="flex items-center space-x-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-brand-blue bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg transition-colors"
        >
          <span>{sortOrder === 'newest' ? 'Terbaru' : 'Terlama'}</span>
          {sortOrder === 'newest' ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
        </button>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((img) => (
          <div key={img.id} className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md bg-gray-100 dark:bg-gray-800" onClick={() => setSelectedImage(img)}>
            <img 
              src={img.src} 
              alt={img.caption} 
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</p>
              <p className="text-gray-300 text-xs mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.date}</p>
            </div>

            {/* Bookmark Button */}
            <button 
              onClick={(e) => toggleBookmark(img.id, e)}
              className={`absolute top-4 right-4 p-2 rounded-full shadow-lg transition-all transform duration-300 ${bookmarked.includes(img.id) ? 'bg-brand-gold text-white scale-100' : 'bg-white/80 text-gray-600 hover:bg-white scale-0 group-hover:scale-100'}`}
              title="Simpan Gambar"
            >
              <Bookmark size={20} fill={bookmarked.includes(img.id) ? "currentColor" : "none"} />
            </button>
            
            {/* Zoom Icon Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                 <ZoomIn className="text-white w-8 h-8" />
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors z-50">
            <X size={40} />
          </button>
          
          <div className="max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
             <img 
               src={selectedImage.src} 
               alt="Full view" 
               className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300" 
             />
             <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold mb-1">{selectedImage.caption}</h3>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                   <span className="flex items-center"><Calendar size={14} className="mr-1"/> {selectedImage.date}</span>
                   <span className="bg-gray-800 px-2 py-0.5 rounded text-xs border border-gray-700">{selectedImage.category}</span>
                </div>
             </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

// 2. PRODI SECTION

interface ProdiDetailProps {
  title: string;
  degree: string;
  description: string;
  vision?: string;
  careers: string[];
  curriculum: string[];
  featuredCourses?: string[];
}

const ProdiDetail: React.FC<ProdiDetailProps> = ({ title, degree, description, vision, careers, curriculum, featuredCourses }) => (
  <PageLayout title={title} parent="Program Studi">
    <div className="space-y-10">
      <div className="bg-brand-blue/5 dark:bg-brand-blue/20 p-8 rounded-2xl border border-brand-blue/10 dark:border-brand-blue/30">
        <h2 className="text-3xl font-serif font-bold text-brand-blue dark:text-brand-gold mb-4">{title}</h2>
        <div className="inline-block bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold mb-4">{degree}</div>
        <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">{description}</p>
      </div>

      {vision && (
        <div>
           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Award className="mr-2 text-brand-gold"/> Visi Program Studi</h3>
           <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 italic">"{vision}"</p>
        </div>
      )}

      {featuredCourses && featuredCourses.length > 0 && (
         <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center"><BookOpen className="mr-2 text-brand-gold"/> Mata Kuliah Unggulan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredCourses.map((course, idx) => (
                <div key={idx} className="flex items-center p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:border-brand-blue transition-colors">
                  <CheckCircle size={16} className="text-brand-blue dark:text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{course}</span>
                </div>
              ))}
            </div>
         </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center"><Users className="mr-2 text-brand-gold"/> Prospek Karir</h3>
          <ul className="space-y-2">
            {careers.map((career, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{career}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center"><BookOpen className="mr-2 text-brand-gold"/> Kompetensi Lulusan</h3>
          <ul className="space-y-2">
            {curriculum.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle size={18} className="text-brand-blue dark:text-brand-gold mr-2 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </PageLayout>
);

const FasilitasPage: React.FC = () => {
  // Enhanced Facilities with Virtual Tour Placeholder
  return (
    <PageLayout title="Fasilitas Akademik" parent="Program Studi">
      <div className="grid grid-cols-1 gap-12">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
           Kampus STT Walter Post Jayapura dilengkapi dengan berbagai fasilitas modern untuk menunjang kegiatan belajar mengajar dan pembentukan karakter mahasiswa.
        </p>

        {[
          { 
            title: "Perpustakaan Digital", 
            icon: <Library size={32} />, 
            desc: "Pusat sumber belajar dengan koleksi ribuan buku fisik dan akses ke jurnal teologi internasional. Dilengkapi dengan ruang baca yang nyaman, area diskusi, dan akses internet cepat.", 
            img: "https://picsum.photos/id/192/800/500",
            features: ["Koleksi Digital", "Ruang Diskusi", "Wi-Fi Area"] 
          },
          { 
            title: "Kapel Kampus", 
            icon: <Church size={32} />, 
            desc: "Jantung spiritualitas kampus. Kapel ini digunakan untuk ibadah harian, persekutuan doa, dan kegiatan kerohanian lainnya. Mampu menampung seluruh civitas akademika.", 
            img: "https://picsum.photos/id/206/800/500",
            features: ["Kapasitas 500 orang", "Sound System Full", "AC"]
          },
          { 
            title: "Laboratorium Komputer", 
            icon: <PenTool size={32} />, 
            desc: "Fasilitas penunjang keterampilan teknologi informasi bagi mahasiswa. Dilengkapi dengan perangkat komputer terbaru untuk pelatihan multimedia dan riset.", 
            img: "https://picsum.photos/id/0/800/500",
            features: ["20 Unit PC", "Proyektor HD", "Software Teologi"]
          },
          { 
            title: "Asrama Mahasiswa", 
            icon: <Users size={32} />, 
            desc: "Tempat tinggal yang kondusif untuk membangun komunitas. Terpisah untuk putra dan putri, dilengkapi dengan ruang belajar bersama, dapur umum, dan area olahraga.", 
            img: "https://picsum.photos/id/515/800/500",
            features: ["Kamar Standar", "Ruang Makan", "Keamanan 24 Jam"]
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 group">
             <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white/20 backdrop-blur-md border border-white text-white px-6 py-2 rounded-full font-bold flex items-center hover:bg-white hover:text-brand-blue transition-all">
                      <Video className="mr-2" size={20} /> Lihat Tur Virtual 360°
                   </button>
                </div>
             </div>
             <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brand-light dark:bg-gray-700 text-brand-blue dark:text-brand-gold rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <div>
                   <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-2 uppercase tracking-wide">Fasilitas Unggulan:</h4>
                   <div className="flex flex-wrap gap-2">
                      {item.features.map((feat, i) => (
                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full font-medium">
                          {feat}
                        </span>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

// 3. DOSEN SECTION
const DosenPage: React.FC = () => {
  const [selectedLecturer, setSelectedLecturer] = useState<any>(null);

  const lecturers = [
    { id: 1, name: "Dr. Arozatulo Telaumbanua, M.Th", role: "Dosen Teologi Sistematika", img: "https://i.pravatar.cc/300?img=11", s1: "STT WPJ", s2: "STT Jaffray", s3: "STT Jaffray", research: "Kristologi Kontekstual, Teologi Reformed", email: "arozatulo@sttwpj.ac.id" },
    { id: 2, name: "Pdt. Yosua, M.Th", role: "Dosen Biblika Perjanjian Baru", img: "https://i.pravatar.cc/300?img=12", s1: "STT WPJ", s2: "STT SAAT", s3: "Sedang Studi", research: "Eksegese Surat Paulus, Bahasa Yunani", email: "yosua@sttwpj.ac.id" },
    { id: 3, name: "Ibu Maria, M.Pd.K", role: "Dosen Pendidikan Agama Kristen", img: "https://i.pravatar.cc/300?img=5", s1: "STT WPJ", s2: "STT I3", s3: "-", research: "Psikologi Perkembangan, Kurikulum PAK", email: "maria@sttwpj.ac.id" },
    { id: 4, name: "Pdt. Markus, M.Th", role: "Dosen Misiologi", img: "https://i.pravatar.cc/300?img=14", s1: "STT WPJ", s2: "STT Jaffray", s3: "-", research: "Misi Holistik, Antropologi Budaya", email: "markus@sttwpj.ac.id" },
    { id: 5, name: "Dr. Sarah, M.Th", role: "Dosen Konseling Pastoral", img: "https://i.pravatar.cc/300?img=9", s1: "STT Aletheia", s2: "STT SAAT", s3: "Fuller Seminary", research: "Konseling Keluarga, Trauma Healing", email: "sarah@sttwpj.ac.id" },
    { id: 6, name: "Bpk. Yohanes, M.Pd", role: "Dosen Manajemen Pendidikan", img: "https://i.pravatar.cc/300?img=8", s1: "Uncen", s2: "UPI Bandung", s3: "-", research: "Manajemen Sekolah, Kepemimpinan", email: "yohanes@sttwpj.ac.id" },
  ];

  return (
    <PageLayout title="Dosen & Staff Pengajar" parent="Dosen">
       <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
         STT Walter Post Jayapura didukung oleh tenaga pengajar yang kompeten, berdedikasi, dan memiliki latar belakang pendidikan dari berbagai perguruan tinggi teologi ternama.
       </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lecturers.map((lecturer) => (
          <div key={lecturer.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="w-32 h-32 mx-auto mt-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md relative">
              <img src={lecturer.img} alt={lecturer.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{lecturer.name}</h3>
              <p className="text-brand-blue dark:text-brand-gold text-sm font-medium mb-4">{lecturer.role}</p>
              
              <div className="mt-auto">
                 <button 
                  onClick={() => setSelectedLecturer(lecturer)}
                  className="text-brand-gold text-sm font-bold hover:text-brand-blue transition-colors border border-brand-gold px-4 py-2 rounded-full hover:bg-brand-gold hover:text-white w-full"
                 >
                   Lihat Profil Lengkap
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lecturer Detail Modal */}
      {selectedLecturer && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedLecturer(null)}>
           <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500" onClick={() => setSelectedLecturer(null)}>
                <X size={24} />
              </button>
              
              <div className="flex flex-col items-center mb-6">
                 <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-brand-blue">
                   <img src={selectedLecturer.img} alt={selectedLecturer.name} className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">{selectedLecturer.name}</h3>
                 <p className="text-brand-blue dark:text-brand-gold font-medium">{selectedLecturer.role}</p>
              </div>

              <div className="space-y-4 text-sm">
                 <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center"><GraduationCap size={16} className="mr-2"/> Riwayat Pendidikan</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                       <li>S1: {selectedLecturer.s1}</li>
                       <li>S2: {selectedLecturer.s2}</li>
                       <li>S3: {selectedLecturer.s3}</li>
                    </ul>
                 </div>
                 
                 <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center"><BookOpen size={16} className="mr-2"/> Bidang Minat Riset</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedLecturer.research}</p>
                 </div>

                 <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center"><Mail size={16} className="mr-2"/> Kontak</h4>
                    <p className="text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30 inline-block px-3 py-1 rounded text-blue-700 dark:text-blue-300">{selectedLecturer.email}</p>
                 </div>
              </div>
           </div>
        </div>
      )}
    </PageLayout>
  );
};

// 4. LAYANAN SECTION
const PMBPage: React.FC = () => (
  <PageLayout title="Pendaftaran Mahasiswa Baru" parent="Layanan">
    <div className="space-y-8">
      <div className="bg-brand-blue text-white p-8 rounded-2xl text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah Bersama Kami</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Mari persiapkan diri Anda menjadi hamba Tuhan yang berkualitas dan berkarakter Kristus di STT Walter Post Jayapura.</p>
          <button className="bg-brand-gold hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Daftar Online Sekarang
          </button>
        </div>
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">Alur Pendaftaran</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Isi Formulir", desc: "Lengkapi data diri secara online.", icon: <FileText size={24} /> },
            { step: "2", title: "Pembayaran", desc: "Transfer biaya pendaftaran.", icon: <CreditCard size={24} /> },
            { step: "3", title: "Ujian Masuk", desc: "Mengikuti tes tertulis & wawancara.", icon: <PenTool size={24} /> },
            { step: "4", title: "Daftar Ulang", desc: "Registrasi ulang sebagai mahasiswa.", icon: <CheckCircle size={24} /> }
          ].map((item) => (
            <div key={item.step} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center relative hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-light dark:bg-gray-700 text-brand-blue dark:text-brand-gold rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-2 border-brand-blue/20 dark:border-gray-600">
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

const ELibraryPage: React.FC = () => (
  <PageLayout title="E-Library" parent="Layanan">
    <div className="text-center space-y-8 py-10">
       <Library size={80} className="mx-auto text-brand-blue/20 dark:text-brand-gold/20" />
       <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Perpustakaan Digital</h2>
       <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
         Akses ribuan koleksi buku digital, jurnal teologi, dan referensi akademik untuk menunjang studi Anda. Tersedia 24/7 bagi seluruh civitas akademika STT Walter Post Jayapura.
       </p>
       
       <button className="bg-brand-blue hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center mx-auto">
          <ExternalLink className="mr-3" size={24} />
          Akses E-Library Sekarang
       </button>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left mt-12">
          <div className="p-6 border dark:border-gray-700 rounded-xl hover:border-brand-gold transition-colors">
            <h4 className="font-bold text-lg mb-2 text-brand-blue dark:text-brand-gold">E-Books</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Koleksi buku teologi, pendidikan, dan umum dalam format digital.</p>
          </div>
          <div className="p-6 border dark:border-gray-700 rounded-xl hover:border-brand-gold transition-colors">
            <h4 className="font-bold text-lg mb-2 text-brand-blue dark:text-brand-gold">Jurnal Ilmiah</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Akses ke jurnal nasional terakreditasi dan internasional bereputasi.</p>
          </div>
          <div className="p-6 border dark:border-gray-700 rounded-xl hover:border-brand-gold transition-colors">
            <h4 className="font-bold text-lg mb-2 text-brand-blue dark:text-brand-gold">Skripsi & Tesis</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Repositori hasil penelitian mahasiswa dan dosen STT WPJ.</p>
          </div>
       </div>
    </div>
  </PageLayout>
);

// 5. BERITA & AGENDA SECTION
const AgendaPage: React.FC = () => {
  const [filter, setFilter] = useState('Semua');
  const filters = ["Semua", "Akademik", "Seminar", "Kegiatan Mahasiswa"];

  const events = [
    { id: 1, date: "15", month: "AGU", title: "Kuliah Umum Semester Ganjil", time: "08:00 - 12:00 WIT", loc: "Aula Kampus", cat: "Akademik" },
    { id: 2, date: "20", month: "AGU", title: "Seminar Nasional Teologi", time: "09:00 - 15:00 WIT", loc: "Zoom & Youtube", cat: "Seminar" },
    { id: 3, date: "01", month: "SEP", title: "Retret Mahasiswa Baru", time: "3 Hari", loc: "Kampung Harapan", cat: "Kegiatan Mahasiswa" },
    { id: 4, date: "10", month: "SEP", title: "Batas Akhir KRS", time: "23:59 WIT", loc: "Online (SiAkad)", cat: "Akademik" },
  ];

  const filteredEvents = filter === "Semua" ? events : events.filter(e => e.cat === filter);

  return (
    <PageLayout title="Kalender & Agenda" parent="Berita">
       <div className="flex flex-wrap gap-2 mb-8">
         <span className="flex items-center text-gray-500 dark:text-gray-400 mr-2"><Filter size={16} className="mr-1"/> Filter:</span>
         {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors border ${filter === f ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-brand-blue'}`}
            >
              {f}
            </button>
         ))}
       </div>

       <div className="space-y-4">
         {filteredEvents.map(event => (
           <div key={event.id} className="flex flex-col md:flex-row bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-brand-light dark:bg-gray-700 w-20 h-20 rounded-lg text-brand-blue dark:text-brand-gold mb-4 md:mb-0 md:mr-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                 <span className="text-2xl font-bold leading-none">{event.date}</span>
                 <span className="text-xs font-bold uppercase mt-1">{event.month}</span>
              </div>
              <div className="flex-grow">
                 <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-bold px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">{event.cat}</span>
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-brand-gold transition-colors">{event.title}</h3>
                 <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <span className="flex items-center"><Clock size={14} className="mr-1"/> {event.time}</span>
                    <span className="flex items-center"><MapPin size={14} className="mr-1"/> {event.loc}</span>
                 </div>
              </div>
              <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                 <button className="text-brand-blue dark:text-brand-gold hover:text-brand-gold font-bold text-sm">Detail</button>
              </div>
           </div>
         ))}
       </div>
    </PageLayout>
  );
};

const NewsPage: React.FC = () => {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', 'Akademik', 'Kegiatan', 'Pengumuman'];

  const newsItems = [
    { id: 1, title: "Penerimaan Mahasiswa Baru TA 2024/2025", category: "Pengumuman", date: "12 Ags 2024", img: "https://picsum.photos/id/10/800/600" },
    { id: 2, title: "Seminar Teologi Kebangsaan", category: "Kegiatan", date: "05 Ags 2024", img: "https://picsum.photos/id/20/800/600" },
    { id: 3, title: "Jadwal Ujian Akhir Semester Genap", category: "Akademik", date: "28 Jul 2024", img: "https://picsum.photos/id/3/800/600" },
    { id: 4, title: "Ibadah Pembukaan Semester", category: "Kegiatan", date: "15 Jul 2024", img: "https://picsum.photos/id/4/800/600" },
  ];

  const filteredNews = filter === 'Semua' ? newsItems : newsItems.filter(n => n.category === filter);

  return (
    <PageLayout title="Berita & Artikel" parent="Berita">
      {/* Filter Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
           <Filter size={18} className="mr-2"/> <span className="font-medium">Filter Berita:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 ${
                filter === cat 
                ? 'bg-brand-blue text-white shadow-md' 
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" /> {item.date}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-gold transition-colors">
                  <Link to="#">{item.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...
                </p>
                <Link to="#" className="text-brand-gold font-bold text-sm hover:underline flex items-center">
                   Baca Selengkapnya <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400">
            Tidak ada berita ditemukan untuk kategori ini.
          </div>
        )}
      </div>
    </PageLayout>
  );
};

const TracerStudyPage: React.FC = () => (
  <PageLayout title="Tracer Study Alumni" parent="Mahasiswa">
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Formulir Pelacakan Alumni</h2>
        <p className="text-gray-600 dark:text-gray-300">Mohon partisipasi alumni untuk mengisi data demi pengembangan institusi.</p>
      </div>
      
      <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama Lengkap</label>
            <input type="text" className="w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue/20 p-2.5 border transition-colors dark:bg-gray-700 dark:text-white" placeholder="Nama beserta gelar" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tahun Lulus</label>
            <input type="number" className="w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue/20 p-2.5 border transition-colors dark:bg-gray-700 dark:text-white" placeholder="Contoh: 2020" required />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Program Studi</label>
          <select className="w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue/20 p-2.5 border bg-white dark:bg-gray-700 dark:text-white transition-colors">
            <option>S1 Teologi</option>
            <option>S1 Pendidikan Agama Kristen</option>
            <option>S2 Magister Teologi</option>
            <option>S2 Magister PAK</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pekerjaan Saat Ini</label>
          <input type="text" className="w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue/20 p-2.5 border transition-colors dark:bg-gray-700 dark:text-white" placeholder="Jabatan & Institusi (Mis: Guru Agama di SMA N 1 Sentani)" required />
        </div>

        <div>
           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Testimoni Singkat</label>
           <textarea rows={4} className="w-full border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue/20 p-2.5 border transition-colors dark:bg-gray-700 dark:text-white" placeholder="Bagikan pengalaman belajar Anda selama di STT Walter Post..."></textarea>
        </div>

        <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-lg transform active:scale-95">
          Kirim Data Alumni
        </button>
      </form>
    </div>
  </PageLayout>
);

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Mock results
  const results = [
    { title: `Informasi Pendaftaran tentang "${query}"`, desc: "Halaman informasi lengkap mengenai pendaftaran mahasiswa baru tahun ajaran 2024/2025.", link: "/layanan/pmb" },
    { title: `Artikel Akademik: Relevansi "${query}"`, desc: "Jurnal teologi membahas tentang implementasi nilai-nilai kristiani dalam konteks modern.", link: "/berita/artikel" },
    { title: `Kurikulum Program Studi`, desc: "Daftar mata kuliah yang berkaitan dengan pengembangan karakter dan kompetensi.", link: "/prodi/s1-teologi" },
  ];

  return (
    <PageLayout title="Hasil Pencarian" parent="Search">
       <div className="space-y-6">
         <div className="flex items-center justify-between border-b pb-4">
            <p className="text-gray-600 dark:text-gray-300">Menampilkan hasil pencarian untuk: <span className="font-bold text-gray-900 dark:text-white text-lg">"{query}"</span></p>
            <span className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-500 dark:text-gray-300">{results.length} hasil ditemukan</span>
         </div>
         
         {query ? (
           <div className="space-y-4">
             {results.map((res, idx) => (
               <div key={idx} className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-brand-blue/30 group">
                  <h3 className="text-xl font-bold text-brand-blue dark:text-brand-gold mb-2 group-hover:text-brand-gold dark:group-hover:text-white transition-colors">
                    <Link to={res.link} className="hover:underline">{res.title}</Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{res.desc}</p>
                  <Link to={res.link} className="text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-gold flex items-center group-hover:translate-x-1 transition-transform">
                    Lihat Halaman <ArrowRight size={12} className="ml-1" />
                  </Link>
               </div>
             ))}
           </div>
         ) : (
           <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-600">
             <Search size={48} className="mx-auto text-gray-300 mb-4" />
             <p className="text-gray-500 font-medium">Silakan masukkan kata kunci pencarian pada kolom di atas.</p>
           </div>
         )}
       </div>
    </PageLayout>
  );
};

// Placeholder for other generic pages
const GenericPage: React.FC<{ title: string; content?: string }> = ({ title, content }) => (
  <PageLayout title={title} parent="Halaman">
    <div className="prose max-w-none text-gray-600 dark:text-gray-300">
      <p>{content || `Konten untuk halaman ${title} sedang dalam pengembangan. Silakan hubungi admin untuk informasi lebih lanjut.`}</p>
    </div>
  </PageLayout>
);


const App: React.FC = () => {
  const [showInfoPopup, setShowInfoPopup] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {showInfoPopup && <InfoPopup onClose={() => setShowInfoPopup(false)} />}
      
      <div className="font-sans text-gray-900 dark:text-white bg-white dark:bg-gray-900 flex flex-col min-h-screen transition-colors duration-300">
        <Header />
        
        <main className="flex-grow pt-[120px] xl:pt-[130px]">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <HistorySection />
                <Programs />
              </>
            } />
            
            {/* Profil Routes */}
            <Route path="/profil/sejarah" element={<SejarahPage />} />
            <Route path="/profil/visi" element={<VisiMisiPage />} />
            <Route path="/profil/misi" element={<VisiMisiPage />} />
            <Route path="/profil/nilai" element={<VisiMisiPage />} />
            <Route path="/profil/akreditasi" element={<AkreditasiPage />} />
            <Route path="/profil/struktur" element={<StrukturPage />} />
            <Route path="/profil/galeri" element={<GaleriPage />} />

            {/* Prodi Routes */}
            <Route path="/prodi" element={<ProdiIndexPage />} />
            <Route path="/prodi/s1-teologi" element={
              <ProdiDetail 
                title="S1 Teologi (S.Th)" 
                degree="Sarjana Teologi"
                description="Program Studi Sarjana Teologi bertujuan menghasilkan hamba Tuhan yang memiliki kompetensi akademik yang mumpuni, spiritualitas yang mendalam, dan keterampilan pelayanan yang relevan."
                vision="Menjadi pusat pendidikan teologi injili yang unggul dalam riset dan pelayanan kontekstual di Papua."
                careers={["Pendeta / Gembala Sidang", "Misionaris", "Pengajar Teologi", "Penulis Rohani"]}
                curriculum={["Biblika (PL & PB)", "Teologi Sistematika", "Teologi Praktika", "Sejarah Gereja"]}
                featuredCourses={["Hermeneutik Alkitabiah", "Homiletika Ekspositori", "Misiologi Kontekstual Papua", "Konseling Pastoral"]}
              />
            } />
            <Route path="/prodi/s1-pak" element={
              <ProdiDetail 
                title="S1 Pendidikan Agama Kristen" 
                degree="Sarjana Pendidikan"
                description="Menyiapkan guru agama Kristen yang profesional, pedagogis, dan mampu mendidik dengan hati hamba di sekolah maupun gereja."
                careers={["Guru Agama Kristen", "Penyuluh Agama", "Konselor Sekolah", "Penulis Kurikulum"]}
                curriculum={["Psikologi Pendidikan", "Metode Mengajar PAK", "Manajemen Kelas", "Teologi Pendidikan"]}
                featuredCourses={["Strategi Pembelajaran PAK", "Psikologi Perkembangan Peserta Didik", "Evaluasi Pembelajaran", "Media Pembelajaran Kreatif"]}
              />
            } />
            <Route path="/prodi/s2-teologi" element={
               <ProdiDetail 
                title="S2 Magister Teologi (M.Th)" 
                degree="Magister Teologi"
                description="Program pascasarjana yang dirancang untuk pendalaman teologi lanjutan, mempertajam kemampuan analisis biblika dan sistematika bagi para pemimpin gereja."
                careers={["Dosen Teologi", "Peneliti Teologi", "Konsultan Gerejawi", "Pemimpin Sinode"]}
                curriculum={["Teologi Kontemporer", "Eksegese Lanjutan", "Metodologi Penelitian Teologi", "Teologi Publik"]}
                featuredCourses={["Teologi Biblika Lanjutan", "Apologetika Kristen Modern", "Etika Kristen Kontemporer", "Seminar Teologi Sistematika", "Kepemimpinan Kristen Strategis"]}
              />
            } />
            <Route path="/prodi/s2-pak" element={
              <ProdiDetail 
                title="S2 Magister PAK (M.Pd)" 
                degree="Magister Pendidikan"
                description="Program magister yang berfokus pada pengembangan keahlian manajerial dan kepemimpinan dalam pendidikan Kristen, serta inovasi kurikulum berbasis nilai Kristiani."
                vision="Menjadi program pascasarjana PAK yang terdepan dalam inovasi pendidikan Kristen di Indonesia Timur."
                careers={["Kepala Sekolah Kristen", "Dosen PAK", "Pengawas Pendidikan Agama", "Konsultan Kurikulum", "Peneliti Pendidikan"]}
                curriculum={["Filsafat Pendidikan Kristen", "Manajemen Pendidikan", "Desain Kurikulum PAK", "Kepemimpinan Pendidikan"]}
                featuredCourses={["Manajemen Strategis Pendidikan Kristen", "Teknologi Pendidikan Lanjutan", "Analisis Kebijakan Pendidikan", "Pengembangan Karakter & Moral"]}
              />
            } />
            <Route path="/prodi/fasilitas" element={<FasilitasPage />} />

            {/* Dosen Routes */}
            <Route path="/dosen/pendidik" element={<DosenPage />} />
            <Route path="/dosen/staf" element={<StaffPage />} />

            {/* Mahasiswa Routes */}
            <Route path="/mahasiswa/ormawa" element={<OrmawaPage />} />
            <Route path="/mahasiswa/kegiatan" element={<KegiatanPage />} />
            <Route path="/mahasiswa/alumni" element={<AlumniPage />} />
            <Route path="/mahasiswa/tracer" element={<TracerStudyPage />} />

            {/* Layanan Routes */}
            <Route path="/layanan/pmb" element={<PMBPage />} />
            <Route path="/layanan/siakad" element={<DigitalServicePage type="SiAkad" />} />
            <Route path="/layanan/elearning" element={<DigitalServicePage type="E-Learning" />} />
            <Route path="/layanan/elibrary" element={<ELibraryPage />} />
            <Route path="/layanan/ejournal" element={<EJournalPage />} />

            {/* Berita Routes */}
            <Route path="/berita/terkini" element={<NewsPage />} />
            <Route path="/berita/artikel" element={<NewsPage />} />
            <Route path="/berita/informasi" element={<InformasiPage />} />
            <Route path="/berita/agenda" element={<AgendaPage />} />

            {/* Utility Routes */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchPage />} />
            
            {/* Fallback */}
            <Route path="*" element={<GenericPage title="404 Not Found" content="Halaman yang Anda cari tidak ditemukan." />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;