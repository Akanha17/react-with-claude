import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Home(){
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    function haldleSearch(username){
        navigate(`/github/${username}`);
    }
    return (
        <>
            <h1>Github Tracker</h1>
            <input type="text" placeholder="Enter GitHub username" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => haldleSearch(input)}>Search</button>
        </>
    )
}

export default Home