import { useState } from 'react';
import { crearTarea } from '../api/tareas';

export function Inicio() {
  const [titulo, setTitulo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    await crearTarea(titulo.trim());
    setTitulo('');
  };

  return (
    <main className="pagina">
      <h1>Gestor de Tareas</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          placeholder="Nueva tarea..."
          autoFocus
        />
        <button type="submit">Agregar</button>
      </form>
    </main>
  );
}