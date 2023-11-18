import React, { useContext } from "react";
import { Context } from "../store/appContext";


export default function Contacts() {

	const { store, actions } = useContext(Context);
  
  const users = store.users;
  console.log('data type: ', Array.isArray(users)); 
  console.log('data: ', users) 
  

  return (
  <section className="d-flex justify-content-center align-items-center bg-secondary" style={{ minHeight: '60vh'}}>

    <div style={{width:'100%', maxWidth: '800px'}}>
      <h2 className="fw-bolder text-white text-center mt-5 " >BEST FRIENDS LIST</h2>
      <div className=" my-5 p-5 rounded bg-white" >
        <ul className="list-unstyled">

          {users.map(user => <li className="border p-3" key={user.id}>{user.name}</li>)}
          
        </ul>
      </div>
    </div>
  </section>
  )

}
