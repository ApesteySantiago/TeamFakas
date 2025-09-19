import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end fixed top-15 right-8 text-white z-50">
      {/* Botón hamburguesa */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="w-10 h-12 bg-gray-800 flex items-center justify-center hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
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
          <div id="boxMenu" className="absolute top-full left-0 w-11 text-sm shadow-lg">
            <a
              href="#"
              className="block px-2 py-1 text-center"
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
