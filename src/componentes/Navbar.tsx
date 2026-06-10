import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Inicio
      </NavLink>
      <NavLink to="/tareas" className={({ isActive }) => isActive ? 'active' : ''}>
        Tareas
      </NavLink>
    </nav>
  );
}