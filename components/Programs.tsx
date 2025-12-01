import React from 'react';
import { Book, HeartHandshake, GraduationCap, School } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "S1 Teologi (S.Th)",
      desc: "Membentuk teolog yang mampu menafsirkan Alkitab dengan benar dan berteologi dalam konteks.",
      icon: <Book size={32} />,
      color: "bg-blue-100 text-brand-blue",
      link: "/prodi/s1-teologi"
    },
    {
      title: "S1 Pendidikan Agama Kristen",
      desc: "Menghasilkan pendidik Kristen yang profesional, kreatif, dan mampu mengajar di sekolah maupun gereja.",
      icon: <HeartHandshake size={32} />,
      color: "bg-orange-100 text-orange-600",
      link: "/prodi/s1-pak"
    },
    {
      title: "S2 Magister Teologi (M.Th)",
      desc: "Program lanjutan untuk pendalaman teologi dan kepemimpinan Kristen yang strategis.",
      icon: <GraduationCap size={32} />,
      color: "bg-green-100 text-green-700",
      link: "/prodi/s2-teologi"
    },
    {
      title: "S2 Magister PAK (M.Pd)",
      desc: "Mengembangkan keahlian dalam pedagogi Kristen tingkat lanjut dan manajemen pendidikan.",
      icon: <School size={32} />,
      color: "bg-purple-100 text-purple-700",
      link: "/prodi/s2-pak"
    }
  ];

  return (
    <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">Akademik</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Program Pendidikan</h2>
          <p className="text-blue-100 text-lg">
            STT-WPJ menyelenggarakan program Sarjana (S1) dan Pascasarjana (S2) untuk memperlengkapi pelayan Tuhan yang kompeten dan berkarakter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white text-gray-900 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 shadow-2xl flex flex-col items-start">
              <div className={`w-16 h-16 ${prog.color} rounded-xl flex items-center justify-center mb-6`}>
                {prog.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{prog.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {prog.desc}
              </p>
              <Link to={prog.link} className="w-full py-3 border-2 border-brand-blue text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition-colors text-center">
                Info Kurikulum
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;