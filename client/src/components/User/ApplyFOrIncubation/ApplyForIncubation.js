import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { decodeToken } from "react-jwt";


function ApplyForIncubation() {


    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const token = localStorage.getItem('Usertoken')
    const user = decodeToken(token)
    console.log(user.id);


    useEffect(() => {
        console.log(token.id);
        if (token) {

            if (!user) {
                localStorage.removeItem('UserToken')
                navigate('/login')
            } else {
                console.log(user);
            }
        }
    }, [])



    async function apply(event) {
        event.preventDefault()

        const response = await fetch(`http://localhost:9000/incubation/application/${user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })

        const data = await response.json()
        console.log(data);
        if (data.status === 200) {
            navigate('/')
            toast.success(" Application submitted Successfully ", { autoClose: 500 })
        } else {
            alert('Something went wrong please try again')
        }

    }

    return (
        <div className="container   col-md-6 card">
            <form onSubmit={apply}>
                {/* <p>{form ? form.name : "uiu"}</p> */}
                <h3>Application For Incubation</h3>
                <div className="row">
                    <div className="mb-3 col-6">
                        <label>Name</label>
                        <input
                            required
                            value={form.name}
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </div>

                    <div className="mb-3 col-6">
                        <label>Address</label>
                        <input
                            required
                            value={form.address}
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                            // onChange={(e) => setForm(e.target.value)}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <label>City</label>
                        <input
                            required
                            value={form.city}
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            // onChange={(e) => setForm(e.target.value)}
                            onChange={(e) => setForm({ ...form, city: e.target.value })}
                        />
                    </div>

                    <div className="mb-3 col-6">
                        <label>State</label>
                        <input
                            required
                            value={form.state}
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                            // onChange={(e) => setForm(e.target.value)}
                            onChange={(e) => setForm({ ...form, state: e.target.value })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <label>Email</label>
                        <input
                            required
                            value={form.email}
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            // onChange={(e) => setForm(e.target.value)}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    <div className="mb-3 col-6">
                        <label>Phone no</label>
                        <input
                            required
                            value={form.phone}
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                            // onChange={(e) => setForm(e.target.value)}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-6">
                        <label>Company Name</label>
                        <input
                            required
                            value={form.companyName}
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            // onChange={(e) => setForm(e.target.value)}
                            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        />
                    </div>

                    {/* <div className="mb-3 col-6">
                        <input type="file" />
                    </div> */}
                </div>
                <div className="mb-3 ">
                    <label>Describe Your Team and Background</label>
                    <textarea
                        required
                        value={form.teamAndBackground}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, teamAndBackground: e.target.value })}
                    />
                </div>
                <div className="mb-3 ">
                    <label>Describe Your Company and Products</label>
                    <textarea
                        required
                        value={form.companyAndProducts}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, companyAndProducts: e.target.value })}
                    />
                </div>
                <div className="mb-3 ">
                    <label>Describe the problem you are trying to solve</label>
                    <textarea
                        required
                        value={form.solvingProblem}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, solvingProblem: e.target.value })}

                    />
                </div>
                <div className="mb-3 ">
                    <label>What is unique about your solution </label>
                    <textarea
                        required
                        value={form.uniqueness}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, uniqueness: e.target.value })}

                    />
                </div>
                <div className="mb-3 ">
                    <label> what is your value proposition for the customer</label>
                    <textarea
                        required
                        value={form.valueProposition}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, valueProposition: e.target.value })}

                    />
                </div>
                <div className="mb-3 ">
                    <label>Who are your competitors and what is your competative advantage ?</label>
                    <textarea
                        required
                        value={form.competitors}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, competitors: e.target.value })}

                    />
                </div>
                <div className="mb-3 ">
                    <label>Explain your revenue model</label>
                    <textarea
                        required
                        value={form.revenueModel}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, revenueModel: e.target.value })}

                    />
                </div>
                <div className="mb-3 ">
                    <label>What is the potential market size of the product ?</label>
                    <textarea
                        required
                        value={form.marketSize}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, marketSize: e.target.value })}

                    />
                </div>
                <div className="mb-3 ">
                    <label>How do you market or plan to market your product and services </label>
                    <textarea
                        required
                        value={form.marketing}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setForm(e.target.value)}
                        onChange={(e) => setForm({ ...form, marketing: e.target.value })}

                    />
                </div>
                <div>
                    <p>Types of incubation needed</p>
                    <div class="form-check mv-3" >
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='physical'
                            onClick={(e) => setForm({ ...form, type: e.target.value })}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Physical Incubation
                        </label>
                    </div>
                    <div class="form-check mb-4">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='virtual'
                            onClick={(e) => setForm({ ...form, type: e.target.value })}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Virtual Incubation
                        </label>
                    </div>
                </div>
                <div className="mb-3 ">
                    <label>Upload a detailed bussiness proposal</label>
                    <textarea
                        required
                        value={form.bussinessProposal}
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => console.log(form)}
                        onChange={(e) => setForm({ ...form, bussinessProposal: e.target.value })}

                    />
                </div>
                <div className="d-grid" >
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>


        </div>
    )
}

export default ApplyForIncubation
