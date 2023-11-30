import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/GlobalContext";

// images
import starwars from '../../img/quote2.png'


export default function Home() {

	const { store, actions, setStore } = useContext(Context); 
  const navigate = useNavigate()

  const planets = store.planets.results;
  const people = store.people.results;
  const starships = store.starships.results;
  const favorites = store.favorites

  const addToFavorites = (data) => {
    if (!favorites.includes(data)) {
        actions.addFavorites([...favorites, data]);
    }
  };


  return (
    <> 
    <section className="d-flex justify-content-center align-items-center bg-black" style={{ minHeight: '100vh'}}>

      <div className="container">

        <div className="text-center py-4" style={{ minHeight: '95vh'}}>
          <img src={starwars}></img>
          <div className="text-center">
            <p className="small text-white">Scroll Down</p>
            <a href="#home"><FontAwesomeIcon icon={faChevronDown} beat className="text-warning h2"/></a>
          </div>
        </div>


        <div id="home" className="mb-5 p-5 bg-black" style={{ border:" 7px solid #ffc107", borderRadius:"25px"}}>

          {/* PEOPLE */}
          <h2 className="fw-bolder text-white mt-5" >People <Link to="/people" style={{ textDecoration:'none' }}> <span className="fs-6 fw-lighter text-warning ps-3" > {'>'} View All</span></Link></h2>
          <ul className="list-unstyled mb-5 py-4 row border-bottom">
            { people ? ( people.map( (character, i) => { if( i<4) return (
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


          {/* PLANETS */}
          <h2 className="fw-bolder text-white mt-5 " >Planets <Link to='/planets' style={{ textDecoration:'none' }}> <span className="fs-6 fw-lighter text-warning ps-3" > {'>'} View All</span></Link></h2>
          <ul className="list-unstyled mb-4 py-4 row border-bottom">
            { planets ? ( planets.map( (planet, i) => { if( i<4) return (
                  <div key={i} className="col-lg-3 col-md-6 p-2">
                    <li className='align-items-center rounded bg-light' key={parseInt(planet.uid)}>
                      <div className="mb-3">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(planet.uid)+1}.jpg`} className="me-3 w-100 shadow-sm rounded-top" />
                      </div>
                      <div className="p-3 text-secondary small">
                      <p className="mb-0"><strong>Type:</strong> Planet</p>
                      <p className="mb-3"><strong>Name:</strong> {planet.name}</p>
                      <div className="d-flex">
                          <Link className="me-auto" to={`/planets/${planet.uid}`} >
                            <button className="btn btn-sm bg-black text-warning opacity-75 small">Details</button>
                          </Link>
                          <button className="btn btn-sm btn-light text-warning" onClick={() => addToFavorites(planet)}>
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                )})) : 
                (<h3 className="text-center text-white"><FontAwesomeIcon icon={faSpinner} spin /></h3>)}
          </ul>

          {/* STARSHIPS */}
          <h2 className="fw-bolder text-white mt-5 " >Starships <Link to='/starships' style={{ textDecoration:'none' }}> <span className="fs-6 fw-lighter text-warning ps-3" > {'>'} View All</span></Link></h2>
          <ul className="list-unstyled mb-4 py-4 row border-bottom">
            { starships ? ( starships.map( (ship, i) => { if( 8>i && i >3) return (
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
