import React, { useState, useContext } from 'react'
import {Context} from '../store/GlobalContext'
import { Link } from 'react-router-dom'


export default function CreateContact() {

  const { store, actions} = useContext(Context)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [agenda, setAgenda] = useState('thelore85')


  const handleSubmit = (e) => {
    e.preventDefault()
    actions.addUser({ name, email, phone, address, agenda})
  }

  return (

    

    <div className=" bg-dark p-5 text-center" style={{minHeight:'80vh'}}>
        <div className="d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="rounded p-5 bg-white m-auto" style={{width:'100%', maxWidth:'800px'}}>
            <h2 className="text-center">Create a new contact</h2>
            <label htmlFor='name' >Name</label>
            <input type="text" id="name" className="w-100 p-2 rounded border-1 border-light mb-3" onChange={(event) => {setName(event.target.value)}}/>
            <label htmlFor="email" >Email</label>
            <input type="email" id="email" className="w-100 p-2 rounded border-1 border-light mb-3" onChange={(event) => {setEmail(event.target.value)}}/>
            <label>Phone</label>
            <input type="number" id="phone" className="w-100 p-2 rounded border-1 border-light mb-3" onChange={(event) => {setPhone(event.target.value)}}/>
            <label>Address</label>
            <input type="text" id="Address" className="w-100 p-2 rounded border-1 border-light mb-3" onChange={(event) => {setAddress(event.target.value)}}/>
            <button className="btn btn-primary d-block mb-2" onClick={handleSubmit}> Add Contact </button>
            <Link to="/contacts" >Go Back to contact list</Link>
          </form>
        </div>
    </div>

    

  )
}
