import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import User from '../../../contexts/userContext';


function Login() {


  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  // const {user,setUser} = useContext({})



  async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:9000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()
    if (data.user) {

      localStorage.setItem('Usertoken', data.user)
      toast("Login  Success ! ",{autoClose:800})
      // console.log(data);
      setError(null)
      navigate('/')
      // window.location.href='/dashboard'

    } else {
      setError("email or password is incorrect")
      // alert('PLease check your username and password')
    }
    console.log(data);

  }


  // useEffect(() => {
  //     if (User) {
  //         navigate('/')
  //     }
  //  }, [])

  return (
    <div>
      <div className="  ">
        <div className="container mt-3">
          <h2 className='text-center'> Login</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <form id="loginform" onSubmit={loginUser} >
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    value={email}
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small id="emailHelp" className="text-danger form-text">

                  </small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    value={password}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {error}
                  </small>

                </div>
                <a className='float-end' onClick={() => { navigate('/signup') }}>SignUp</a>
                <input type="submit" value='Submit' className="btn btn-primary mt-3" />
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login
