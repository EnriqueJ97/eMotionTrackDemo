import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardRRHH = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('todos');
  const [timeRange, setTimeRange] = useState('semana');

  // Datos simulados para la demo
  const departamentos = ['Desarrollo', 'Marketing', 'Ventas', 'Recursos Humanos'];

  const datosSimulados = {
    tendencias: [
      { fecha: 'Lun', estres: 6, cargaTrabajo: 7, motivacion: 6, productividad: 85 },
      { fecha: 'Mar', estres: 5, cargaTrabajo: 6, motivacion: 7, productividad: 88 },
      { fecha: 'Mie', estres: 7, cargaTrabajo: 8, motivacion: 5, productividad: 82 },
      { fecha: 'Jue', estres: 8, cargaTrabajo: 8, motivacion: 4, productividad: 78 },
      { fecha: 'Vie', estres: 7, cargaTrabajo: 7, motivacion: 5, productividad: 80 },
    ],
    riesgos: [
      { departamento: 'Desarrollo', riesgo: 75 },
      { departamento: 'Marketing', riesgo: 45 },
      { departamento: 'Ventas', riesgo: 60 },
      { departamento: 'Recursos Humanos', riesgo: 30 },
    ],
    predicciones: {
      rotacion: { actual: 15, predicho: 18, tendencia: 'up' },
      burnout: { actual: 25, predicho: 22, tendencia: 'down' },
      engagement: { actual: 72, predicho: 75, tendencia: 'up' }
    },
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Dashboard de Bienestar Organizacional</h2>

        {/* Filtros */}
        <div className="flex gap-4 mb-6">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="todos">Todos los departamentos</option>
            {departamentos.map(dep => (
              <option key={dep} value={dep}>{dep}</option>
            ))}
          </select>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="semana">Última semana</option>
            <option value="mes">Último mes</option>
            <option value="trimestre">Último trimestre</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* KPIs Principales */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Indicadores Clave</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="text-red-700 text-sm">Riesgo Alto de Burnout</div>
              <div className="text-2xl font-bold">23%</div>
              <div className="text-sm text-red-600">↑ 5% vs mes anterior</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-green-700 text-sm">Satisfacción Laboral</div>
              <div className="text-2xl font-bold">72%</div>
              <div className="text-sm text-green-600">↑ 3% vs mes anterior</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-yellow-700 text-sm">Carga de Trabajo Alta</div>
              <div className="text-2xl font-bold">35%</div>
              <div className="text-sm text-yellow-600">→ Sin cambios</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-blue-700 text-sm">Engagement</div>
              <div className="text-2xl font-bold">68%</div>
              <div className="text-sm text-blue-600">↑ 2% vs mes anterior</div>
            </div>
          </div>
        </div>

        {/* Riesgo por Departamento */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Riesgo de Burnout por Departamento</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datosSimulados.riesgos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="departamento" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="riesgo" fill="#ef4444" name="Riesgo %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tendencias */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
          <h3 className="text-lg font-bold mb-4">Tendencias de Bienestar</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={datosSimulados.tendencias}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="estres" stroke="#ef4444" name="Estrés" />
                <Line type="monotone" dataKey="cargaTrabajo" stroke="#f59e0b" name="Carga" />
                <Line type="monotone" dataKey="motivacion" stroke="#10b981" name="Motivación" />
                <Line type="monotone" dataKey="productividad" stroke="#3b82f6" name="Productividad" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Predicciones */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
          <h3 className="text-lg font-bold mb-4">Predicciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(datosSimulados.predicciones).map(([key, value]) => (
              <div key={key} className={`p-4 bg-${value.tendencia === 'up' ? 'green' : value.tendencia === 'down' ? 'red' : 'yellow'}-50 rounded-lg`}>
                <div className={`text-${value.tendencia === 'up' ? 'green' : value.tendencia === 'down' ? 'red' : 'yellow'}-700 text-sm`}>{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                <div className="text-2xl font-bold">Actual: {value.actual}%  Predicción: {value.predicho}%</div>
                <div className={`text-sm text-${value.tendencia === 'up' ? 'green' : value.tendencia === 'down' ? 'red' : 'yellow'}-600`}>{value.tendencia === 'up' ? '↑' : value.tendencia === 'down' ? '↓' : '→'}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Alertas y Recomendaciones */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
          <h3 className="text-lg font-bold mb-4">Alertas y Recomendaciones</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg flex items-start">
              <div className="text-red-600 mr-3">⚠️</div>
              <div>
                <div className="font-medium text-red-700">Alerta: Alto riesgo en equipo de Desarrollo</div>
                <p className="text-sm text-red-600">75% del equipo muestra señales de sobrecarga. Recomendación: Revisar distribución de tareas y considerar pausas activas.</p>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg flex items-start">
              <div className="text-yellow-600 mr-3">⚡</div>
              <div>
                <div className="font-medium text-yellow-700">Precaución: Incremento de estrés en Marketing</div>
                <p className="text-sm text-yellow-600">Tendencia al alza en últimas 2 semanas. Recomendación: Programar sesión de feedback con el equipo.</p>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg flex items-start">
              <div className="text-green-600 mr-3">✨</div>
              <div>
                <div className="font-medium text-green-700">Mejora: Recursos Humanos muestra progreso</div>
                <p className="text-sm text-green-600">Reducción del 15% en niveles de estrés. Continuar con las prácticas actuales de gestión.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRRHH;