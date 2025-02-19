import React from 'react';
import { Produto } from '../types/types';
import { FaShoppingCart } from 'react-icons/fa';

const ProdutosGrid: React.FC = () => {
  const [produtos, setProdutos] = React.useState<Produto[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = React.useState<string>('todos');

  return (
    <section className="bg-gray-100 py-16" id="produtos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h2>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-full ${
              categoriaSelecionada === 'todos' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setCategoriaSelecionada('todos')}
          >
            Todos
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${
              categoriaSelecionada === 'acessorios' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setCategoriaSelecionada('acessorios')}
          >
            Acessórios
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${
              categoriaSelecionada === 'smartphones' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setCategoriaSelecionada('smartphones')}
          >
            Smartphones
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{produto.nome}</h3>
                <p className="text-gray-600 text-sm mb-4">{produto.descricao}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    R$ {produto.preco.toFixed(2)}
                  </span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition flex items-center">
                    <FaShoppingCart className="mr-2" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdutosGrid; 