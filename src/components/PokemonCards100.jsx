import { useState, useEffect } from "react";

const PokemonCards100 = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const limit = 100;
      const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const pokemonUrls = data.results.map((pokemon) => pokemon.url);

      const pokemonDataPromises = pokemonUrls.map(async (url) => {
        const pokemonResponse = await fetch(url);
        const pokemonData = await pokemonResponse.json();
        return pokemonData;
      });

      const allPokemonData = await Promise.all(pokemonDataPromises);
      setPokemonList(allPokemonData);
    };

    fetchData();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon) => (
        <div className="pokemon-card" key={pokemon.id}>
          <img
            className="pokemon-image"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <p className="pokemon-name">Nombre: <br /> {pokemon.name}</p>
          <p className="size">ID: {pokemon.id}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonCards100;