// GrupoTarjetas.jsx

import { useState, useEffect } from 'react';
import { Tarjeta } from './Tarjeta';

export function GrupoTarjetas() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonIds = generateRandomPokemonIds(9); // Obtener 9 IDs aleatorias
      const fetchedPokemonData = await Promise.all(pokemonIds.map(id => fetchPokemon(id)));
      const duplicatedPokemonData = [...fetchedPokemonData, ...fetchedPokemonData]; // Duplicar la matriz de datos
      const shuffledPokemonData = shuffleArray(duplicatedPokemonData); // Desordenar las tarjetas
      setPokemonData(shuffledPokemonData);
    };

    fetchPokemonData();
  }, []); // Ejecutar solo una vez al montar el componente

  const generateRandomPokemonIds = (count) => {
    const randomIds = [];
    for (let i = 0; i < count; i++) {
      randomIds.push(Math.floor(Math.random() * 898) + 1); // Generar IDs aleatorios entre 1 y 898 (el máximo de Pokémon)
    }
    return randomIds;
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
    // Algoritmo de Fisher-Yates para desordenar el array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="flex mx-auto flex-wrap bg-slate-599 gap-2 p-5">
      {pokemonData.map((pokemon, index) => (
        <Tarjeta
          key={index}
          nombre={pokemon.nombre}
          imagen={pokemon.imagen}
        />
      ))}
    </div>
  );
}
