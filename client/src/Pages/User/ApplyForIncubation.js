import React, { useEffect } from 'react'
import ApplyForIncubation from '../../components/User/ApplyFOrIncubation/ApplyForIncubation'
import {useNavigate} from 'react-router-dom'
import Header from '../../components/User/Header/Header'

function ApplyForIncubationPage() {
    const navigate = useNavigate()

    const token = localStorage.getItem('Usertoken')

    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    })

  return (
    <div>
        <Header />
      <ApplyForIncubation />
    </div>
  )
}

export default ApplyForIncubationPage
