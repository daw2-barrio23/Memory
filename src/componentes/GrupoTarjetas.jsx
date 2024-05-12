import React, { useState, useEffect } from 'react';
import { Tarjeta } from './Tarjeta';

export function GrupoTarjetas() {
  const [pokemonData, setPokemonData] = useState([]);
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
  const [tiempoRestante, setTiempoRestante] = useState(20);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const uniquePokemon = await obtenerPokemonUnicos(9);
        // Duplicar los Pokémon únicos
        const duplicatedPokemon = [...uniquePokemon, ...uniquePokemon];
        // Mezclar la lista de Pokémon
        const shuffledPokemon = shuffleArray(duplicatedPokemon);
        setPokemonData(shuffledPokemon);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    fetchPokemonData();
  }, []);

  const obtenerPokemonUnicos = async (count) => {
    const uniquePokemon = [];
    while (uniquePokemon.length < count) {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const pokemon = await fetchPokemon(randomId);
      if (!uniquePokemon.some(p => p.id === pokemon.id)) {
        uniquePokemon.push(pokemon);
      }
    }
    return uniquePokemon;
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
    if (!cartasSeleccionadas.includes(index) && !pokemonData[index].matched) {
      setCartasSeleccionadas((prevCartasSeleccionadas) => [...prevCartasSeleccionadas, index]);
      if (tiempoRestante === 20) {
        // Inicia el temporizador cuando se hace clic en la primera carta
        const timer = setInterval(() => {
          setTiempoRestante((prevTiempo) => prevTiempo - 1);
        }, 1000);
        return () => clearInterval(timer);
      }
    }
  };

  useEffect(() => {
    if (tiempoRestante === 0) {
      // Detiene el temporizador cuando el tiempo llega a cero y marca el fin del juego
      setGameOver(true);
    }
  }, [tiempoRestante]);

  useEffect(() => {
    if (cartasSeleccionadas.length === 2) {
      const [index1, index2] = cartasSeleccionadas;
      const pokemon1 = pokemonData[index1];
      const pokemon2 = pokemonData[index2];
      if (pokemon1.id === pokemon2.id) {
        setPokemonData((prevPokemonData) => {
          const updatedPokemonData = [...prevPokemonData];
          updatedPokemonData[index1].matched = true;
          updatedPokemonData[index2].matched = true;
          return updatedPokemonData;
        });
      } else {
        const timer = setTimeout(() => {
          setPokemonData((prevPokemonData) => {
            const updatedPokemonData = [...prevPokemonData];
            updatedPokemonData[index1].matched = false;
            updatedPokemonData[index2].matched = false;
            return updatedPokemonData;
          });
          setCartasSeleccionadas([]);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [cartasSeleccionadas]);

  return (
    <div className="flex mx-auto flex-wrap bg-slate-599 gap-2 p-5">
      {gameOver ? (
        <h1 className="text-white text-center mt-8">¡JUEGO TERMINADO!</h1>
      ) : (
        pokemonData.map((pokemon, index) => (
          <Tarjeta
            key={index}
            nombre={pokemon.nombre}
            imagen={pokemon.imagen}
            volteada={pokemon.matched || cartasSeleccionadas.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))
      )}
      <div className="text-white text-center mt-8">Tiempo restante: {tiempoRestante}</div>
    </div>
  );
}
