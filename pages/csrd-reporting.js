
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function CSRDReporting() {
  const [activeTab, setActiveTab] = useState('condiciones');
  
  // Datos de ejemplo - en producción vendrían de una API/BD
  const datosPlantilla = {
    contratos: [
      { name: 'Indefinido', value: 65 },
      { name: 'Temporal', value: 25 },
      { name: 'Prácticas', value: 10 },
    ],
    genero: [
      { name: 'Mujeres', value: 48 },
      { name: 'Hombres', value: 52 },
    ],
    edad: [
      { categoria: '18-30', valor: 20 },
      { categoria: '31-45', valor: 45 },
      { categoria: '46-60', valor: 30 },
      { categoria: '>60', valor: 5 },
    ]
  };

  const datosDiversidad = {
    brechaSalarial: -15.5,
    representacionMinorias: 18,
    promocionesEquitativas: 85
  };

  const datosFormacion = {
    horasFormacion: 2500,
    inversionCapacitacion: 150000,
    empleadosFormados: 85
  };

  const renderContenido = () => {
    switch(activeTab) {
      case 'condiciones':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-4">Distribución por Tipo de Contrato</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={datosPlantilla.contratos}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({name, value}) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {datosPlantilla.contratos.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-4">Distribución por Edad</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={datosPlantilla.edad}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="categoria" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valor" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
      
      case 'diversidad':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Brecha Salarial</h3>
              <p className="text-3xl font-bold text-red-600">{datosDiversidad.brechaSalarial}%</p>
              <p className="text-sm text-gray-600">vs. año anterior</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Representación Minorías</h3>
              <p className="text-3xl font-bold text-blue-600">{datosDiversidad.representacionMinorias}%</p>
              <p className="text-sm text-gray-600">del total plantilla</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Promociones Equitativas</h3>
              <p className="text-3xl font-bold text-green-600">{datosDiversidad.promocionesEquitativas}%</p>
              <p className="text-sm text-gray-600">índice de equidad</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Reporting Social CSRD</h1>
        <p className="text-gray-600">Monitorización y reporting de indicadores sociales según ESRS S1</p>
      </div>

      <div className="mb-6 flex space-x-2">
        <button
          onClick={() => setActiveTab('condiciones')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'condiciones' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Condiciones de Trabajo
        </button>
        <button
          onClick={() => setActiveTab('diversidad')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'diversidad' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Diversidad e Inclusión
        </button>
      </div>

      {renderContenido()}

      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-blue-800 mb-2">Cumplimiento ESRS S1</h3>
        <div className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <span className="ml-4 font-bold">85%</span>
        </div>
      </div>
    </div>
  );
}
