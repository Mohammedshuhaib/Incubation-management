import React, { useEffect } from 'react'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import Home from '../../components/Admin/Home/Home'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'

function AdminHomePage() {

    const token = localStorage.getItem('Admintoken')
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            const admin = decodeToken(token)
            if (!admin) {
                localStorage.removeItem('Admintoken')

            } else {
                console.log(admin);
            }
        } else {
            navigate('/admin/login')
        }
    })
    return (
        <div className='row'>
            <div className=" ">
                <Sidebar />
            </div>
            <div className="  ms-4 ps-3 ">
                <Home />
            </div>
        </div>
    )
}

export default AdminHomePage
