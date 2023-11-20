import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function CreateContact() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (

    <div className="d-flex justify-content-center align-items-center bg-dark p-5" style={{minHeight:'80vh'}}>
      <form onSubmit={handleSubmit} className="rounded p-5 bg-white" style={{width:'100%', maxWidth:'800px'}}>
        <h2 className="text-center">Create a new contact</h2>
        <label>Full Name</label>
        <input type="text" id="" className="w-100 p-2 rounded border-1 border-light mb-3"/>
        <label>Email</label>
        <input type="email" id="" className="w-100 p-2 rounded border-1 border-light mb-3"/>
        <label>Phone</label>
        <input type="number" id="" className="w-100 p-2 rounded border-1 border-light mb-3"/>
        <label>Address</label>
        <input type="text" id="" className="w-100 p-2 rounded border-1 border-light mb-3"/>
        <button className="btn btn-primary d-block mb-2" onClick={handleSubmit}> Add Contact </button>
        <Link to="/" >Go Back to contact list</Link>
      </form>
    </div>

  )
}
