import { Link, useParams } from 'react-router-dom';
import React, {useContext, useEffect} from "react";
import { Context } from '../store/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



export default function StarshipDetails() {
  
  let { userId } = useParams();
  const { store, actions } = useContext(Context)

  const details = store.details.result;
  console.log(details)

  // Funzione per formattare la data
  const formatData = (data) => {
    const dataFormattata = new Date(data);
    return dataFormattata.toLocaleDateString(); // Modifica la formattazione secondo le tue esigenze
  };
  

  useEffect( ()=>{
    const url = `https://www.swapi.tech/api/starships/${userId}`;
    actions.getDetails(url)
  },[])



  return (
    <section className="d-flex justify-content-center align-items-center bg-black p-2" style={{ minHeight: '100vh'}}>
      <div className="container">

        <h1 className="text-white mb-4"> {details ? (details.properties.model) : null} </h1>

        <div id="home" className="frame mb-5 p-2 bg-black row" style={{ border:" 7px solid #ffc107", borderRadius:"25px"}}>

          <div className="col-md-6 py-2">
            <li className='align-items-center list-unstyled rounded bg-light' >
              <div className="mb-3">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${userId}.jpg`} className="me-3 w-100 shadow-sm rounded-top" />
              </div>
              <div className="p-3 text-secondary small">
              <p className="mb-0"><strong>Type:</strong> {details ? (details.description) : null}</p>
              <p className="mb-3"><strong>Name:</strong> {details ? (details.properties.model) : null} </p>
              <div className="d-flex">
                </div>
              </div>
            </li>
          </div>

          <div className=' col-md-6 py-2'>
            <ul>
              <li className="text-white small "><strong>MLG: </strong>{details ? (details.properties.MGLT) : null} </li>
              <li className="text-white small "><strong>Cargo Capacity: </strong>{details ? (details.properties.cargo_capacity) : null} </li>
              <li className="text-white small "><strong>consumables: </strong>{details ? (details.properties.consumables) : null} </li>
              <li className="text-white small "><strong>Cost in credits: </strong>{details ? (details.properties.cost_in_credits) : null} </li>
              <li className="text-white small "><strong>Created: </strong>{details ? (formatData(details.properties.created)) : null} </li>
              <li className="text-white small "><strong>Length: </strong>{details ? (details.properties.length) : null} </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
