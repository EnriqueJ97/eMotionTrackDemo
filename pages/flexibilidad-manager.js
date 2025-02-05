
import React, { useState } from 'react';

export default function FlexibilidadManager() {
  const [selectedDepartment, setSelectedDepartment] = useState('todos');
  const [solicitudesPendientes] = useState([
    {
      id: 1,
      empleado: 'Ana García',
      departamento: 'Desarrollo',
      entradaActual: '09:00',
      salidaActual: '18:00',
      entradaSolicitada: '08:00',
      salidaSolicitada: '17:00',
      diasTeletrabajo: ['Lunes', 'Miércoles'],
      motivo: 'Conciliación familiar',
      fecha: '2024-02-15'
    },
    {
      id: 2,
      empleado: 'Carlos López',
      departamento: 'Marketing',
      entradaActual: '09:00',
      salidaActual: '18:00',
      entradaSolicitada: '10:00',
      salidaSolicitada: '19:00',
      diasTeletrabajo: ['Martes', 'Jueves'],
      motivo: 'Optimización de productividad',
      fecha: '2024-02-14'
    }
  ]);

  const handleApprove = (id) => {
    // Implementar lógica de aprobación
    console.log('Aprobando solicitud:', id);
  };

  const handleReject = (id) => {
    // Implementar lógica de rechazo
    console.log('Rechazando solicitud:', id);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Gestión de Solicitudes de Flexibilidad</h1>

      <div className="mb-6">
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="todos">Todos los departamentos</option>
          <option value="desarrollo">Desarrollo</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>

      {/* Solicitudes Pendientes */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Solicitudes Pendientes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Empleado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Departamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Horario Actual</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Horario Solicitado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Días Teletrabajo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Motivo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {solicitudesPendientes.map((solicitud) => (
                <tr key={solicitud.id} className="border-b">
                  <td className="px-6 py-4">{solicitud.empleado}</td>
                  <td className="px-6 py-4">{solicitud.departamento}</td>
                  <td className="px-6 py-4">{solicitud.entradaActual} - {solicitud.salidaActual}</td>
                  <td className="px-6 py-4">{solicitud.entradaSolicitada} - {solicitud.salidaSolicitada}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1 flex-wrap">
                      {solicitud.diasTeletrabajo.map(dia => (
                        <span key={dia} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {dia}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">{solicitud.motivo}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleApprove(solicitud.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2 text-sm"
                    >
                      Aprobar
                    </button>
                    <button
                      onClick={() => handleReject(solicitud.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Rechazar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Métricas de Flexibilidad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold mb-4">Solicitudes</h3>
          <div className="text-2xl font-bold">24</div>
          <div className="text-sm text-gray-500">Último mes</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold mb-4">Tasa de Aprobación</h3>
          <div className="text-2xl font-bold">85%</div>
          <div className="text-sm text-gray-500">+5% vs mes anterior</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold mb-4">Satisfacción</h3>
          <div className="text-2xl font-bold">92%</div>
          <div className="text-sm text-gray-500">+3% vs mes anterior</div>
        </div>
      </div>
    </div>
  );
}
