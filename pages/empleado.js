import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PulsosEmpleado = () => {
  const [pulsoActual, setPulsoActual] = useState({
    estres: 5,
    cargaTrabajo: 5,
    motivacion: 5,
    energia: 5
  });
  const [historicoPulsos] = useState([
    { fecha: '1 Ene', estres: 6, cargaTrabajo: 7, motivacion: 6, energia: 7 },
    { fecha: '2 Ene', estres: 5, cargaTrabajo: 6, motivacion: 7, energia: 6 },
    { fecha: '3 Ene', estres: 7, cargaTrabajo: 8, motivacion: 5, energia: 5 },
    { fecha: '4 Ene', estres: 4, cargaTrabajo: 5, motivacion: 8, energia: 8 },
  ]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [comentario, setComentario] = useState('');

  const getRecomendaciones = () => {
    const recomendaciones = [];
    if (pulsoActual.estres > 7) {
      recomendaciones.push({
        icon: "📋",
        titulo: "Alto nivel de estrés detectado",
        accion: "Toma descansos frecuentes",
        beneficio: "Reduce 20% el estrés en 2 semanas",
        recursos: ["Guía de microdescansos", "App de meditación"]
      });
    }
    if (pulsoActual.motivacion < 5) {
      recomendaciones.push({
        icon: "💡",
        titulo: "Baja motivación identificada",
        accion: "Programa sesión con tu líder",
        beneficio: "Clarifica objetivos y aumenta motivación",
        recursos: ["Guía de desarrollo profesional", "Template de plan de carrera"]
      });
    }
    if (pulsoActual.energia < 5) {
      recomendaciones.push({
        icon: "🌿",
        titulo: "Nivel de energía bajo",
        accion: "Optimiza tus hábitos diarios",
        beneficio: "Aumenta energía 30% en 3 semanas",
        recursos: ["Plan de sueño saludable", "Rutina de ejercicios cortos"]
      });
    }
    return recomendaciones;
  };

  const enviarPulso = () => {
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Mi Bienestar</h2>
        <p className="text-gray-600">Seguimiento personal de bienestar laboral</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Pulso Diario</h3>

          {/* Nivel de Estrés */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nivel de Estrés</label>
            <input
              type="range"
              min="1"
              max="10"
              value={pulsoActual.estres}
              onChange={(e) => setPulsoActual({...pulsoActual, estres: parseInt(e.target.value)})}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm">
              <span>😌 Bajo</span>
              <span className="font-bold">{pulsoActual.estres}/10</span>
              <span>😰 Alto</span>
            </div>
          </div>

          {/* Carga de Trabajo */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Carga de Trabajo</label>
            <input
              type="range"
              min="1"
              max="10"
              value={pulsoActual.cargaTrabajo}
              onChange={(e) => setPulsoActual({...pulsoActual, cargaTrabajo: parseInt(e.target.value)})}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm">
              <span>🌅 Ligera</span>
              <span className="font-bold">{pulsoActual.cargaTrabajo}/10</span>
              <span>🏃 Intensa</span>
            </div>
          </div>

          {/* Motivación */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Motivación</label>
            <input
              type="range"
              min="1"
              max="10"
              value={pulsoActual.motivacion}
              onChange={(e) => setPulsoActual({...pulsoActual, motivacion: parseInt(e.target.value)})}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm">
              <span>😕 Baja</span>
              <span className="font-bold">{pulsoActual.motivacion}/10</span>
              <span>💪 Alta</span>
            </div>
          </div>

          {/* Energía */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Nivel de Energía</label>
            <input
              type="range"
              min="1"
              max="10"
              value={pulsoActual.energia}
              onChange={(e) => setPulsoActual({...pulsoActual, energia: parseInt(e.target.value)})}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm">
              <span>🔋 Baja</span>
              <span className="font-bold">{pulsoActual.energia}/10</span>
              <span>⚡ Alta</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Comentarios (opcional)</label>
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              className="w-full p-2 border rounded-lg"
              rows="3"
              placeholder="¿Algo más que quieras compartir?"
            ></textarea>
          </div>

          <button
            onClick={enviarPulso}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Enviar Pulso
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Tendencias</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historicoPulsos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="estres" stroke="#ef4444" name="Estrés" />
                <Line type="monotone" dataKey="cargaTrabajo" stroke="#f59e0b" name="Carga" />
                <Line type="monotone" dataKey="motivacion" stroke="#10b981" name="Motivación" />
                <Line type="monotone" dataKey="energia" stroke="#6366f1" name="Energía" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Recomendaciones Personalizadas</h3>
        <div className="space-y-3">
          {getRecomendaciones().map((recomendacion, index) => (
            <div key={index} className="p-3 bg-blue-50 rounded-lg">
              {recomendacion.icon} {recomendacion.titulo} - {recomendacion.accion} ({recomendacion.beneficio})
              <ul>
                {recomendacion.recursos.map((recurso, i) => (
                  <li key={i}>{recurso}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {showFeedback && (
        <div className="fixed bottom-4 right-4 bg-green-100 text-green-700 p-4 rounded-lg shadow-lg">
          ¡Gracias por compartir tu pulso diario!
        </div>
      )}
    </div>
  );
};

export default PulsosEmpleado;