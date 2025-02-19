import React from 'react';
import { FaTools, FaShoppingCart, FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo-profix.png" alt="PROFIX" className="h-12" />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-green-500 transition">Início</a>
            <a href="#servicos" className="hover:text-green-500 transition">Serviços</a>
            <a href="#produtos" className="hover:text-green-500 transition">Produtos</a>
            <a href="#contato" className="hover:text-green-500 transition">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center">
              <FaWhatsapp className="mr-2" />
              Orçamento
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 