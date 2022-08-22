import React, { useEffect } from 'react'
 import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'
import { decodeToken } from "react-jwt";


function Header() {
  
  const token = localStorage.getItem('Usertoken')

  const navigate = useNavigate()

  const user = decodeToken(token)
  console.log(user);


 


  const handleLogin = () => {  
    if (token) {
      localStorage.removeItem('Usertoken')
      navigate('/login')
    } else {
      navigate('/login')
    }
  }



  return (
    <div>
      <Navbar bg="light" expand="lg">
           <Navbar.Brand className='ms-3' >--</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>            
            </Nav>  
            <Nav className=" float-end me-3">
             {  token && <Nav.Link onClick={()=>user.isSubmitted ?' ' : navigate('/apply/incubation')} >{user.isSubmitted ?' Application Submitted' : 'Apply For Incubation'}  </Nav.Link>}

              <Nav.Link onClick={handleLogin}>{token ? 'LogOut' : 'Login'}</Nav.Link>  
            </Nav>

          </Navbar.Collapse>
       </Navbar>

    </div>
  )
}

export default Header
