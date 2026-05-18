import { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [userName, setUserName] = useState('Akanha17');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
}