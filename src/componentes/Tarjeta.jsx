
import { useState } from "react";



export function Tarjeta({ nombre, imagen }) {
    const [contadorClicks, setContadorClicks] = useState(0);

    const handleClick = () => {
        setContadorClicks(contadorClicks + 1);
    };

    return (
        <div className="bg-slate-200 rounded w-[150px] h-[220px] border p-2 shadow-lg text-center">
            <p>Clicks: {contadorClicks}</p>
            <img className="h-[150px]" src={imagen} onClick={handleClick} />
            <h2 className="pt-1">{nombre}</h2>
        </div>
    );
}
