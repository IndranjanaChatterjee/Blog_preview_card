import { useState } from 'react'

import './App.css'
import Card from './Components/Card'
import Attribution from './Components/Attribution'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card/>
      <Attribution/>
    </>
  )
}

export default App
