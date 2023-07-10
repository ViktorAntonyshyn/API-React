import React, { useState } from "react";
import './CharacterCardsHP.css'

const CharacterCardsHPpu = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null); 

  const fetchCharacters = async () => {
    const apiUrl = "https://hp-api.onrender.com/api/characters";
    const response = await fetch(apiUrl);
    const data = await response.json();
    setCharacters(data);
  };

  const handleCardClick = (name, gender, species, house) => {
    setSelectedCharacter(name); // Set selectedCharacter por personaje
    //alert(`Character: ${name}\nGender: ${gender}\nSpecies: ${species}\nHouse: ${house}`);
    
    setTimeout(() => {
    setSelectedCharacter(null); 
    }, 3000); //Tiempo a volver push-up
  };

  return (
    <div className="containet-all">
      <button className="button" onClick={fetchCharacters}>DESCARGAR PERSONAJES</button>
    
      <div className="character-cards">
        {characters.map((character) => (
          <div
            className={`card ${selectedCharacter === character.name ? "selected" : ""}`} 
            key={character.name}
            onClick={() => handleCardClick(character.name)} 
            data-tooltip={`Nombre: ${character.name}\nGénero: ${character.gender}\nEspecies: ${character.species}\nEscuela: ${character.house}`}>
            <p><span>Gender:&nbsp;</span>{character.gender}</p>
            <img className="character-image" src={character.image} alt={character.name} />
            <p className="character-info">{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCardsHPpu;