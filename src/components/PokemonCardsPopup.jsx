import { useState } from "react";
import { useEffect } from "react";
/* import { useState, useEffect } from "react"; // manera para usar todos juntos*/
import './PokemonCardsPopup.css';

const PokemonCardsPopup = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // o useState() - lo mismo

  useEffect(() => {
    const fetchData = async () => {   // async - asyncrono funcione
      const limit = 200; // que qieres personajes
      const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`; //?limit=${limit} - cortar lista
      const response = await fetch(apiUrl);  //await - espera cuando funcoina acaba (Promis-promesa-обіцянка)
      const data = await response.json();
      const pokemonUrls = data.results.map((pokemon) => pokemon.url);

      const pokemonDataPromises = pokemonUrls.map(async (url) => { 
        const pokemonResponse = await fetch(url);
        const pokemonData = await pokemonResponse.json();
        return pokemonData;
      });

      const allPokemonData = await Promise.all(pokemonDataPromises); // Promise - este espera "await" para continuar funccione
      setPokemonList(allPokemonData);
    };

    fetchData();
  }, []);

  const handleCardClick = (pokemon) => {  // Click and push-up
    setSelectedPokemon(pokemon);

    setTimeout(() => {
      setSelectedPokemon(null); // o setSelectedPokemon()
    }, 2000); //Tiempo a volver push-up
  };

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon) => (
        <div className={`pokemon-card ${selectedPokemon === pokemon ? 'selected' : ''}`} //'selected' added className
          key={pokemon.id} //key
          onClick={() => handleCardClick(pokemon)}  // Click for push-up
          data-tooltip={`Me llaman ${pokemon.name.toUpperCase()} y mi ID es "${pokemon.id}"`} //Texto en push-up
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

export default PokemonCardsPopup;