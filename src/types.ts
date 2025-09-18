// src/types.ts

// Interface para cada tipo de objeto
export interface Animal {
    id: number;
    nome: string;
    especie: string;
    imagem: string;
  }
  
  export interface Livro {
    id: number;
    titulo: string;
    autor: string;
    ano: number;
    capa: string;
  }
  
  export interface Pessoa {
    id: number;
    nome: string;
    nascimento: number;
    area: string;
    foto: string;
  }

  export type DataItem = Animal | Livro | Pessoa;