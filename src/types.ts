export interface Animal {
  id: string; // ID é uma string
  nome: string;
  especie: string;
  imagem: string; // Propriedade de imagem
}

export interface Livro {
  id: string; // ID é uma string
  titulo: string;
  autor: string;
  ano: number;
  capa: string; // Propriedade de imagem
}

export interface Pessoa {
  id: string; // ID é uma string
  nome: string;
  nascimento: string; // Nascimento é uma string no formato 'YYYY-MM-DD'
  area: string;
  foto: string; // Propriedade de imagem
}

// O tipo de união permanece o mesmo, mas agora com as interfaces corretas.
export type DataItem = Animal | Livro | Pessoa;