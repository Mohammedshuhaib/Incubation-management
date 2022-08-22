import React, { useState } from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
// import './SignUp.css'
import {   toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    async function registerUser(event) {
        event.preventDefault()
        console.log(483787348);

        const response = await fetch('http://localhost:9000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = await response.json()
        console.log(data);
        if (data.status === 200) {
              toastNot()
             navigate('/login')
        } else {
            toast("Some Error Occured ! Please Try Again")
        }

    }


    const toastNot = () => {
        toast("Registration Success ! Please LogIn")

    }


    return (
        <div className="container   col-md-6">
            <form onSubmit={registerUser}>
                 <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        value={name}
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        value={email}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        value={password}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-grid" >
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>


        </div>

    );
};

export default SignUp;