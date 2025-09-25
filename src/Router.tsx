import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import InicioPage from './Pages/InicioPage';
import FavoritosPage from './Pages/FavoritosPage';

const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/favoritos" element={<FavoritosPage />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
};

export default Router;
