import { useState } from 'react'
import './App.css'
import CharactersRM from './components/CharactersRM'
import CharactersRMall from './components/CharactersRMall'

function App() {
  return (
    <>

      <p className="read-the-docs">
        CARDS
      </p>
     <div>
      < CharactersRMall />
     </div>
    </>
  )
}

export default App
