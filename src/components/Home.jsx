import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import './Home.css'

function Home(){
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const {setUserName} = useContext(UserContext);
    function handleSearch(){
        setUserName('');
        navigate(`/github/${input}`);
    }
    return (
        <div className="home-container">
        <h1>🐙 GitHub Tracker</h1>
        <p>Search any GitHub profile instantly</p>
        <div className="search-box">
        <input 
            type="text" 
            placeholder="Enter GitHub username" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
        </div>
    </div>
    )
}

export default Home