import React, { useState } from "react";
import './CharacterCards.css'


const CharacterCards = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const apiUrl = "https://hp-api.onrender.com/api/characters";
    const response = await fetch(apiUrl);
    const data = await response.json();
    setCharacters(data);
  };

  const handleCardClick = (name, gender) => {
    alert(`Character: ${name}\nGender: ${gender}`);
  };

  return (
    <div>
      <button onClick={fetchCharacters}>Load Characters</button>
    <div className="character-container">
        <div className="character-cards">{characters.map((character) => (
          <div className="character-card" key={character.name}
            onClick={() => handleCardClick(character.name, character.gender)}>
            <p>Gender: {character.gender}</p>
            <img className="character-image" src={character.image} alt={character.name}/>
            <p className="character-info">{character.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CharacterCards;