import { useState, useEffect } from 'react'
import './App.css'
import GitHubCard from './components/GitHubCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GitHubCard />
    </>
  )
}

export default App
