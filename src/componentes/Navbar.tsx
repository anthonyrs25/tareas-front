import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
    const [claro, setClaro ] = useState(false);
    const toggleTema = () => {
        const nuevoTema = !claro;
        setClaro(nuevoTema);
        if (nuevoTema) {
            document.documentElement.classList.add('claro');
        } else {
            document.documentElement.classList.remove('claro');
        }
    };
    const [moderno, setModerno] = useState(false);
    const toggleModerno = () => {
      const nuevo = !moderno;
      setModerno(nuevo);
      if(nuevo) {
        document.body.classList.add('moderno');
      } else {
        document.body.classList.remove('moderno');
      }
    };

  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Inicio
      </NavLink>
      <NavLink to="/tareas" className={({ isActive }) => isActive ? 'active' : ''}>
        Tareas
      </NavLink>
      <button onClick={toggleTema} className='btn-tema'>
        {claro ? 'Oscuro' : 'Claro'}
      </button>
      <button onClick={toggleModerno} className='btn-tema'>
        Moderno
      </button>
    </nav>
  );
}