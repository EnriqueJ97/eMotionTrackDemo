// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD7ZGee6yqTPIpYJrZDWWeaLwfUcWxPBYw",
  authDomain: "emotiontrack-4e8c1.firebaseapp.com",
  projectId: "emotiontrack-4e8c1",
  storageBucket: "emotiontrack-4e8c1.firebasestorage.app",
  messagingSenderId: "883417546925",
  appId: "1:883417546925:web:0f272f022016004d0e4624",
  measurementId: "G-L0CC0W4TCR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Función para guardar datos
async function saveEmployeeData(data) {
  try {
    await db.collection('employeeData').add({
      ...data,
      timestamp: new Date()
    });
    console.log('Datos guardados correctamente');
  } catch (error) {
    console.error('Error guardando datos:', error);
  }
}

// Función para obtener datos
async function getEmployeeData() {
  try {
    const snapshot = await db.collection('employeeData')
      .orderBy('timestamp', 'desc')
      .limit(10)
      .get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error obteniendo datos:', error);
    return [];
  }
}import React, { useState, useEffect } from 'react';

// Componentes básicos
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

const RegistroHorario = () => {
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
      timestamp: new Date().toISOString(),
      nivelEnergia,
    };
    setRegistros([newRegistro, ...registros]);
    setCheckedIn(true);
  };

  const handleCheckOut = () => {
    const newRegistro = {
      tipo: 'salida',
      timestamp: new Date().toISOString(),
      nivelEnergia,
    };
    setRegistros([newRegistro, ...registros]);
    setCheckedIn(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Registro Horario Digital</h1>
        <p className="text-gray-600">{currentTime}</p>
      </div>

      {/* Tarjeta de Registro */}
      <Card className="bg-white">
        <div className="mb-4">
          <h2 className="text-xl font-bold">⏰ Registro de Jornada</h2>
        </div>
        <div className="space-y-4">
          {/* Control de Nivel de Energía */}
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

          {/* Botones de Check */}
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

      {/* Historial de Registros */}
      <Card className="bg-white">
        <div className="mb-4">
          <h2 className="text-xl font-bold">📋 Historial de Registros</h2>
        </div>
        <div className="space-y-4">
          {registros.map((registro, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span className="font-medium">
                  {new Date(registro.timestamp).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    registro.tipo === 'entrada' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {registro.tipo === 'entrada' ? '▶️ Entrada' : '⏹️ Salida'}
                </span>
                <span className="flex items-center gap-1">
                  🔋 {registro.nivelEnergia}/10
                </span>
              </div>
            </div>
          ))}
          {registros.length === 0 && (
            <p className="text-center text-gray-500">
              No hay registros disponibles
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RegistroHorario;

