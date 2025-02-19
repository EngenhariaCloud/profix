import React from 'react';
import { Servico } from '../types/types';
import { FaTools, FaMobile, FaTablet, FaCheck } from 'react-icons/fa';

const ServicosSection: React.FC = () => {
  const servicos: Servico[] = [
    {
      id: '1',
      titulo: 'Conserto de Smartphones',
      descricao: 'Reparo de tela, bateria, câmera e outros componentes',
      imagem: '/servicos/smartphone.jpg'
    },
    {
      id: '2',
      titulo: 'Manutenção de Tablets',
      descricao: 'Serviços especializados para todos os modelos de tablets',
      imagem: '/servicos/tablet.jpg'
    },
    {
      id: '3',
      titulo: 'Troca de Peças',
      descricao: 'Utilizamos peças originais com garantia',
      imagem: '/servicos/pecas.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white" id="servicos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div key={servico.id} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <FaTools className="text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{servico.titulo}</h3>
              <p className="text-gray-400 text-center">{servico.descricao}</p>
              <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition">
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosSection; 