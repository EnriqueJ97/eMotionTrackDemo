
import React, { useState } from 'react';

export default function RegistroHorarioManager() {
  const [selectedDepartment, setSelectedDepartment] = useState('todos');
  const [dateRange, setDateRange] = useState('hoy');
  
  // Simulated data - in a real app this would come from an API
  const registros = [
    {
      empleado: "Ana García",
      departamento: "Desarrollo",
      entrada: "09:00",
      salida: "18:00",
      horasTotales: "9",
      nivelEnergia: 8
    },
    {
      empleado: "Carlos López",
      departamento: "Marketing",
      entrada: "08:30",
      salida: "17:30",
      horasTotales: "9",
      nivelEnergia: 7
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Control de Registro Horario</h1>
        
        <div className="flex gap-4 mb-6">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="todos">Todos los departamentos</option>
            <option value="desarrollo">Desarrollo</option>
            <option value="marketing">Marketing</option>
            <option value="ventas">Ventas</option>
          </select>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="hoy">Hoy</option>
            <option value="semana">Esta semana</option>
            <option value="mes">Este mes</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b-2">
              <th className="text-left p-2">Empleado</th>
              <th className="text-left p-2">Departamento</th>
              <th className="text-left p-2">Entrada</th>
              <th className="text-left p-2">Salida</th>
              <th className="text-left p-2">Horas</th>
              <th className="text-left p-2">Energía</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2">{registro.empleado}</td>
                <td className="p-2">{registro.departamento}</td>
                <td className="p-2">{registro.entrada}</td>
                <td className="p-2">{registro.salida}</td>
                <td className="p-2">{registro.horasTotales}h</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <span>🔋</span>
                    <span>{registro.nivelEnergia}/10</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
