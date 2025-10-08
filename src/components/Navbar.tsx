import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Todas as Tarefas</NavLink>
      <NavLink to="/favoritos">Favoritas</NavLink>
    </nav>
  );
};
export default Navbar;