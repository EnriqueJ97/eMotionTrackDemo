
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function GuardiasManager() {
  const [selectedDepartment, setSelectedDepartment] = useState('todos');
  const [periodo, setPeriodo] = useState('semana');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedGuardia, setSelectedGuardia] = useState(null);

  const empleados = [
    { id: 1, nombre: 'Ana García', departamento: 'Desarrollo', guardias: 5, preferenciasMatch: 80 },
    { id: 2, nombre: 'Carlos López', departamento: 'Desarrollo', guardias: 4, preferenciasMatch: 75 },
    { id: 3, nombre: 'María Sánchez', departamento: 'Marketing', guardias: 3, preferenciasMatch: 90 },
  ];

  const guardiasPendientes = [
    { id: 1, fecha: '2024-02-15', turno: 'Noche', departamento: 'Desarrollo', solicitante: 'Ana García', motivo: 'Cambio por asuntos personales' },
    { id: 2, fecha: '2024-02-16', turno: 'Tarde', departamento: 'Marketing', solicitante: 'Carlos López', motivo: 'Solicitud de permuta' },
  ];

  const recomendacionesIA = [
    { empleado: 'María Sánchez', turno: 'Mañana', fecha: '2024-02-15', score: 95, motivo: 'Alta compatibilidad con preferencias y bajo número de guardias previas' },
    { empleado: 'Carlos López', turno: 'Tarde', fecha: '2024-02-16', score: 88, motivo: 'Buen equilibrio en carga de trabajo' },
  ];

  const dataEquidad = [
    { nombre: 'Ana García', guardias: 5 },
    { nombre: 'Carlos López', guardias: 4 },
    { nombre: 'María Sánchez', guardias: 3 },
  ];

  const dataSatisfaccion = [
    { mes: 'Ene', satisfaccion: 85 },
    { mes: 'Feb', satisfaccion: 88 },
    { mes: 'Mar', satisfaccion: 82 },
    { mes: 'Abr', satisfaccion: 90 },
  ];

  const handleApproveGuardia = (id) => {
    // Implementar lógica de aprobación
    console.log('Aprobando guardia:', id);
  };

  const handleRejectGuardia = (id) => {
    // Implementar lógica de rechazo
    console.log('Rechazando guardia:', id);
  };

  const handleAssignGuardia = (guardia) => {
    setSelectedGuardia(guardia);
    setShowAssignModal(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard de Gestión de Guardias</h1>
        
        <div className="flex gap-4">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="todos">Todos los departamentos</option>
            <option value="desarrollo">Desarrollo</option>
            <option value="marketing">Marketing</option>
          </select>

          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="semana">Esta semana</option>
            <option value="mes">Este mes</option>
            <option value="trimestre">Este trimestre</option>
          </select>
        </div>
      </div>

      {/* Guardias Pendientes de Aprobación */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Guardias Pendientes de Aprobación</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Turno</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Departamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Solicitante</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Motivo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {guardiasPendientes.map((guardia) => (
                <tr key={guardia.id} className="border-b">
                  <td className="px-6 py-4">{guardia.fecha}</td>
                  <td className="px-6 py-4">{guardia.turno}</td>
                  <td className="px-6 py-4">{guardia.departamento}</td>
                  <td className="px-6 py-4">{guardia.solicitante}</td>
                  <td className="px-6 py-4">{guardia.motivo}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleApproveGuardia(guardia.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Aprobar
                    </button>
                    <button
                      onClick={() => handleRejectGuardia(guardia.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
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

      {/* Recomendador de Turnos */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Recomendador de Turnos Óptimos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Empleado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Turno</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Motivo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acción</th>
              </tr>
            </thead>
            <tbody>
              {recomendacionesIA.map((recomendacion, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{recomendacion.empleado}</td>
                  <td className="px-6 py-4">{recomendacion.turno}</td>
                  <td className="px-6 py-4">{recomendacion.fecha}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: `${recomendacion.score}%` }}
                        />
                      </div>
                      <span className="ml-2">{recomendacion.score}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{recomendacion.motivo}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleAssignGuardia(recomendacion)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Asignar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* KPIs */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Indicadores Clave</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-blue-700 text-sm">Cobertura Total</div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-blue-600">↑ 2% vs mes anterior</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-green-700 text-sm">Satisfacción</div>
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm text-green-600">↑ 5% vs mes anterior</div>
            </div>
          </div>
        </div>

        {/* Gráfico de Equidad */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Distribución de Guardias</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataEquidad}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nombre" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="guardias" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lista de Empleados */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Empleados y Guardias</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Empleado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Departamento
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guardias Asignadas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Match Preferencias
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {empleados.map((empleado) => (
                  <tr key={empleado.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {empleado.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {empleado.departamento}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {empleado.guardias}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${empleado.preferenciasMatch}%` }}
                          />
                        </div>
                        <span className="ml-2">{empleado.preferenciasMatch}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal de Asignación Manual */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">Asignar Guardia</h3>
            <p>Confirmar asignación de guardia para {selectedGuardia?.empleado}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowAssignModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  // Implementar lógica de asignación
                  setShowAssignModal(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
