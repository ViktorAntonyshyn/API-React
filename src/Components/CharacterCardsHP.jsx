import React, { useState } from "react";
import './CharacterCardsHP.css'


const CharacterCardsHP = () => {
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
    <div className="containet-all">
      <button className="button" onClick={fetchCharacters}>CARGANDO PERSONAJES</button>
    
        <div className="character-cards">{characters.map((character) => (
          <div className="card" key={character.name}
            onClick={() => handleCardClick(character.name, character.gender)}>
            <p> <span>Gender:</span>  {character.gender}</p>
            <img className="character-image" src={character.image} alt={character.name}/>
            <p className="character-info">{character.name}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default CharacterCardsHP;