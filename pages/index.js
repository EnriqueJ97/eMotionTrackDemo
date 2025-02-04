import React from 'react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido a eMotionTrack
        </h1>
        <p className="text-xl text-gray-600">
          Plataforma integral de bienestar laboral y prevención del burnout
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Portal Empleado */}
        <a 
          href="/empleado" 
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Portal Empleado</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Registro de entrada y salida</li>
            <li>✓ Medición de nivel de energía</li>
            <li>✓ Pulsos emocionales diarios</li>
            <li>✓ Seguimiento de bienestar</li>
          </ul>
        </a>

        {/* Portal RRHH */}
        <a 
          href="/rrhh" 
          className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-4">Portal RRHH</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Dashboard analítico</li>
            <li>✓ Monitoreo de equipos</li>
            <li>✓ Alertas de burnout</li>
            <li>✓ Reportes y tendencias</li>
          </ul>
        </a>
      </div>

      {/* Estadísticas Demo */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-blue-600 text-sm">Empleados Activos</div>
          <div className="text-2xl font-bold">2,547</div>
          <div className="text-sm text-blue-600">↑ 12% este mes</div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="text-green-600 text-sm">Satisfacción Media</div>
          <div className="text-2xl font-bold">85%</div>
          <div className="text-sm text-green-600">↑ 5% vs mes anterior</div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="text-yellow-600 text-sm">Alertas Activas</div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-sm text-yellow-600">↓ 3 desde ayer</div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="text-purple-600 text-sm">ROI Promedio</div>
          <div className="text-2xl font-bold">280%</div>
          <div className="text-sm text-purple-600">↑ 15% este trimestre</div>
        </div>
      </div>
    </div>
  );
}