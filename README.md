Catálogo Interativo com React e TypeScript

O Catálogo Interativo é uma aplicação de página única (SPA) que consome dados de um arquivo JSON local para exibir três catálogos distintos: Animais, Livros e Pessoas.

Funcionalidades
Navegação entre Páginas: Uma barra de navegação persistente permite ao usuário alternar facilmente entre as páginas "Início", "Animais", "Livros", "Pessoas" e "Favoritos".

Exibição em Cards: Cada item de dado é renderizado em um componente Card reutilizável e estilizado.

Sistema de Favoritos Global: O usuário pode adicionar ou remover qualquer item (seja um animal, livro ou pessoa) de uma lista de favoritos. O estado dessa lista é compartilhado globalmente entre todas as páginas.

Tipagem Forte: Todo o projeto é estritamente tipado com TypeScript, desde a definição dos dados até as props dos componentes e o valor do contexto.

Layout Consistente: Todas as páginas de catálogo seguem um layout padrão, garantido por um componente PageLayout reutilizável.

Tecnologias Utilizadas
A aplicação foi construída utilizando um ecossistema de desenvolvimento moderno:

Vite: Ferramenta de build e servidor de desenvolvimento local.

React: Biblioteca principal para a construção da interface de usuário.

TypeScript: Superset do JavaScript que adiciona tipagem estática.

React Router DOM: Biblioteca para gerenciamento de rotas e navegação do lado do cliente.

Context API: Utilizada para o gerenciamento de estado global do sistema de favoritos.
# Multi-Cat-logo-com-Favoritos-
