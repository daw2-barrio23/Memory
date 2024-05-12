import { useState } from 'react';
import { useClicksContext } from '../context/GlobalContext'; // Asegúrate de tener la ruta correcta

export function Tarjeta({ nombre, imagen, onClick, volteada }) {
  const [contadorClicks, setContadorClicks] = useState(0);
  const { incrementClicks } = useClicksContext();

  const handleClick = () => {
    setContadorClicks(contadorClicks + 1);
    incrementClicks();
    onClick(); // Llamar a la función onClick proporcionada por el componente padre
  };

  return (
    <div className="bg-slate-200 rounded w-[150px] h-[220px] border p-2 shadow-lg text-center" onClick={handleClick}>
      {volteada ? (
        <>
          <p>Clicks: {contadorClicks}</p>
          <img className="h-[150px]" src={imagen} alt="Imagen" />
          <h2 className="pt-1">{nombre}</h2>
        </>
      ) : (
        <img className="h-[150px]" src="poke.png" alt="Parte trasera" />
      )}
    </div>
  );
}
