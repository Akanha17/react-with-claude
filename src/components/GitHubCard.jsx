import { useState, useEffect } from 'react'

function GitHubCard() {
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState('Akanha17');
    const [searchInput, setSearchInput] = useState('');
    
    useEffect(() => {
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
        <>
            <div className="input">
                <input type='text' placeholder='Enter GitHub username' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button onClick={() => setUserName(searchInput)}>Search</button>
            </div>
            <div className="github-card">
                <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                <h2>{userData.name}</h2>
                <p>{userData.bio}</p>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
        </>
    );
}

export default GitHubCard;