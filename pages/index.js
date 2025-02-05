import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a eMotionTrack
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Tu plataforma integral para el bienestar laboral y la gestión del capital humano
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/portal-workers" 
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 text-center">
            <div className="text-6xl mb-4">👥</div>
            <h2 className="text-2xl font-bold mb-4">eMotionTrack Workers</h2>
            <p className="text-gray-600">Accede a tu portal de empleado para gestionar tu registro horario, guardias y bienestar laboral</p>
          </Link>

          <Link href="/portal-managers"
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500 text-center">
            <div className="text-6xl mb-4">👔</div>
            <h2 className="text-2xl font-bold mb-4">eMotionTrack Managers</h2>
            <p className="text-gray-600">Portal para directivos y managers con acceso a reportes, simuladores y herramientas de gestión</p>
          </Link>
        </div>
      </div>
    </div>
  );
}