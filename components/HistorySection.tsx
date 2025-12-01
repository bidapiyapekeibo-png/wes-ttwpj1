import React from 'react';
import { Milestone } from '../types';
import { ChevronRight } from 'lucide-react';

const milestones: Milestone[] = [
  {
    year: '1986',
    title: 'Awal Mula',
    description: 'Berawal dari program kuliah jarak jauh STT Jaffray Ujungpandang. Disambut baik oleh Pdt. Yosia Tebay, S.Th.'
  },
  {
    year: '1988',
    title: 'Perpindahan Kampus',
    description: 'Menggunakan Kompleks STA Ruland Lesnussa di Abepura setelah sebelumnya di Gedung Ibadah Jemaat Baitsheba.'
  },
  {
    year: '1999',
    title: 'Kampus Sentani & Status',
    description: 'Menempati kompleks permanen di Sentani. Mendapatkan status "TERDAFTAR".'
  },
  {
    year: '2003',
    title: 'Hibah CMA',
    description: 'Lokasi Sentani resmi menjadi milik sendiri berasal dari hibah The Christian Missionary Alliance (CMA).'
  },
  {
    year: '2007',
    title: 'Status Diakui',
    description: 'Meningkat status menjadi "DIAKUI" melalui SK Dirjen Bimas Kristen Depag RI No. DJ.III.Kep/HK.00.5/7/253/2007.'
  }
];

const HistorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="history">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Sejarah Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Perjalanan Panjang Pelayanan di <span className="text-brand-blue">Tanah Papua</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                STT-WPJ berawal dari dibukanya program kuliah jarak jauh STT Jaffray Ujungpandang pada tahun 1986. Pimpinan GKII Irian Jaya pada saat itu, Pendeta Yosia Tebay, S.Th., sebagai Ketua Sinode menyambut baik tindak lanjut dari Konferensi Gereja Kemah Injil di Pyramid yang berlangsung pada 12-17 September 1986.
              </p>
              <p className="mb-4">
                Kegiatan perkuliahan dilakukan pertama kali di Gedung Ibadah Jemaat Baitsheba Abepura. Seiring berjalannya waktu dan kebutuhan yang meningkat, STT-WPJ mengalami beberapa kali perpindahan lokasi hingga akhirnya menetap.
              </p>
              <p>
                Pada tahun akademik 1999/2000, STT-WPJ menempati kompleks lokasi yang sekarang di Sentani, Jayapura. Lokasi tersebut menjadi kampus utama dengan status milik sendiri yang berasal dari hibah The Christian Missionary Alliance (CMA) pada tahun 2003.
              </p>
            </div>

            <button className="text-brand-blue font-bold flex items-center hover:text-brand-gold transition-colors">
              Baca Selengkapnya <ChevronRight size={20} />
            </button>
          </div>

          {/* Timeline / Visual */}
          <div className="lg:w-1/2 w-full bg-brand-light p-8 rounded-2xl border border-gray-100 relative">
            {/* Decorative dots */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-brand-gold/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4">Milestone Penting</h3>
            
            <div className="space-y-8 relative">
              <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
              
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative flex items-start group">
                  <div className="z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-brand-blue text-brand-blue flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    {milestone.year}
                  </div>
                  <div className="ml-6 pt-2">
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-brand-blue transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;