import { useState, useEffect } from "react";

const CharactersRMall = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const charactersPerPage = 20; // cuantifi personajes en una página
      const targetCharacterCount = 200; // cuantifi personajes que quieres
      const totalPages = Math.ceil(targetCharacterCount / charactersPerPage);
      let allCharacters = [];

      for (let page = 1; page <= totalPages; page++) {
        const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
      }

      setCharacters(allCharacters.slice(0, targetCharacterCount));
    };

    fetchCharacters();
  }, []);

  return (
    <div className="contenadot">
      {characters.map(character => (
        <div className="cards" key={character.id}>
          <img className="imagen" src={character.image} alt="Personaje" />
          <p>{character.name}</p>
          <p>{character.status}</p>
          <p>{character.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default CharactersRMall;