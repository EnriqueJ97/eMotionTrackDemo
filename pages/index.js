
import React, { useState, useEffect } from 'react';

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-lg p-4 ${className}`}>{children}</div>
);

const Button = ({ children, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-lg font-medium text-white ${className}`}
  >
    {children}
  </button>
);

export default function Home() {
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

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Registro Horario Digital</h1>
        <p className="text-gray-600">{currentTime}</p>
      </div>

      <Card className="bg-white">
        <div className="mb-4">
          <h2 className="text-xl font-bold">⏰ Registro de Jornada</h2>
        </div>
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
            <Button
              onClick={handleCheckIn}
              disabled={checkedIn}
              className={`flex-1 ${
                !checkedIn ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300'
              }`}
            >
              ▶️ Check-In
            </Button>
            <Button
              onClick={handleCheckOut}
              disabled={!checkedIn}
              className={`flex-1 ${
                checkedIn ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-300'
              }`}
            >
              ⏹️ Check-Out
            </Button>
          </div>
        </div>
      </Card>

      <Card className="bg-white">
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
      </Card>
    </div>
  );
}
