
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function CSRDReporting() {
  const [activeTab, setActiveTab] = useState('condiciones');
  const [selectedYear, setSelectedYear] = useState('2024');
  
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
    ],
    jornada: [
      { name: 'Completa', value: 80 },
      { name: 'Parcial', value: 20 },
    ]
  };

  const datosDiversidad = {
    brechaSalarial: -15.5,
    representacionMinorias: 18,
    promocionesEquitativas: 85,
    incidentes: 2,
    acciones: 12
  };

  const datosDerechos = {
    sindicalizacion: 45,
    evaluacionProveedores: 92,
    incidentesLaborales: 3,
    medidasPreventivas: 15
  };

  const datosFormacion = {
    horasFormacion: [
      { mes: 'Ene', horas: 180 },
      { mes: 'Feb', horas: 220 },
      { mes: 'Mar', horas: 250 },
      { mes: 'Abr', horas: 190 },
    ],
    inversionCapacitacion: 150000,
    empleadosFormados: 85,
    programasActivos: 12
  };

  const datosSalud = {
    accidentes: 5,
    diasPerdidos: 45,
    tasaAbsentismo: 2.3,
    inversionPrevencion: 75000
  };

  const renderContenido = () => {
    switch(activeTab) {
      case 'condiciones':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
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

              <div className="bg-white p-6 rounded-lg shadow">
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

              <div className="bg-white p-6 rounded-lg shadow col-span-2">
                <h3 className="text-lg font-bold mb-4">Tipo de Jornada</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={datosPlantilla.jornada}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, value}) => `${name}: ${value}%`}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {datosPlantilla.jornada.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'diversidad':
        return (
          <div className="space-y-6">
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

              <div className="bg-white p-6 rounded-lg shadow col-span-3">
                <h3 className="text-lg font-bold mb-4">Incidentes y Acciones</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Incidentes Reportados</p>
                    <p className="text-2xl font-bold">{datosDiversidad.incidentes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Acciones Correctivas</p>
                    <p className="text-2xl font-bold">{datosDiversidad.acciones}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'derechos':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-2">Sindicalización</h3>
                <p className="text-3xl font-bold text-blue-600">{datosDerechos.sindicalizacion}%</p>
                <p className="text-sm text-gray-600">empleados sindicalizados</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-2">Evaluación Proveedores</h3>
                <p className="text-3xl font-bold text-green-600">{datosDerechos.evaluacionProveedores}%</p>
                <p className="text-sm text-gray-600">proveedores evaluados</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow col-span-2">
                <h3 className="text-lg font-bold mb-4">Incidentes y Medidas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Incidentes Laborales</p>
                    <p className="text-2xl font-bold">{datosDerechos.incidentesLaborales}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Medidas Preventivas</p>
                    <p className="text-2xl font-bold">{datosDerechos.medidasPreventivas}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'formacion':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-4">Evolución Horas Formación</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={datosFormacion.horasFormacion}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="horas" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-2">Inversión en Formación</h3>
                <p className="text-3xl font-bold text-blue-600">€{datosFormacion.inversionCapacitacion.toLocaleString()}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-2">Empleados Formados</h3>
                <p className="text-3xl font-bold text-green-600">{datosFormacion.empleadosFormados}%</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-2">Programas Activos</h3>
                <p className="text-3xl font-bold text-purple-600">{datosFormacion.programasActivos}</p>
              </div>
            </div>
          </div>
        );

      case 'salud':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Accidentes Laborales</h3>
              <p className="text-3xl font-bold text-red-600">{datosSalud.accidentes}</p>
              <p className="text-sm text-gray-600">último año</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Días Perdidos</h3>
              <p className="text-3xl font-bold text-orange-600">{datosSalud.diasPerdidos}</p>
              <p className="text-sm text-gray-600">por accidentes</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Tasa Absentismo</h3>
              <p className="text-3xl font-bold text-yellow-600">{datosSalud.tasaAbsentismo}%</p>
              <p className="text-sm text-gray-600">promedio anual</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Inversión en Prevención</h3>
              <p className="text-3xl font-bold text-green-600">€{datosSalud.inversionPrevencion.toLocaleString()}</p>
              <p className="text-sm text-gray-600">anual</p>
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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Reporting Social CSRD</h1>
            <p className="text-gray-600">Monitorización y reporting de indicadores sociales según ESRS S1</p>
          </div>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
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
        <button
          onClick={() => setActiveTab('derechos')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'derechos' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Derechos Laborales
        </button>
        <button
          onClick={() => setActiveTab('formacion')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'formacion' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Desarrollo Profesional
        </button>
        <button
          onClick={() => setActiveTab('salud')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'salud' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Salud y Seguridad
        </button>
      </div>

      {renderContenido()}

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-800 mb-4">Estado de Cumplimiento ESRS S1</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Cumplimiento General</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">Próximas Acciones</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Actualizar política de diversidad</li>
                <li>Revisar programa de formación</li>
                <li>Ampliar evaluación de proveedores</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium mb-2">Documentación Pendiente</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Informe de impacto social</li>
                <li>Certificación de proveedores</li>
                <li>Auditoría de igualdad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
