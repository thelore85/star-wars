import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Context } from "../store/GlobalContext";


export default function Home() {

	const { store, actions } = useContext(Context); 
  const people = store.people.results;
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

          {/* PEOPLE */}
          <h2 className="fw-bolder text-white mt-5" >People</h2>
          <ul className="list-unstyled mb-5 py-4 row border-bottom">
            { people ? ( people.map( (character, i) => { return (
                  <div key={i} className="col-lg-3 col-md-6 p-2">
                    <li className='align-items-center rounded bg-light' key={parseInt(character.uid)}>
                      <div className="mb-3">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(character.uid)}.jpg`} className="me-3 w-100 shadow-sm rounded-top" />
                      </div>
                      <div className="p-3 text-secondary small">
                        <p className="mb-0"><strong>Type:</strong> character</p>
                        <p className="mb-3"><strong>Name:</strong> {character.name}</p>

                        <div className="d-flex">
                        <Link className="me-auto" to={`/people/${character.uid}`} >
                            <button className="btn btn-sm bg-black text-warning opacity-75 small">Details</button>
                          </Link>
                          <button className="btn btn-sm btn-light text-warning" onClick={() => addToFavorites(character)}>
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>

                      </div>
                    </li>
                  </div>
                )})) : 
                (<h3 className="text-center text-white text-white"><FontAwesomeIcon icon={faSpinner} spin /></h3>)}
          </ul>
          
        </div>
      </div>
    </section>
    </>
  )
}
