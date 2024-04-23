/*
export function Tarjeta (){
    return(
        <div className= "bg-slate-200 rounded w-[225px] h-[300px] border p-2 shadow-lg text-center">
            <img className="h-[250px]" src="https://static.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png/revision/latest?cb=20180420015558&path-prefix=es"/>
            <h2 className="pt-1">Capi</h2>
        </div>
    )
}
*/

import { useState } from "react";



export function Tarjeta({ nombre, imagen }) {
    const [contadorClicks, setContadorClicks] = useState(0);

    const handleClick = () => {
        setContadorClicks(contadorClicks + 1);
    };

    return (
        <div className="bg-slate-200 rounded w-[225px] h-[325px] border p-2 shadow-lg text-center">
            <p>Clicks: {contadorClicks}</p>
            <img className="h-[250px]" src={imagen} onClick={handleClick} />
            <h2 className="pt-1">{nombre}</h2>
        </div>
    );
}
