import './style.css';
import Dishes from './componentes/Dishes';
import Login from './componentes/Login';
import Agregar from './componentes/Agregar';
import Editar from './componentes/Editar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/Dishes' element={<Dishes/>} />
        <Route path='/Editar/:id_platillo' element={<Editar/>} />
        <Route path='/Agregar' element={<Agregar/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;