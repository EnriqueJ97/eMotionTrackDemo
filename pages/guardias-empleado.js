
import React, { useState } from 'react';

export default function GuardiasEmpleado() {
  const [preferencias, setPreferencias] = useState({
    turnoPreferido: 'mañana',
    diasPreferidos: [],
    restricciones: ''
  });
  const [misGuardias, setMisGuardias] = useState([
    { fecha: '2024-02-20', turno: 'Mañana', estado: 'Confirmada' },
    { fecha: '2024-02-22', turno: 'Tarde', estado: 'Pendiente' }
  ]);

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const turnos = ['mañana', 'tarde', 'noche'];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Gestión de Guardias - Portal Empleado</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Preferencias */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Mis Preferencias</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Turno Preferido</label>
              <select 
                className="w-full p-2 border rounded"
                value={preferencias.turnoPreferido}
                onChange={(e) => setPreferencias({...preferencias, turnoPreferido: e.target.value})}
              >
                {turnos.map(turno => (
                  <option key={turno} value={turno}>{turno.charAt(0).toUpperCase() + turno.slice(1)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Días Preferidos</label>
              <div className="grid grid-cols-2 gap-2">
                {diasSemana.map(dia => (
                  <label key={dia} className="flex items-center space-x-2">
                    <input 
                      type="checkbox"
                      checked={preferencias.diasPreferidos.includes(dia)}
                      onChange={(e) => {
                        const nuevosPreferidos = e.target.checked 
                          ? [...preferencias.diasPreferidos, dia]
                          : preferencias.diasPreferidos.filter(d => d !== dia);
                        setPreferencias({...preferencias, diasPreferidos: nuevosPreferidos});
                      }}
                      className="rounded text-blue-600"
                    />
                    <span>{dia}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Restricciones</label>
              <textarea
                className="w-full p-2 border rounded"
                value={preferencias.restricciones}
                onChange={(e) => setPreferencias({...preferencias, restricciones: e.target.value})}
                placeholder="Indica cualquier restricción específica..."
                rows="3"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Guardar Preferencias
            </button>
          </div>
        </div>

        {/* Mis Guardias */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Mis Guardias Asignadas</h2>
          
          <div className="space-y-3">
            {misGuardias.map((guardia, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">{guardia.fecha}</div>
                  <div className="text-sm text-gray-600">{guardia.turno}</div>
                </div>
                <div>
                  <span className={`px-2 py-1 rounded text-sm ${
                    guardia.estado === 'Confirmada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {guardia.estado}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
            Solicitar Cambio de Guardia
          </button>
        </div>
      </div>
    </div>
  );
}
