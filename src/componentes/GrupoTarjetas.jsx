import { arrayPersonajes } from "../bd";
import { Tarjeta } from "./Tarjeta";

export function GrupoTarjetas() {
  return (
    <div className="grid grid-cols-5 gap-2"> {/* Cambio a gap-2 */}
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
