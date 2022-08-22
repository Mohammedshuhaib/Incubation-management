import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from "react-jwt";

function Home() {

    const navigate = useNavigate()
    const token = localStorage.getItem('UserToken')
    // console.log(token);
    if (token) {
        const user = decodeToken(token)
        if (!user) {
            localStorage.removeItem('UserToken')
            navigate('/login')
        } else {
            console.log(user);
        }
    }

    useEffect(() => {

    }, [])
    return (
        <div>
            home
        </div>
    )
}

export default Home
