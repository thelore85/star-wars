import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Context } from "../store/GlobalContext";



export default function StarShips() {

	const { store, actions } = useContext(Context); 

  const planets = store.planets.results;
  const people = store.people.results;
  const starships = store.starships.results;
  const favorites = store.favorites

  const addToFavorites = (data) => {
    if (!favorites.includes(data)) {
        actions.addFavorites([...favorites, data]);
    }
    console.log(favorites)
  };

  return (
    <> 
    <section className="d-flex justify-content-center align-items-center bg-black" style={{ minHeight: '100vh'}}>

      <div className="container">

        <div id="home" className="mb-5 p-5 bg-black" style={{ border:" 7px solid #ffc107", borderRadius:"25px"}}>

          {/* STARSHIPS */}
          <h2 className="fw-bolder text-white mt-5 " >Starships</h2>
          <ul className="list-unstyled mb-4 py-4 row border-bottom">
            { starships ? ( starships.map( (ship, i) => { return (
                  <div key={i} className="col-lg-3 col-md-6 p-2">
                    <li className='align-items-center rounded bg-light' key={parseInt(ship.uid)}>
                      <div className="mb-3">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${parseInt(ship.uid)}.jpg`} className="me-3 w-100 shadow-sm rounded-top" />
                      </div>
                      <div className="p-3 text-secondary small">
                      <p className="mb-0"><strong>Type:</strong> Starship</p>
                      <p className="mb-3"><strong>Name:</strong> {ship.name}</p>
                      <div className="d-flex">
                          <Link className="me-auto" to={`/starships/${ship.uid}`} >
                            <button className="btn btn-sm bg-black text-warning opacity-75 small">Details</button>
                          </Link>
                          <button className="btn btn-sm btn-light text-warning" onClick={() => addToFavorites(ship)}>
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                )})) : 
                (<h3 className="text-center text-white"><FontAwesomeIcon icon={faSpinner} spin /></h3>)}
          </ul>     
          
        </div>
      </div>
    </section>
    </>
  )
}
