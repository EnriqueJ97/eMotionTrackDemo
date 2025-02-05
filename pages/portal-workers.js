
import React from 'react';
import Link from 'next/link';

export default function PortalWorkers() {
  const features = [
    {
      title: 'Registro Horario',
      description: 'Gestiona tus entradas, salidas y nivel de energía diario',
      icon: '⏰',
      href: '/registro-horario',
      color: 'blue'
    },
    {
      title: 'Portal Empleado',
      description: 'Accede a tus pulsos emocionales y bienestar laboral',
      icon: '👤',
      href: '/empleado',
      color: 'green'
    },
    {
      title: 'Gestión de Guardias',
      description: 'Gestiona tus preferencias y visualiza tus guardias asignadas',
      icon: '📅',
      href: '/guardias-empleado',
      color: 'purple'
    },
    {
      title: 'Flexibilidad Laboral',
      description: 'Gestiona tus horarios flexibles y equilibrio vida-trabajo',
      icon: '🎯',
      href: '/flexibilidad',
      color: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            eMotionTrack Workers
          </h1>
          <p className="text-xl text-blue-100">
            Portal para empleados
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link 
              href={feature.href} 
              key={feature.title}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-${feature.color}-500`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
