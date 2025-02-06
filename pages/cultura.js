import { AlertTriangle, TrendingUp, Users, Heart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, TrendingUp, Users, Heart } from 'lucide-react';

const CulturaOrganizacional = () => {
  // Datos de ejemplo para el mapa de valores
  const valoresData = [
    { nombre: 'Alineación de Valores', valor: 75 },
    { nombre: 'Ambiente Laboral', valor: 82 },
    { nombre: 'Comunicación', valor: 68 },
    { nombre: 'Liderazgo', valor: 71 }
  ];

  // Estado para las alertas de riesgo
  const [alertas] = useState([
    {
      departamento: 'Marketing',
      riesgo: 'Alto nivel de desalineación con valores corporativos',
      impacto: 'Medio',
      accion: 'Programar sesión de alineación cultural'
    },
    {
      departamento: 'Ventas',
      riesgo: 'Incremento en feedback negativo',
      impacto: 'Alto',
      accion: 'Implementar programa de reconocimiento'
    }
  ]);

  // Historias de éxito
  const [historias] = useState([
    {
      equipo: 'Desarrollo',
      titulo: 'Implementación exitosa de pausas activas',
      impacto: 'Reducción del 30% en estrés laboral',
      fecha: '2024-02-01'
    },
    {
      equipo: 'Atención al Cliente',
      titulo: 'Programa de mentoring cultural',
      impacto: 'Mejora del 25% en satisfacción laboral',
      fecha: '2024-01-15'
    }
  ]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Cultura Organizacional</h1>
      
      {/* Mapa de Valores */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Mapa de Valores</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={valoresData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Alertas de Riesgo Cultural */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <AlertTriangle className="mr-2 text-amber-500" />
          <h2 className="text-xl font-semibold">Alertas de Riesgo Cultural</h2>
        </div>
        <div className="space-y-4">
          {alertas.map((alerta, index) => (
            <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
              <h3 className="font-semibold">{alerta.departamento}</h3>
              <p className="text-gray-600">{alerta.riesgo}</p>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-amber-600">Impacto: {alerta.impacto}</span>
                <span className="text-indigo-600">Acción: {alerta.accion}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Score de Bienestar */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <TrendingUp className="mr-2 text-green-500" />
          <h2 className="text-xl font-semibold">Score de Bienestar</h2>
        </div>
        <div className="flex justify-around text-center">
          <div>
            <div className="text-3xl font-bold text-green-500">78</div>
            <div className="text-sm text-gray-600">Score General</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500">+5%</div>
            <div className="text-sm text-gray-600">vs Mes Anterior</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-500">82%</div>
            <div className="text-sm text-gray-600">Participación</div>
          </div>
        </div>
      </div>

      {/* Historias de Éxito */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Heart className="mr-2 text-rose-500" />
          <h2 className="text-xl font-semibold">Historias de Éxito</h2>
        </div>
        <div className="space-y-4">
          {historias.map((historia, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
              <div className="flex items-center">
                <Users className="mr-2 text-gray-400" size={20} />
                <span className="font-semibold">{historia.equipo}</span>
              </div>
              <h3 className="font-medium mt-1">{historia.titulo}</h3>
              <p className="text-green-600 text-sm">{historia.impacto}</p>
              <span className="text-gray-400 text-sm">{historia.fecha}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturaOrganizacional;
