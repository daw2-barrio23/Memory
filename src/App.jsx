import { ClicksProvider } from './context/GlobalContext'; // Asegúrate de tener la ruta correcta
//import { GrupoTarjetas } from './componentes/GrupoTarjetas';
import { Header } from './componentes/Header';
import { Juego } from './vistas/Juego';
import { Routes, Route } from 'react-router-dom';
import {Home} from './vistas/Home'
import {ACercaDe} from './vistas/ACercaDe'
import { Login } from './vistas/Login';
import { Registro } from './vistas/Registro';

function App() {
  return (
    <ClicksProvider>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Juego />} />
          <Route path='/About' element={<ACercaDe />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />}/>
        </Routes>
        
      </>
    </ClicksProvider>
  );
}

export default App;
