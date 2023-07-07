import { useState } from 'react'
import './App.css'
import CharactersRM from './components/CharactersRM'
import CharactersRMTodos from './components/CharactersRMTodos'
import CharactersRM200 from './components/CharactersRM200'
import PokemonCards from './components/PokemonCards100'
import PokemonCardsPopup from './components/PokemonCardsPopup'

function App() {
  return (
    <>

      {/* <p className="read-the-docs">
        POKEMON CARDS
      </p> */}
     <div>
      < PokemonCardsPopup />
     </div>
    </>
  )
}

export default App
