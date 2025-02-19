interface Post {
  id: string;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
  posts: Post[];
}

interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  preco?: string;
}

interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: 'acessorio' | 'smartphone' | 'tablet';
  emEstoque: boolean;
}

interface Depoimento {
  id: string;
  cliente: string;
  texto: string;
  avaliacao: number;
  servico: string;
}

export type { Post, Comment, User, Servico, Produto, Depoimento }; 