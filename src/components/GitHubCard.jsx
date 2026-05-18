import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import './GitHubCard.css'

function GitHubCard() {
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    // const [userName, setUserName] = useState(username || 'Akanha17');
    const [searchInput, setSearchInput] = useState('');
    const { userName , setUserName} = useContext(UserContext);

    useEffect(() => {
        if(username){
            setUserName(username);
        }
        // fetch('https://api.github.com/users/octocat')
        //     .then(response => response.json())
        //     .then(data => setUserData(data))
        //     .catch(error => console.error('Error fetching data:', error));
        async function fetchData() {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}`, {
                    headers: {
                        'authorization': `token ${import.meta.env.VITE_GITHHUB_TOKEN}`
                    }
                });
                const data = await response.json();
                setUserData(data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchData();
    }, [userName]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='github-card-container'>
            <div className="input">
                <input type='text' className="input-field" placeholder='Enter GitHub username' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button class="button" onClick={() => setUserName(searchInput)}>Search</button>
            </div>
            <div className="github-card">
                <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                <h2>{userData.name}</h2>
                <p>{userData.bio}</p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                <div className="stats">
                <div className="stat">
                    <h3>{userData.public_repos}</h3>
                    <p>Repos</p>
                </div>
                <div className="stat">
                    <h3>{userData.followers}</h3>
                    <p>Followers</p>
                </div>
                <div className="stat">
                    <h3>{userData.following}</h3>
                    <p>Following</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default GitHubCard;