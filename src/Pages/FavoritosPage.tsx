import Card from '../components/Card';
import { useFavorites } from '../components/FavoritesContext';
import './PageLayout.css';

const FavoritosPage = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="page-container">
      <h2>Meus Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você ainda não tem itens favoritos.</p>
      ) : (
        <div className="card-grid">
          {favorites.map(item => (
            <Card
              key={item.id}
              item={item}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritosPage;