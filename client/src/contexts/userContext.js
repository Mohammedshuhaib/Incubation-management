import React,{ createContext, useState } from 'react'

 

export const UserContext = createContext(null)


function   User({ children }) {
    const [User, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ User, setUser }}>
            {children}
        </ UserContext.Provider>
    )
}

export default User
