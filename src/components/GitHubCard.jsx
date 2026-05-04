import { useState, useEffect } from 'react'

function GitHubCard() {
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState('Akanha17');
    useEffect(() => {
        // fetch('https://api.github.com/users/octocat')
        //     .then(response => response.json())
        //     .then(data => setUserData(data))
        //     .catch(error => console.error('Error fetching data:', error));
        async function fetchData() {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}`);
                const data = await response.json();
                setUserData(data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="github-card">
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
    );
}

export default GitHubCard;