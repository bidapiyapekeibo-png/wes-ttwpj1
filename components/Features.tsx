import React from 'react';
import { GraduationCap, Users, Map, Award } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Pendidikan Berkualitas',
    description: 'Menyelenggarakan pendidikan teologi dan pendidikan agama Kristen yang relevan dengan konteks Papua.',
    icon: <GraduationCap size={40} />,
  },
  {
    id: '2',
    title: 'Dosen Berpengalaman',
    description: 'Dibimbing oleh para pengajar yang berdedikasi dan berpengalaman dalam pelayanan gerejawi.',
    icon: <Users size={40} />,
  },
  {
    id: '3',
    title: 'Lokasi Strategis',
    description: 'Kampus utama di Sentani, Jayapura, lingkungan yang kondusif untuk belajar dan bertumbuh.',
    icon: <Map size={40} />,
  },
  {
    id: '4',
    title: 'Status Diakui',
    description: 'Lembaga pendidikan yang memiliki legalitas dan terus berupaya meningkatkan standar akreditasi.',
    icon: <Award size={40} />,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative -mt-20 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-brand-gold group"
            >
              <div className="mb-6 inline-flex p-4 rounded-full bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;