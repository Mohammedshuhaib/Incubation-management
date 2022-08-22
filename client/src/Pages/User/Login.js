import React, { useEffect } from 'react'
import Login from '../../components/User/Login/Login'
import Header from '../../components/User/Header/Header'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
    const token = localStorage.getItem('Usertoken')
    const navigate = useNavigate()

    useEffect(()=>{
        if(token){
            navigate('/')
        }
    })

    return (
        <div>
            <Header />
            <Login />
        </div>
    )
}

export default LoginPage
