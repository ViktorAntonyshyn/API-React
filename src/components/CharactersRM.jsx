import { useState } from "react";
import { useEffect } from "react";

    const CharactersRM = () => {
    const [characters, setCharacters] = useState([])

    useEffect( () => {
    const apiUrl = 'https://rickandmortyapi.com/api/character'
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseData => {
        let data = responseData.results
        console.log(data)
        setCharacters(data)
    })
}, [])

return (
    <div className="contenadot">
    {
        characters.map( character =>
            <div className="cards" key={character.id}>
                <img className="imagen" src={character.image} alt="Personaje" />
                <p>{character.name}</p>
                <p>{character.status}</p>
                <p>{character.gender}</p>
            </div>
            )
    }
    </div>
)
}

export default CharactersRM