import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './componentes/Navbar';
import { Inicio } from './paginas/Inicio';
import { Tareas } from './paginas/Tareas';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tareas" element={<Tareas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;