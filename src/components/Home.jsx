import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"

function Home(){
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const {setUserName} = useContext(UserContext);
    function handleSearch(){
        setUserName('');
        navigate(`/github/${input}`);
    }
    return (
        <>
            <h1>Github Tracker</h1>
            <input type="text" placeholder="Enter GitHub username" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => handleSearch(input)}>Search</button>
        </>
    )
}

export default Home