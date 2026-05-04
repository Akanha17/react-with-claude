import { useState, useEffect } from 'react'
import './App.css'
import GitHubCard from './components/GitHubCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <GitHubCard />
    </>
  )
}

export default App
