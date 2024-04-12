import { arrayPersonajes } from "../bd";
import { Tarjeta } from "./Tarjeta";

export function GrupoTarjetas() {
  return (
    <div className="grid grid-cols-3 gap-4">
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
