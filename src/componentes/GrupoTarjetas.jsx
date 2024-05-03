import { arrayPersonajes } from "../bd";
import { Tarjeta } from "./Tarjeta";

export function GrupoTarjetas() {
  return (
    <div className="flex mx-auto flex-wrap bg-slate-599 gap-2 p-5"> {/* Cambio a gap-2 */}
      {arrayPersonajes.map(personaje => (
        <Tarjeta
          key={personaje.id}
          nombre={personaje.nombre}
          imagen={personaje.imagen}
        />
      ))}
    </div>
  );
}
