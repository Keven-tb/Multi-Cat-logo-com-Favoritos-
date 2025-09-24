import { type DataItem, type Animal, type Livro, type Pessoa } from '../types';
import './Card.css';

interface CardProps {
  item: DataItem;
  onToggleFavorite: (item: DataItem) => void;
  isFavorite: boolean;
}

function isAnimal(item: DataItem): item is Animal { 
  return 'especie' in item; 
}

function isLivro(item: DataItem): item is Livro { 
  return 'autor' in item; 
}

function isPessoa(item: DataItem): item is Pessoa { 
  return 'nascimento' in item; 
}

const getImageUrl = (item: DataItem): string | undefined => {
  if (isAnimal(item)) return item.imagem;
  if (isLivro(item)) return item.capa;
  if (isPessoa(item)) return item.foto;
  return undefined;
};

const Card: React.FC<CardProps> = ({ item, onToggleFavorite, isFavorite }) => {
  const imageUrl = getImageUrl(item);

  const renderContent = () => {
    if (isAnimal(item)) {
      return (
        <>
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
          <p>Área: {item.area}</p>
          <p>Nascimento: {new Date(item.nascimento).toLocaleDateString()}</p>
        </>
      );
    }
    return null;
  };

  return (
    <div className="card">
      {/* Renderiza a imagem apenas se a URL existir */}
      {imageUrl && <img src={imageUrl} alt="Imagem do item" className="card-image" />}
      <div className="card-content">
        {renderContent()}
      </div>
      <button onClick={() => onToggleFavorite(item)}>
        {isFavorite ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
};

export default Card;