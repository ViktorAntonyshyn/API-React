import { useState } from 'react'
import './App.css'
import Characters from './components/Characters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <p className="read-the-docs">
        CARDS
      </p>
     <div>
      < Characters />
     </div>
    </>
  )
}

export default App
