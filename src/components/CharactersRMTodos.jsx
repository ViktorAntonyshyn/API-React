import { useState, useEffect } from "react";

const CharactersRMTodos = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let allCharacters = [];
      let nextPage = 1;

      do {
        const apiUrl = `https://rickandmortyapi.com/api/character?page=${nextPage}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        allCharacters = allCharacters.concat(data.results);
        nextPage = data.info.next ? extractPageNumber(data.info.next) : null;
      } while (nextPage);

      setCharacters(allCharacters);
    };

    fetchData();
  }, []);

  const extractPageNumber = (url) => {
    const regex = /page=(\d+)/;
    const match = url.match(regex);
    return match ? parseInt(match[1]) : null;
  };

  return (
    <div className="contenadot">
      {characters.map((character) => (
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

export default CharactersRMTodos;