import Card from '../components/Card';
import dados from '../Dados/dados.json';
import { useFavorites } from '../components/FavoritesContext';
import './PageLayout.css';

const AnimaisPage = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="page-container">
      <h2>Animais</h2>
      <div className="card-grid">
        {dados.animais.map(animal => (
          <Card
            key={animal.id}
            item={animal}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite(animal.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimaisPage;