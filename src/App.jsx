
import { ClicksProvider } from './context/GlobalContext'; // Asegúrate de tener la ruta correcta
import { GrupoTarjetas } from './componentes/GrupoTarjetas';
import { Header } from './componentes/Header';
import { Juego } from './vistas/Juego';

function App() {
  return (
    <ClicksProvider>
      <>
        <Header />
        <Juego />
        <GrupoTarjetas />
      </>
    </ClicksProvider>
  );
}

export default App;
