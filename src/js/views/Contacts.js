import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faInbox, faLocationDot, faMagnifyingGlassChart, faPhone, faRecycle, faTrash, faVoicemail } from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function Contacts() {

	const { store, actions, setStore } = useContext(Context);
  const [show, setShow] = useState(false);
  const users = store.users;
  const photos = store.photos

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
  };

  const handleDelete = (id) => {
    let newList = store.users.filter( (user, i ) => { return user.id !== id})
    setStore({...store, users : newList})
    handleClose()
  }

  return (

    <> 
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Contact!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this friend?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>

    <section className="d-flex justify-content-center align-items-center bg-secondary" style={{ minHeight: '60vh'}}>

      <div style={{width:'100%', maxWidth: '800px'}}>
        <h2 className="fw-bolder text-white text-center mt-5 " >BEST FRIENDS LIST</h2>
        <div className=" my-5 p-5 rounded bg-white" >
          <ul className="list-unstyled mb-4">
            { users.length > 0 ? 
              ( users.map( (user, i) => { return (
                  <li className='p-4 border rounded d-flex align-items-center' key={user.id}>
                    <div>
                      <img src={`https://picsum.photos/id/${user.id}/100/100`} className="me-3 rounded-circle" />
                    </div>
                    <div className="contact-details me-auto">
                      <p className="h5 fw-bold">{ user.name }</p>
                      <p className="h6 text-black-50 fw-light"><FontAwesomeIcon icon={faLocationDot} className="me-2"/>{ user.address.street }</p>
                      <p className="h6 text-black-50 fw-light"><FontAwesomeIcon icon={faInbox} className="me-2"/>{ user.email }</p>
                      <p className="h6 text-black-50 fw-light"><FontAwesomeIcon icon={faPhone} className="me-2"/>{ user.phone }</p>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faTrash} className="me-3" onClick={ () => handleShow(user.id) } />
                      <FontAwesomeIcon icon={faEdit} className="" />
                    </div>
                  </li>
                )})) : 
              (<h3 className="text-center">No friens yet!</h3>)}
          </ul>
          
        </div>
      </div>
    </section>

    </>
  )

}
