
import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ImpactoGlobal() {
  const [timeRange, setTimeRange] = useState('6m');
  
  const kpiData = {
    burnoutReduction: 32,
    costSavings: 156000,
    engagementImprovement: 28,
    turnoverReduction: 45,
    productivityIncrease: 18
  };

  const trendData = [
    { month: 'Ene', burnout: 65, engagement: 72, productivity: 85 },
    { month: 'Feb', burnout: 58, engagement: 75, productivity: 88 },
    { month: 'Mar', burnout: 52, engagement: 78, productivity: 90 },
    { month: 'Abr', burnout: 45, engagement: 82, productivity: 92 },
    { month: 'May', burnout: 40, engagement: 85, productivity: 95 },
    { month: 'Jun', burnout: 33, engagement: 88, productivity: 98 }
  ];

  const roiData = [
    { name: 'Ahorro Médico', value: 45000 },
    { name: 'Productividad', value: 65000 },
    { name: 'Retención', value: 46000 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const downloadReport = () => {
    // Implementación futura de generación de PDF
    alert('Descargando informe ejecutivo...');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Panel de Impacto Global</h1>
        <div className="flex gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="6m">Últimos 6 meses</option>
            <option value="1y">Último año</option>
          </select>
          <button
            onClick={downloadReport}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Descargar Informe
          </button>
        </div>
      </div>

      {/* KPIs Principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium mb-4">Reducción de Riesgos</h3>
          <div className="text-3xl font-bold text-green-600">
            -{kpiData.burnoutReduction}%
          </div>
          <p className="text-gray-600">Riesgo de burnout</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium mb-4">Impacto Económico</h3>
          <div className="text-3xl font-bold text-blue-600">
            {kpiData.costSavings.toLocaleString()}€
          </div>
          <p className="text-gray-600">Ahorro generado</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium mb-4">Mejora del Engagement</h3>
          <div className="text-3xl font-bold text-purple-600">
            +{kpiData.engagementImprovement}%
          </div>
          <p className="text-gray-600">Incremento en engagement</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium mb-4">Tendencias Clave</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="burnout" stroke="#ef4444" name="Burnout" />
                <Line type="monotone" dataKey="engagement" stroke="#8b5cf6" name="Engagement" />
                <Line type="monotone" dataKey="productivity" stroke="#10b981" name="Productividad" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium mb-4">ROI por Categoría</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roiData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value.toLocaleString()}€`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {roiData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Proyecciones */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium mb-4">Proyecciones a 12 Meses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-green-700">Ahorro Proyectado</div>
            <div className="text-2xl font-bold">312.000€</div>
            <div className="text-sm text-green-600">+15% vs. actual</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-blue-700">Retención de Talento</div>
            <div className="text-2xl font-bold">92%</div>
            <div className="text-sm text-blue-600">+8% vs. actual</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-purple-700">ROI Proyectado</div>
            <div className="text-2xl font-bold">285%</div>
            <div className="text-sm text-purple-600">+25% vs. actual</div>
          </div>
        </div>
      </div>
    </div>
  );
}
