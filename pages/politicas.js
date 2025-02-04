
import { useState } from 'react';

export default function PoliticasPage() {
  const [politicas, setPoliticas] = useState({
    teletrabajo: 50,
    horarioFlexible: true,
    diasVacaciones: 20,
    programaBienestar: true,
    incentivos: 10
  });

  const [resultados, setResultados] = useState(null);

  const manejarCambioPolitica = (nombre, valor) => {
    setPoliticas({ ...politicas, [nombre]: valor });
  };

  const calcularImpacto = () => {
    let burnout = 0;
    let engagement = 0;
    let rotacion = 0;
    let bienestar = 0;
    let impactoFinanciero = 0;

    // Impactos de las políticas
    burnout -= politicas.teletrabajo * 0.05;
    engagement += politicas.teletrabajo * 0.1;
    
    if (politicas.horarioFlexible) {
      burnout -= 5;
      bienestar += 10;
    }

    if (politicas.programaBienestar) {
      bienestar += 15;
      engagement += 8;
    }

    rotacion -= (politicas.diasVacaciones * 0.2 + politicas.incentivos * 0.3);
    impactoFinanciero = (engagement * 0.05) - (rotacion * 0.1) + (bienestar * 0.02);

    setResultados({
      burnout,
      engagement,
      rotacion,
      bienestar,
      impactoFinanciero,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Simulador de Políticas Laborales</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="teletrabajo" className="block text-sm font-medium mb-2">Teletrabajo (%):</label>
            <input
              type="range"
              id="teletrabajo"
              value={politicas.teletrabajo}
              onChange={(e) => manejarCambioPolitica('teletrabajo', parseInt(e.target.value))}
              className="w-full"
              min="0"
              max="100"
            />
            <span className="text-sm">{politicas.teletrabajo}%</span>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={politicas.horarioFlexible}
                onChange={(e) => manejarCambioPolitica('horarioFlexible', e.target.checked)}
                className="rounded"
              />
              <span>Horario Flexible</span>
            </label>
          </div>

          <div>
            <label htmlFor="diasVacaciones" className="block text-sm font-medium mb-2">Días de Vacaciones:</label>
            <input
              type="number"
              id="diasVacaciones"
              value={politicas.diasVacaciones}
              onChange={(e) => manejarCambioPolitica('diasVacaciones', parseInt(e.target.value))}
              className="w-full p-2 border rounded"
              min="15"
              max="30"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={politicas.programaBienestar}
                onChange={(e) => manejarCambioPolitica('programaBienestar', e.target.checked)}
                className="rounded"
              />
              <span>Programa de Bienestar</span>
            </label>
          </div>

          <div>
            <label htmlFor="incentivos" className="block text-sm font-medium mb-2">Incentivos (% del salario):</label>
            <input
              type="number"
              id="incentivos"
              value={politicas.incentivos}
              onChange={(e) => manejarCambioPolitica('incentivos', parseInt(e.target.value))}
              className="w-full p-2 border rounded"
              min="0"
              max="30"
            />
          </div>
        </div>

        <button 
          onClick={calcularImpacto}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calcular Impacto
        </button>

        {resultados && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Resultados de la Simulación</h2>
            <div className="space-y-2">
              <p>Riesgo de Burnout: {Math.abs(resultados.burnout)}% de reducción</p>
              <p>Engagement: {resultados.engagement}% de mejora</p>
              <p>Rotación: {Math.abs(resultados.rotacion)}% de reducción</p>
              <p>Bienestar: {resultados.bienestar}% de mejora</p>
              <p>Impacto Financiero: {resultados.impactoFinanciero.toFixed(2)}% ROI estimado</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
