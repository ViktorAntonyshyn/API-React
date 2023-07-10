import { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";
import './PokemonCardsPopup.css';

const PokemonCardsPopup1 = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const P = new Pokedex();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await P.getPokemonsList({ limit: 200 });
        const pokemonUrls = response.results.map((pokemon) => pokemon.url);

        const pokemonDataPromises = pokemonUrls.map((url) =>
          P.getPokemonByName(url)
        );

        const allPokemonData = await Promise.all(pokemonDataPromises);
        setPokemonList(allPokemonData);
      } catch (error) {
        console.log(error);
      }
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
          data-tooltip={`Me llaman ${pokemon.name.toUpperCase()} y mi ID es "${pokemon.id}"`}
        >
          <p className="id">ID: {pokemon.id}</p>
          <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="info">
            <p className="pokemon-name">Nombre: <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCardsPopup1;