import Card from '../components/Card';
import dados from '../Dados/dados.json';
import { useFavorites } from '../components/FavoritesContext';
import './PageLayout.css';

const LivrosPage = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="page-container">
      <h2>Livros</h2>
      <div className="card-grid">
        {dados.livros.map(livros => (
          <Card
            key={livros.id}
            item={livros}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite(livros.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LivrosPage;