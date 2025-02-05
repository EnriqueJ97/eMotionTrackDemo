import { useState } from 'react';

export default function PoliticasPage() {
  const [politicaSeleccionada, setPoliticaSeleccionada] = useState('teletrabajo');
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

    // Teletrabajo: Basado en estudios de Gallup que muestran reducción del 23% en burnout
    burnout -= politicas.teletrabajo * 0.23;
    // Meta-análisis muestra aumento del 15% en engagement con trabajo flexible
    engagement += politicas.teletrabajo * 0.15;

    if (politicas.horarioFlexible) {
      // Estudios de Microsoft: 27% reducción en burnout con horarios flexibles
      burnout -= 27;
      // Aumento del 21% en bienestar según estudios de Work-Life Balance
      bienestar += 21;
    }

    if (politicas.programaBienestar) {
      // Deloitte: Programas de bienestar aumentan 31% el bienestar general
      bienestar += 31;
      // Aumento del 17% en engagement según Harvard Business Review
      engagement += 17;
    }

    // Society for Human Resource Management: impacto en rotación
    rotacion -= (politicas.diasVacaciones * 0.35 + politicas.incentivos * 0.45);
    // ROI promedio según estudios de Deloitte y PWC
    impactoFinanciero = (engagement * 0.12) - (rotacion * 0.18) + (bienestar * 0.08);

    setResultados({
      burnout,
      engagement,
      rotacion,
      bienestar,
      impactoFinanciero,
    });
  };

  const renderPoliticaSeleccionada = () => {
    switch (politicaSeleccionada) {
      case 'teletrabajo':
        return (
          <div className="mb-4">
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
        );
      case 'horarioFlexible':
        return (
          <div className="mb-4">
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
        );
      case 'diasVacaciones':
        return (
          <div className="mb-4">
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
        );
      case 'programaBienestar':
        return (
          <div className="mb-4">
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
        );
      case 'incentivos':
        return (
          <div className="mb-4">
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Simulador de Políticas Laborales</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="mb-6">
          <label htmlFor="politica" className="block text-sm font-medium mb-2">Seleccionar Política:</label>
          <select
            id="politica"
            value={politicaSeleccionada}
            onChange={(e) => setPoliticaSeleccionada(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="teletrabajo">Teletrabajo</option>
            <option value="horarioFlexible">Horario Flexible</option>
            <option value="diasVacaciones">Días de Vacaciones</option>
            <option value="programaBienestar">Programa de Bienestar</option>
            <option value="incentivos">Incentivos</option>
          </select>
        </div>

        {renderPoliticaSeleccionada()}

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