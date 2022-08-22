import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


import 'jquery/dist/jquery.min.js';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

import '../Home/Home.css'

import { Button, Modal } from 'react-bootstrap';


// import {ApplicationContext} from '../../../contexts/applicationContext'

// import {Application} from '../../../contexts/applicationContext';
import { ApplicationContext } from '../../../contexts/applicationContext';
// import Modal from 'bootstrap';

function Home() {

  const navigate = useNavigate()

  const [newApplicantsList, setNewApplicantsList] = useState([])
  const [pendingApplicantsList, setPendingApplicantsList] = useState([])

  const { ViewApplications, setViewApplications } = useContext(ApplicationContext)
  let list, newApplicants, index = 1, pendingList

  useEffect(() => {
    // console.log('use effect');
    console.log(ViewApplications);
    displayUsers()
  }, [pendingApplicantsList])

  async function displayUsers() {
    const req = await fetch('http://localhost:9000/admin/applicants/list')

    const response = await req.json()

    list = response.data



    // console.log(list);
    newApplicants = list.filter((item) => {
      return item.status === 'new'
    })


    pendingList = list.filter((item) => {
      return item.status === 'pending'
    })


    setNewApplicantsList(newApplicants)
    setPendingApplicantsList(pendingList)
    // console.log(newApplicantsList);




  }



  $(document).ready(function () {
    setTimeout(function () {
      $('#example').DataTable();
    }, 1000);
  });

  $(document).ready(function () {
    setTimeout(function () {
      $('#pending').DataTable();
    }, 1000);
  });



  const handleOpen = (details) => {
    //  console.log(details);   
    setViewApplications(() => {
      return details
    })
    console.log(8377873488343943);
    console.log(ViewApplications);
    navigate('/admin/view/application')

  }

  // modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState()

  //add to pending

  const changeStatus = async (id, status) => {
    console.log(id);
    const response = await fetch(`http://localhost:9000/admin/user/status/change?id=${id}&status=${status}`)
    const data = await response.json()
    console.log(data);
    setNewApplicantsList(newApplicantsList)

  }


  return (
    <div className='ms-5'>


      {/* modal */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application For Incubation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {form &&
            <div>

              <div className="row">
                <div className="mb-3 col-6">
                  <label>Name</label>
                  <input
                    readOnly
                    value={form.name}
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  // onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="mb-3 col-6">
                  <label>Address</label>
                  <input
                    readOnly
                    value={form.address}
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-6">
                  <label>City</label>
                  <input
                    readOnly
                    value={form.city}
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>

                <div className="mb-3 col-6">
                  <label>State</label>
                  <input
                    readOnly
                    value={form.state}
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, state: e.target.value })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-6">
                  <label>Email</label>
                  <input
                    readOnly
                    value={form.email}
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="mb-3 col-6">
                  <label>Phone no</label>
                  <input
                    readOnly
                    value={form.phone}
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-6">
                  <label>Company Name</label>
                  <input
                    readOnly
                    value={form.companyName}
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  // onChange={(e) => setForm(e.target.value)}
                  // onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  />
                </div>


              </div>
              <div className="mb-3 ">
                <label>Question : Describe Your Team and Background</label>
                <textarea
                  readOnly
                  value={form.teamAndBackground}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, teamAndBackground: e.target.value })}
                />
              </div>
              <div className="mb-3 ">
                <label>Question : Describe Your Company and Products</label>
                <textarea
                  readOnly
                  value={form.companyAndProducts}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, companyAndProducts: e.target.value })}
                />
              </div>
              <div className="mb-3 ">
                <label>Question : Describe the problem you are trying to solve</label>
                <textarea
                  readOnly
                  value={form.solvingProblem}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, solvingProblem: e.target.value })}

                />
              </div>
              <div className="mb-3 ">
                <label>Question : What is unique about your solution </label>
                <textarea
                  readOnly
                  value={form.uniqueness}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, uniqueness: e.target.value })}

                />
              </div>
              <div className="mb-3 ">
                <label>Question :  what is your value proposition for the customer</label>
                <textarea
                  readOnly
                  value={form.valueProposition}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, valueProposition: e.target.value })}

                />
              </div>
              <div className="mb-3 ">
                <label>Question : Who are your competitors and what is your competative advantage ?</label>
                <textarea
                  readOnly
                  value={form.competitors}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, competitors: e.target.value })}

                />
              </div>
              <div className="mb-3 ">
                <label>Question : Explain your revenue model</label>
                <textarea
                  readOnly
                  value={form.revenueModel}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, revenueModel: e.target.value })}

                />
              </div>
              <div className="mb-3 ">
                <label>Question : What is the potential market size of the product ?</label>
                <textarea
                  readOnly
                  value={form.marketSize}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, marketSize: e.target.value })}

                />
              </div>
              <div className="mb-3 ">
                <label>Question : How do you market or plan to market your product and services </label>
                <textarea
                  readOnly
                  value={form.marketing}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => setForm(e.target.value)}
                // onChange={(e) => setForm({ ...form, marketing: e.target.value })}

                />
              </div>
              <label>Question : Type of Incubation</label>
              <textarea
                value={form.type}
                type="text"
                className="form-control"
                placeholder="Enter email"
                readOnly
              // onChange={(e) => setForm(e.target.value)}
              // onChange={(e) => setForm({ ...form, marketing: e.target.value })}

              />
              <div>

              </div>
              <div className="mb-3 ">
                <label>Question : Upload a detailed bussiness proposal</label>
                <textarea
                  readOnly
                  value={form.bussinessProposal}
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                // onChange={(e) => console.log(form)}
                // onChange={(e) => setForm({ ...form, bussinessProposal: e.target.value })}

                />
              </div>

            </div>
          }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>






      <div className="header">
        <h3 className='mb-5'>DASHBOARD</h3>
      </div>
      <h3 className="mt-5 text-center">NEW APPLICANT LIST</h3>
      {/* <NewApplicants newApplicants={newApplicants} /> */}
      {newApplicantsList &&
        <div className="MainDiv">
          <div className="jumbotron text-center">
            <h3></h3>
          </div>

          <div className="container tableContainer   shadow p-5">
            {/* <input type="button" className='btn btn-success mb-5' value="Add New User" onClick={()=>navigate('/admin/user/add')} /> */}

            <table id="example" className=" table table-hover table-bordered table-responsive">
              <thead>
                <tr>
                  <th></th>
                  <th>Company Name</th>
                  <th>Company Details</th>
                  <th></th>
                  <th></th>
                  {/* <th> </th> */}
                </tr>
              </thead>
              <tbody>
                {newApplicantsList.map((result) => {
                  return (

                    <tr>
                      <td> {index++}</td>
                      <td>{result.companyName}</td>
                      <td>
                        <label>Address :{result.address}</label><br />
                        <label htmlFor="">Email :{result.email}</label><br />
                        <label htmlFor="">Phone :{result.phone}</label><br />
                      </td>
                      <td>
                        <input type="button" className='btn btn-primary' value='Open'
                          // onClick={() => {
                          //   handleOpen(result)handleShow
                          // }}
                          onClick={() => {
                            setForm(result)
                            handleShow()
                          }}
                        />
                      </td>
                      <td>
                        <input type="button" className='btn btn-secondary' value='Add To Pending'
                          onClick={() => {
                            let status = "pending"
                            changeStatus(result._id, status)
                          }}
                        />
                      </td>



                      {/* <td>{result.username}</td> */}
                      {/* <td><input type='button' className='btn-primary' onClick={() => handleEdit(result._id, result.name, result.email)} value='Edit' /> </td> */}
                      {/* <td> <input type='button' className='  btn-danger ' onClick={() => handleDelete(result._id)} value='Delete' /> </td> */}
                    </tr>

                  )
                })}


              </tbody>
            </table>

          </div>
        </div>}
      <h3 className="mt-5 text-center">PENDING APPLICANT LIST</h3>
      {/* <NewApplicants newApplicants={newApplicants} /> */}
      {pendingApplicantsList &&
        <div className="MainDiv">
          <div className="jumbotron text-center">
            <h3></h3>
          </div>

          <div className="container tableContainer   shadow p-5">
            {/* <input type="button" className='btn btn-success mb-5' value="Add New User" onClick={()=>navigate('/admin/user/add')} /> */}

            <table id="pending" className="table table-hover table-bordered table-responsive">
              <thead>
                <tr>
                  <th></th>
                  <th>Company Name</th>
                  <th>Company Details</th>
                  <th></th>
                  <th></th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {pendingApplicantsList.map((result) => {
                  return (

                    <tr>
                      <td> {index++}</td>
                      <td>{result.companyName}</td>
                      <td>
                        <label>Address :{result.address}</label><br />
                        <label htmlFor="">Email :{result.email}</label><br />
                        <label htmlFor="">Phone :{result.phone}</label><br />
                      </td>
                      <td>
                        <input type="button" className='btn btn-primary' value='Open'
                          // onClick={() => {
                          //   handleOpen(result)
                          // }}
                          onClick={() => {
                            setForm(result)
                            handleShow()
                          }}
                        />
                      </td>
                      <td>
                        <input type="button" className='btn btn-success' value='Approve'
                          onClick={() => {
                            let status = "approved"
                            changeStatus(result._id, status)
                          }} />
                      </td>
                      <td>
                        <input type="button" className='btn btn-danger' value='Reject'
                          onClick={() => {
                            let status = "rejected"
                            changeStatus(result._id, status)
                          }} />
                      </td>


                      {/* <td>{result.username}</td> */}
                      {/* <td><input type='button' className='btn-primary' onClick={() => handleEdit(result._id, result.name, result.email)} value='Edit' /> </td> */}
                      {/* <td> <input type='button' className='  btn-danger ' onClick={() => handleDelete(result._id)} value='Delete' /> </td> */}
                    </tr>

                  )
                })}


              </tbody>
            </table>

          </div>
        </div>}
    </div>
  )
}

export default Home
