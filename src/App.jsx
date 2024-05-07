import { ClicksProvider } from './context/GlobalContext'; // Asegúrate de tener la ruta correcta
//import { GrupoTarjetas } from './componentes/GrupoTarjetas';
import { Header } from './componentes/Header';
import { Juego } from './vistas/Juego';
import { Routes, Route } from 'react-router-dom';
import {Home} from './vistas/Home'
import {ACercaDe} from './vistas/ACercaDe'

function App() {
  return (
    <ClicksProvider>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Juego />} />
          <Route path='/About' element={<ACercaDe />} />
        </Routes>
        
      </>
    </ClicksProvider>
  );
}

export default App;
