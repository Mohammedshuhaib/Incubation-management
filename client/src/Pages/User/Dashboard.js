import React, { useEffect } from 'react'
 import { useNavigate } from 'react-router-dom'
//  import Dashboard from '../../components/Admin/Dashboard/Dashboard'
import Home from '../../components/User/Home/Home'
//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
import Header from '../../components/User/Header/Header'


function DashboardPage() {
    const token = localStorage.getItem('Usertoken')
    const navigate = useNavigate()

    useEffect(()=>{
        if(! token){
            navigate('/login')
        }
    },[])
    return (
        <div>
            <Header />
             <Home /> 
        </div>
    )
}

export default DashboardPage
