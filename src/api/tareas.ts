import axios from 'axios';
import type { Tarea } from '../tipos/tarea';

const http = axios.create({ baseURL: 'http://localhost:3000' });

export const obtenerTareas = () => http.get<Tarea[]>('/tareas').then(r => r.data);
export const crearTarea = (titulo: string) => http.post<Tarea>('/tareas', { titulo }).then(r => r.data);
export const actualizarTarea = (id: number, hecha: boolean) => http.patch<Tarea>(`/tareas/${id}`, { hecha }).then(r => r.data);
export const eliminarTarea = (id: number) => http.delete(`/tareas/${id}`);