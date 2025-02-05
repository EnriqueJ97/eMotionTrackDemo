
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Registro Horario',
      description: 'Gestiona tus entradas, salidas y nivel de energía diario',
      icon: '⏰',
      href: '/registro-horario',
      color: 'blue'
    },
    {
      title: 'Gestión de Guardias',
      description: 'Organiza tus preferencias y visualiza tus guardias asignadas',
      icon: '📅',
      href: '/guardias-empleado',
      color: 'indigo'
    },
    {
      title: 'Portal Empleado',
      description: 'Accede a tus pulsos emocionales y bienestar laboral',
      icon: '👤',
      href: '/empleado',
      color: 'green'
    },
    {
      title: 'Portal RRHH',
      description: 'Monitoreo y análisis de indicadores de bienestar',
      icon: '📊',
      href: '/rrhh',
      color: 'purple'
    },
    {
      title: 'Reporting CSRD',
      description: 'Informes y métricas según normativa ESRS S1',
      icon: '📑',
      href: '/csrd-reporting',
      color: 'indigo'
    },
    {
      title: 'Simulador de Políticas',
      description: 'Evalúa el impacto de diferentes políticas laborales',
      icon: '🎯',
      href: '/politicas',
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a eMotionTrack
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Tu plataforma integral para el bienestar laboral y la gestión del capital humano
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
