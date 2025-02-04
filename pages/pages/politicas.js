// pages/politicas.js
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
    // ... otros impactos

    // Ejemplo: Impacto del horario flexible
    if (horarioFlexible) {
      burnout -= 5;
      bienestar += 10;
      // ... otros impactos
    }

    // ... Impacto de otras políticas

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
    <div>
      <h1>Simulador de Políticas Laborales</h1>

      {/* Inputs para las políticas */}
      <div>
        <label htmlFor="teletrabajo">Teletrabajo (%):</label>
        <input
          type="number"
          id="teletrabajo"
          value={teletrabajo}
          onChange={(e) => setTeletrabajo(parseInt(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="horarioFlexible">Horario Flexible:</label>
        <input
          type="checkbox"
          id="horarioFlexible"
          checked={horarioFlexible}
          onChange={(e) => setHorarioFlexible(e.target.checked)}
        />
      </div>

      <div>
        <label htmlFor="diasVacaciones">Días de Vacaciones:</label>
        <input
          type="number"
          id="diasVacaciones"
          value={diasVacaciones}
          onChange={(e) => setDiasVacaciones(parseInt(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="programaBienestar">Programa de Bienestar:</label>
        <input
          type="checkbox"
          id="programaBienestar"
          checked={programaBienestar}
          onChange={(e) => setProgramaBienestar(e.target.checked)}
        />
      </div>

      <div>
        <label htmlFor="incentivos">Incentivos (% del salario):</label>
        <input
          type="number"
          id="incentivos"
          value={incentivos}
          onChange={(e) => setIncentivos(parseInt(e.target.value))}
        />
      </div>

      <button onClick={calcularImpacto}>Calcular</button>

      {/* Mostrar resultados */}
      {resultados && (
        <div>
          <h2>Resultados de la Simulación</h2>
          <p>Burnout: {resultados.burnout}</p>
          <p>Engagement: {resultados.engagement}</p>
          <p>Rotación: {resultados.rotacion}</p>
          <p>Bienestar: {resultados.bienestar}</p>
          <p>Impacto Financiero: {resultados.impactoFinanciero}</p>
        </div>
      )}
    </div>
  );
}