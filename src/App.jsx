import './App.css'
import GitHubCard from './components/GitHubCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/github" element={<GitHubCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/github/:username" element={<GitHubCard></GitHubCard>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
