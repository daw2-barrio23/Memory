// Juego.jsx

import { useClicksContext } from '../context/GlobalContext'; // Asegúrate de tener la ruta correcta

export function Juego() {
  const { totalClicks } = useClicksContext();

  return (
    <div id="home" className="text-white mt-4 p-5"> 
      <h1 className="text-2xl font-bold mb-2">Vista Juego</h1>
      
      <div>Total Clicks: {totalClicks}</div>
    </div>
  );
}
