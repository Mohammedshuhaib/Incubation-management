import React from 'react'
import RecordList from '../../components/Admin/RecordList/RecordList'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function RecordListPage() {


  const navigate = useNavigate()



  const token = localStorage.getItem('Admintoken')

  useEffect(() => {
    if (!token) {
      navigate('/admin/login')
    }
  })




  return (
    <div className='row'>
      <div className=" ">
        <Sidebar />
      </div>
      <div className="  ms-4 ps-3 ">
        <RecordList />
      </div>
    </div>
  )
}

export default RecordListPage
