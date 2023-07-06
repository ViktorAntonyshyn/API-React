import { useState } from 'react'
import './App.css'
import CharactersRM from './components/CharactersRM'
import CharactersRMTodos from './components/CharactersRMTodos'
import CharactersRM200 from './components/CharactersRM200'

function App() {
  return (
    <>

      <p className="read-the-docs">
        CARDS
      </p>
     <div>
      < CharactersRM200 />
     </div>
    </>
  )
}

export default App
