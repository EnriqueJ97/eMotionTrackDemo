
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Flexibilidad() {
  const [horarioActual, setHorarioActual] = useState({
    entrada: '09:00',
    salida: '18:00',
    diasTeletrabajo: ['Lunes', 'Miércoles'],
  });

  const [solicitudNueva, setSolicitudNueva] = useState({
    entrada: '09:00',
    salida: '18:00',
    diasTeletrabajo: [],
    motivo: ''
  });

  const [metricas, setMetricas] = useState({
    horasSemanales: 40,
    horasExtra: 2,
    nivelProductividad: 85,
    equilibrioVidaTrabajo: 75
  });

  const productividadData = [
    { hora: '8:00', nivel: 65 },
    { hora: '10:00', nivel: 90 },
    { hora: '12:00', nivel: 85 },
    { hora: '14:00', nivel: 70 },
    { hora: '16:00', nivel: 80 },
    { hora: '18:00', nivel: 75 }
  ];

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  const handleSolicitud = (e) => {
    e.preventDefault();
    alert('Solicitud enviada para aprobación');
  };

  const toggleDiaTeletrabajo = (dia) => {
    setSolicitudNueva(prev => ({
      ...prev,
      diasTeletrabajo: prev.diasTeletrabajo.includes(dia)
        ? prev.diasTeletrabajo.filter(d => d !== dia)
        : [...prev.diasTeletrabajo, dia]
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Gestión de Flexibilidad Laboral</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Horario Actual */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Mi Horario Actual</h2>
          <div className="space-y-4">
            <div>
              <span className="font-medium">Entrada:</span> {horarioActual.entrada}
            </div>
            <div>
              <span className="font-medium">Salida:</span> {horarioActual.salida}
            </div>
            <div>
              <span className="font-medium">Días de Teletrabajo:</span>
              <div className="flex gap-2 mt-2">
                {horarioActual.diasTeletrabajo.map(dia => (
                  <span key={dia} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {dia}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nueva Solicitud */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Solicitar Cambio de Horario</h2>
          <form onSubmit={handleSolicitud} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Hora de Entrada</label>
              <input
                type="time"
                value={solicitudNueva.entrada}
                onChange={(e) => setSolicitudNueva({...solicitudNueva, entrada: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hora de Salida</label>
              <input
                type="time"
                value={solicitudNueva.salida}
                onChange={(e) => setSolicitudNueva({...solicitudNueva, salida: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Días de Teletrabajo</label>
              <div className="flex flex-wrap gap-2">
                {diasSemana.map(dia => (
                  <button
                    key={dia}
                    type="button"
                    onClick={() => toggleDiaTeletrabajo(dia)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      solicitudNueva.diasTeletrabajo.includes(dia)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {dia}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Motivo</label>
              <textarea
                value={solicitudNueva.motivo}
                onChange={(e) => setSolicitudNueva({...solicitudNueva, motivo: e.target.value})}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>

      {/* Dashboard y Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Mis Métricas</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-700">Horas Semanales</div>
              <div className="text-2xl font-bold">{metricas.horasSemanales}h</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-sm text-yellow-700">Horas Extra</div>
              <div className="text-2xl font-bold">+{metricas.horasExtra}h</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-green-700">Productividad</div>
              <div className="text-2xl font-bold">{metricas.nivelProductividad}%</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-sm text-purple-700">Equilibrio</div>
              <div className="text-2xl font-bold">{metricas.equilibrioVidaTrabajo}%</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Productividad por Hora</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productividadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hora" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="nivel" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
