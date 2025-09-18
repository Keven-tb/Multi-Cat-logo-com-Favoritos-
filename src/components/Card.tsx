import type { DataItem } from '../types';
import './Card.css';

interface CardProps {
  item: DataItem;
  onToggleFavorite: (item: DataItem) => void;
  isFavorite: boolean;
}

// Função auxiliar para verificar o tipo (Type Guard)
function isAnimal(item: DataItem): item is Animal {
  return 'especie' in item;
}

function isLivro(item: DataItem): item is Livro {
  return 'autor' in item;
}

function isPessoa(item: DataItem): item is Pessoa {
  return 'profissao' in item;
}

const Card: React.FC<CardProps> = ({ item, onToggleFavorite, isFavorite }) => {
  const renderContent = () => {
    if (isAnimal(item)) {
      return (
        <>
          <img src={item.imagem} alt={item.nome} className="card-image" />
          <h3>{item.nome}</h3>
          <p>Espécie: {item.especie}</p>
        </>
      );
    }
    if (isLivro(item)) {
      return (
        <>
          <h3>{item.titulo}</h3>
          <p>Autor: {item.autor}</p>
          <p>Ano: {item.ano}</p>
        </>
      );
    }
    if (isPessoa(item)) {
      return (
        <>
          <h3>{item.nome}</h3>
          <p>Profissão: {item.profissao}</p>
          <p>Nascimento: {item.nascimento}</p>
        </>
      );
    }
    return null;
  };

  return (
    <div className="card">
      {renderContent()}
      <button onClick={() => onToggleFavorite(item)}>
        {isFavorite ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
};

export default Card;