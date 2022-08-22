import React, { useState } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom'

function AdminLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const navigate=useNavigate()


    async function AdminLogin(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:9000/admin/login', {
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
        if (data.admin) {

            localStorage.setItem('Admintoken', data.admin)
            toast("Login  Success ! ", { autoClose: 800 })
            // console.log(data);
            setError(null)
            navigate('/admin')
            // window.location.href='/dashboard'

        } else {
            setError("email or password is incorrect")
            // alert('PLease check your username and password')
        }
        console.log(data);

    }


    return (
        <div>
            <div className="  ">
                <div className="container mt-3">
                    <h2 className='text-center'>Admin Login</h2>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <form id="loginform" onSubmit={AdminLogin} >
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
                                 <input type="submit" value='Submit' className="btn btn-primary mt-3" />
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AdminLogin
