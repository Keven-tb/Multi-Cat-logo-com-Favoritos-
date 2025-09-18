// src/context/FavoritesContext.tsx
import { createContext, useState, useContext, type ReactNode } from 'react';
import type { DataItem } from '../types';

// 1. Definir a "forma" do contexto
interface FavoritesContextType {
  favorites: DataItem[];
  toggleFavorite: (item: DataItem) => void;
  isFavorite: (id: number) => boolean;
}

// 2. Criar o Contexto
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// 3. Criar o Provedor (Provider)
interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<DataItem[]>([]);

  const toggleFavorite = (item: DataItem) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.id === item.id);
      if (isAlreadyFavorite) {
        return prevFavorites.filter(fav => fav.id !== item.id); // Remove
      } else {
        return [...prevFavorites, item]; // Adiciona
      }
    });
  };

  const isFavorite = (id: number) => {
    return favorites.some(fav => fav.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// 4. Criar um Hook customizado para facilitar o uso
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};