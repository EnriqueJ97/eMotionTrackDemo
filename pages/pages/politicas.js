import { useState } from 'react';

export default function PoliticasPage() {
  const [politicas, setPoliticas] = useState({
    teletrabajo: 50,
    horarioFlexible: true,
    diasVacaciones: 20,
    programaBienestar: true,
    incentivos: 10,
    // ... más políticas
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

    // Impactos de las políticas (ejemplo)
    burnout -= politicas.teletrabajo * 0.05;
    engagement += politicas.teletrabajo * 0.1;
    if (politicas.horarioFlexible) {
      burnout -= 5;
      bienestar += 10;
    }
    // ... impactos de otras políticas

    // Cálculo financiero (ejemplo)
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
    <div className="container">
      <h1>Simulador de Políticas Laborales</h1>

      <div className="politicas">
        {/* Selectores de políticas */}
        <div className="politica">
          <label htmlFor="teletrabajo">Teletrabajo (%):</label>
          <input
            type="number"
            id="teletrabajo"
            value={politicas.teletrabajo}
            onChange={(e) => manejarCambioPolitica('teletrabajo', parseInt(e.target.value))}
          />
        </div>
        <div className="politica">
          <label htmlFor="horarioFlexible">Horario Flexible:</label>
          <input
            type="checkbox"
            id="horarioFlexible"
            checked={politicas.horarioFlexible}
            onChange={(e) => manejarCambioPolitica('horarioFlexible', e.target.checked)}
          />
        </div>
        {/* ... más selectores de políticas */}
      </div>

      <button onClick={calcularImpacto}>Calcular</button>

      {/* Resultados */}
      {resultados && (
        <div className="resultados">
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