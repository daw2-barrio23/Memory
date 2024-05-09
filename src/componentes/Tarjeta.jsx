import { useState } from 'react';
import { useClicksContext } from '../context/GlobalContext'; // Asegúrate de tener la ruta correcta

export function Tarjeta({ id, nombre, imagen, onClick }) {
  const [volteada, setVolteada] = useState(false);
  const [contadorClicks, setContadorClicks] = useState(0);
  const { incrementClicks } = useClicksContext();

  const handleClick = () => {
    setContadorClicks(contadorClicks + 1);
    incrementClicks();
    setVolteada(true); // Voltear la tarjeta al hacer clic

    setTimeout(() => {
      setVolteada(false); // Volver a ocultar la tarjeta después de un segundo
    }, 1000);

    onClick(id); // Llamar a la función onClick pasando el ID
  };

  return (
    <div className="bg-slate-200 rounded w-[150px] h-[220px] border p-2 shadow-lg text-center" onClick={handleClick}>
      {volteada ? ( // Mostrar contenido de la tarjeta si está volteada
        <>
          <p>Clicks: {contadorClicks}</p>
          <img className="h-[150px]" src={imagen} alt="Imagen" />
          <h2 className="pt-1">{nombre}</h2>
        </>
      ) : ( // Mostrar la parte trasera de la tarjeta si no está volteada
        <img className="h-[150px]" src="poke.png" alt="Parte trasera" />
      )}
    </div>
  );
}
