import Card from '../components/Card';
import dados from '../Dados/dados.json';
import { useFavorites } from '../components/FavoritesContext';
import './PageLayout.css';

const PessoasPage = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="page-container">
      <h2>Pessoas</h2>
      <div className="card-grid">
        {dados.pessoas.map(pessoas => (
          <Card
            key={pessoas.id}
            item={pessoas}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite(pessoas.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PessoasPage;