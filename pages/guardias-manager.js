
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function GuardiasManager() {
  const [selectedDepartment, setSelectedDepartment] = useState('todos');
  const [periodo, setPeriodo] = useState('semana');

  const empleados = [
    { id: 1, nombre: 'Ana García', departamento: 'Desarrollo', guardias: 5, preferenciasMatch: 80 },
    { id: 2, nombre: 'Carlos López', departamento: 'Desarrollo', guardias: 4, preferenciasMatch: 75 },
    { id: 3, nombre: 'María Sánchez', departamento: 'Marketing', guardias: 3, preferenciasMatch: 90 },
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
    </div>
  );
}
