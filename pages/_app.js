// pages/_app.js
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg mb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-4 items-center">
              {/* Usa Link en lugar de <a> para navegación interna */}
              <Link href="/" className="text-xl font-bold text-blue-600">
                eMotionTrack
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Registro Horario
              </Link>
              <Link href="/empleado" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Portal Empleado
              </Link>
              <Link href="/rrhh" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Portal RRHH
              </Link>
              {/* Añade los simuladores */}
              <Link href="/cultura" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
          
                Simulador de Políticas
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp; // 