import React,{useEffect} from 'react'
import BookingSlots from '../../components/Admin/BookingSlots/BookingSlots'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'

function BookingSlotsPage() {

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
                <BookingSlots />
            </div>
        </div>
    )
}

export default BookingSlotsPage
