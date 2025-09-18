import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end fixed top-20 right-2 text-white z-50">
      {/* Botón hamburguesa */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="w-16 h-16 bg-gray-800 flex items-center justify-center rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
        >
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Opciones que salen sin agrandar el botón */}
        {isOpen && (
          <div className="absolute top-full left-0 w-16 bg-gray-800 text-sm rounded-md shadow-lg">
            <a
              href="#"
              className="block hover:bg-gray-700 px-2 py-1 text-center"
            >
              <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
            </a>
            <a
              href="#"
              className="block hover:bg-gray-700 px-2 py-1 text-center"
            >
              Servicios
            </a>
            <a
              href="#"
              className="block hover:bg-gray-700 px-2 py-1 text-center"
            >
              Contacto
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
