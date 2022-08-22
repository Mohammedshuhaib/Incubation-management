import React  from 'react'

import AdminLogin from '../../components/Admin/Login/Login'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



function AdminLoginPage() {

  const navigate = useNavigate()



  const token = localStorage.getItem('Admintoken')

  useEffect(() => {
    if (token) {
      navigate('/admin')
    }
  })


  return (
    <div>
      <AdminLogin />
    </div>
  )
}

export default AdminLoginPage
