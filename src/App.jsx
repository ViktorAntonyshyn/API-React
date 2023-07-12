import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import CharactersRM from './components/CharactersRM'
import CharactersRMTodos from './components/CharactersRMTodos'
import CharactersRM200 from './components/CharactersRM200'
import PokemonCards from './components/PokemonCards100'
import PokemonCardsPopup from './components/PokemonCardsPopup'
import Footer from './Components/Footer'

function App() {
  return (
    <>
     < Head/>
      {/* <p className="read-the-docs">
        POKEMON CARDS
      </p> */}
     <div>
      < PokemonCardsPopup />
     </div>
     < Footer/>
    </>
  )
}

export default App
