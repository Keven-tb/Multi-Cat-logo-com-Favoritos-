import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/animais">Animais</NavLink>
      <NavLink to="/livros">Livros</NavLink>
      <NavLink to="/pessoas">Pessoas</NavLink>
      <NavLink to="/favoritos">Favoritos</NavLink>
    </nav>
  );
};

export default Navbar;