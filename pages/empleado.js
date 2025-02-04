import React, { useState } from 'react';

const PulsosEmpleado = () => {
  const [pulsoActual, setPulsoActual] = useState({
    estres: 5,
    cargaTrabajo: 5,
    motivacion: 5,
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [comentario, setComentario] = useState('');

  const enviarPulso = () => {
    // Aquí iría la lógica para enviar al backend
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">¿Cómo te sientes hoy?</h2>
        <p className="text-gray-600">Tu bienestar es importante para nosotros</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Nivel de Estrés */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">¿Cuál es tu nivel de estrés?</label>
          <input
            type="range"
            min="1"
            max="10"
            value={pulsoActual.estres}
            onChange={(e) => setPulsoActual({...pulsoActual, estres: parseInt(e.target.value)})}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>😌 Muy relajado</span>
            <span className="font-bold">{pulsoActual.estres}/10</span>
            <span>😰 Muy estresado</span>
          </div>
        </div>

        {/* Carga de Trabajo */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">¿Cómo sientes tu carga de trabajo?</label>
          <input
            type="range"
            min="1"
            max="10"
            value={pulsoActual.cargaTrabajo}
            onChange={(e) => setPulsoActual({...pulsoActual, cargaTrabajo: parseInt(e.target.value)})}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>🌅 Tranquila</span>
            <span className="font-bold">{pulsoActual.cargaTrabajo}/10</span>
            <span>🏃 Sobrecargada</span>
          </div>
        </div>

        {/* Motivación */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">¿Qué tan motivado te sientes?</label>
          <input
            type="range"
            min="1"
            max="10"
            value={pulsoActual.motivacion}
            onChange={(e) => setPulsoActual({...pulsoActual, motivacion: parseInt(e.target.value)})}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>😕 Desmotivado</span>
            <span className="font-bold">{pulsoActual.motivacion}/10</span>
            <span>💪 Muy motivado</span>
          </div>
        </div>

        {/* Comentario opcional */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">¿Algo que quieras compartir? (opcional)</label>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows="3"
            placeholder="Comparte tus pensamientos..."
          ></textarea>
        </div>

        <button
          onClick={enviarPulso}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Enviar Pulso Emocional
        </button>

        {showFeedback && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            ¡Gracias por compartir! Tu bienestar es nuestra prioridad.
          </div>
        )}
      </div>
    </div>
  );
};

export default PulsosEmpleado;