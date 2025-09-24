import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './components/FavoritesContext';
import Navbar from './components/Navbar';
import InicioPage from './Pages/InicioPage';
import AnimaisPage from './Pages/AnimaisPage';
import LivrosPage from './Pages/LivrosPage';
import PessoasPage from './Pages/PessoasPage';
import FavoritosPage from './Pages/FavoritosPage';

const Router = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/animais" element={<AnimaisPage />} />
            <Route path="/livros" element={<LivrosPage />} />
            <Route path="/pessoas" element={<PessoasPage />} />
            <Route path="/favoritos" element={<FavoritosPage />} />
          </Routes>
        </main>
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default Router;
