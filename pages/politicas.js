
import { useState } from 'react';

export default function PoliticasPage() {
  // Estados para las políticas laborales
  const [teletrabajo, setTeletrabajo] = useState(50); // Porcentaje de empleados
  const [horarioFlexible, setHorarioFlexible] = useState(true);
  const [diasVacaciones, setDiasVacaciones] = useState(20);
  const [programaBienestar, setProgramaBienestar] = useState(true);
  const [incentivos, setIncentivos] = useState(10); // Porcentaje del salario

  // Estado para los resultados de la simulación
  const [resultados, setResultados] = useState(null);

  const calcularImpacto = () => {
    // Lógica para calcular el impacto de las políticas
    let burnout = 0;
    let engagement = 0;
    let rotacion = 0;
    let bienestar = 0;
    let impactoFinanciero = 0;

    // Ejemplo: Impacto del teletrabajo
    burnout -= teletrabajo * 0.05; // Reduce el burnout
    engagement += teletrabajo * 0.1; // Aumenta el engagement

    // Ejemplo: Impacto del horario flexible
    if (horarioFlexible) {
      burnout -= 5;
      bienestar += 10;
    }

    // Calcular impacto financiero (ejemplo simplificado)
    impactoFinanciero = (engagement * 0.05) - (rotacion * 0.1) + (bienestar * 0.02);

    setResultados({
      burnout: burnout,
      engagement: engagement,
      rotacion: rotacion,
      bienestar: bienestar,
      impactoFinanciero: impactoFinanciero,
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
              value={teletrabajo}
              onChange={(e) => setTeletrabajo(parseInt(e.target.value))}
              className="w-full"
              min="0"
              max="100"
            />
            <span className="text-sm">{teletrabajo}%</span>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={horarioFlexible}
                onChange={(e) => setHorarioFlexible(e.target.checked)}
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
              value={diasVacaciones}
              onChange={(e) => setDiasVacaciones(parseInt(e.target.value))}
              className="w-full p-2 border rounded"
              min="15"
              max="30"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={programaBienestar}
                onChange={(e) => setProgramaBienestar(e.target.checked)}
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
              value={incentivos}
              onChange={(e) => setIncentivos(parseInt(e.target.value))}
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
              <p>Rotación: {resultados.rotacion}% de reducción</p>
              <p>Bienestar: {resultados.bienestar}% de mejora</p>
              <p>Impacto Financiero: {resultados.impactoFinanciero.toFixed(2)}% ROI estimado</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
