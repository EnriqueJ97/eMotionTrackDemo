
import React from 'react';
import Link from 'next/link';

export default function PortalManagers() {
  const features = [
    {
      title: 'Control Horario',
      description: 'Supervisa los registros horarios del equipo',
      icon: '⏰',
      href: '/registro-horario-manager',
      color: 'blue'
    },
    {
      title: 'Reporting CSRD',
      description: 'Informes y métricas según normativa ESRS S1',
      icon: '📊',
      href: '/csrd-reporting',
      color: 'green'
    },
    {
      title: 'Simulador de Políticas',
      description: 'Evalúa el impacto de diferentes políticas laborales',
      icon: '🎯',
      href: '/politicas',
      color: 'pink'
    },
    {
      title: 'Portal RRHH',
      description: 'Monitoreo y análisis de indicadores de bienestar',
      icon: '📈',
      href: '/rrhh',
      color: 'purple'
    },
    {
      title: 'Gestión de Guardias',
      description: 'Administra y supervisa las guardias del equipo',
      icon: '📅',
      href: '/guardias-manager',
      color: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            eMotionTrack Managers
          </h1>
          <p className="text-xl text-purple-100">
            Portal para managers y directivos
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
