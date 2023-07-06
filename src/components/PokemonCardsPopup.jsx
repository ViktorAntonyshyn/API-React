import { useState, useEffect } from "react";
import './PokemonCardsPopup.css';

const PokemonCardsPopup = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

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

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);

    setTimeout(() => {
      setSelectedPokemon(null);
    }, 2000);
  };

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon) => (
        <div
          className={`pokemon-card ${selectedPokemon === pokemon ? 'selected' : ''}`}
          key={pokemon.id}
          onClick={() => handleCardClick(pokemon)}
          data-tooltip={`Nombre: ${pokemon.name} | ID: ${pokemon.id}`}
        >
          <p className="size">ID: {pokemon.id}</p>
          <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="info">
            <p className="pokemon-name">Nombre: <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCardsPopup;