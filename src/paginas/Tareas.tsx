import { useEffect, useState } from 'react';
import { obtenerTareas, actualizarTarea, eliminarTarea } from '../api/tareas';
import type { Tarea } from '../tipos/tarea';

export function Tareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  useEffect(() => {
    obtenerTareas().then(setTareas);
  }, []);

  const toggleHecha = async (tarea: Tarea) => {
    const actualizada = await actualizarTarea(tarea.id, !tarea.hecha);
    setTareas(prev => prev.map(t => t.id === actualizada.id ? actualizada : t));
  };

  const eliminar = async (id: number) => {
    await eliminarTarea(id);
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  return (
    <main className="pagina">
      <h2>Mis Tareas</h2>
      <ul className="lista-tareas">
        {tareas.map(tarea => (
          <li key={tarea.id} className={tarea.hecha ? 'hecha' : ''}>
            <span onClick={() => toggleHecha(tarea)}>{tarea.titulo}</span>
            <button onClick={() => eliminar(tarea.id)}>×</button>
          </li>
        ))}
      </ul>
    </main>
  );
}