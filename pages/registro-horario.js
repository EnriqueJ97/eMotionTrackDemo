
import React, { useState, useEffect } from 'react';

export default function RegistroHorario() {
  const [registros, setRegistros] = useState([]);
  const [checkedIn, setCheckedIn] = useState(false);
  const [nivelEnergia, setNivelEnergia] = useState(5);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckIn = () => {
    const newRegistro = {
      tipo: 'entrada',
      timestamp: new Date().toLocaleTimeString(),
      nivelEnergia,
    };
    setRegistros([newRegistro, ...registros]);
    setCheckedIn(true);
  };

  const handleCheckOut = () => {
    const newRegistro = {
      tipo: 'salida',
      timestamp: new Date().toLocaleTimeString(),
      nivelEnergia,
    };
    setRegistros([newRegistro, ...registros]);
    setCheckedIn(false);
  };

  const analizarPatrones = () => {
    if (registros.length < 5) return null;
    
    const horasPromedio = registros
      .filter(r => r.tipo === 'entrada')
      .reduce((acc, curr) => acc + new Date('1970/01/01 ' + curr.timestamp).getHours(), 0) / registros.length;
      
    const energiaPromedio = registros.reduce((acc, curr) => acc + curr.nivelEnergia, 0) / registros.length;
    
    return {
      horasPromedio: horasPromedio.toFixed(1),
      energiaPromedio: energiaPromedio.toFixed(1),
      tendencia: energiaPromedio > 7 ? 'positiva' : energiaPromedio < 5 ? 'negativa' : 'estable'
    };
  };

  const patrones = analizarPatrones();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {patrones && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">📊 Análisis de Patrones</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="font-medium">Hora Promedio Entrada</div>
              <div className="text-2xl font-bold">{patrones.horasPromedio}h</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-medium">Energía Promedio</div>
              <div className="text-2xl font-bold">{patrones.energiaPromedio}/10</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="font-medium">Tendencia</div>
              <div className="text-2xl font-bold">{patrones.tendencia}</div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Registro Horario Digital</h1>
        <p className="text-gray-600">{currentTime}</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <span>🔋 Nivel de Energía:</span>
            <input
              type="range"
              min="1"
              max="10"
              value={nivelEnergia}
              onChange={(e) => setNivelEnergia(parseInt(e.target.value))}
              className="w-48"
            />
            <span className="font-bold">{nivelEnergia}/10</span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleCheckIn}
              disabled={checkedIn}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-white ${
                !checkedIn ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300'
              }`}
            >
              ▶️ Check-In
            </button>
            <button
              onClick={handleCheckOut}
              disabled={!checkedIn}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-white ${
                checkedIn ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-300'
              }`}
            >
              ⏹️ Check-Out
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">📝 Historial de Registros</h2>
        <div className="space-y-2">
          {registros.map((registro, index) => (
            <div key={index} className="flex justify-between p-2 bg-gray-50 rounded">
              <span>{registro.tipo === 'entrada' ? '▶️' : '⏹️'} {registro.tipo}</span>
              <span>🔋 {registro.nivelEnergia}/10</span>
              <span>⏰ {registro.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
