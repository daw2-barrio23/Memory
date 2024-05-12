import { useState, useEffect } from 'react';
import { Tarjeta } from './Tarjeta';

export function GrupoTarjetas() {
  const [pokemonData, setPokemonData] = useState([]);
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]); // Estado para almacenar las cartas seleccionadas

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonIds = generateRandomPokemonIds(9);
      const fetchedPokemonData = await Promise.all(pokemonIds.map(id => fetchPokemon(id)));
      const shuffledPokemonData = shuffleArray(fetchedPokemonData);
      setPokemonData(shuffledPokemonData);
    };
    fetchPokemonData();
  }, []);

  const generateRandomPokemonIds = (count) => {
    const randomIds = [];
    while (randomIds.length < count) {
      const randomId = Math.floor(Math.random() * 898) + 1;
      randomIds.push(randomId, randomId); // Agregar cada ID dos veces
    }
    return shuffleArray(randomIds);
  };

  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon data');
      }
      const data = await response.json();
      return {
        id: data.id,
        nombre: data.name,
        imagen: data.sprites.front_default,
      };
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (index) => {
    // Verificar si la carta ya está seleccionada o emparejada
    if (!cartasSeleccionadas.includes(index) && !pokemonData[index].matched) {
      // Si no está seleccionada ni emparejada, agregar la carta al array de cartas seleccionadas
      setCartasSeleccionadas((prevCartasSeleccionadas) => [...prevCartasSeleccionadas, index]);
    }
  };

  useEffect(() => {
    // Verificar si se han seleccionado dos cartas
    if (cartasSeleccionadas.length === 2) {
      const [index1, index2] = cartasSeleccionadas;
      const pokemon1 = pokemonData[index1];
      const pokemon2 = pokemonData[index2];
      // Verificar si las cartas coinciden
      if (pokemon1.id === pokemon2.id) {
        // Si las cartas coinciden, mantenerlas volteadas y limpiar las cartas seleccionadas
        setPokemonData((prevPokemonData) => {
          const updatedPokemonData = [...prevPokemonData];
          updatedPokemonData[index1].matched = true;
          updatedPokemonData[index2].matched = true;
          return updatedPokemonData;
        });
      } else {
        // Si las cartas no coinciden, esperar un momento y luego ocultar las cartas
        const timer = setTimeout(() => {
          setPokemonData((prevPokemonData) => {
            const updatedPokemonData = [...prevPokemonData];
            updatedPokemonData[index1].matched = false;
            updatedPokemonData[index2].matched = false;
            return updatedPokemonData;
          });
          setCartasSeleccionadas([]);
        }, 1000);
        // Limpiar el temporizador si el componente se desmonta antes de que el tiempo de espera termine
        return () => clearTimeout(timer);
      }
    }
  }, [cartasSeleccionadas]); // Se ejecutará cuando cambien las cartas seleccionadas

  return (
    <div className="flex mx-auto flex-wrap bg-slate-599 gap-2 p-5">
      {pokemonData.map((pokemon, index) => (
        <Tarjeta
          key={index}
          nombre={pokemon.nombre}
          imagen={pokemon.imagen}
          volteada={pokemon.matched || cartasSeleccionadas.includes(index)} // Mostrar la carta si está volteada o si está seleccionada
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}
