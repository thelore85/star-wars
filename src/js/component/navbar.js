import React, { useContext } from "react";
import { Context } from '../store/GlobalContext'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons'

import logo from '../../img/logo2.png';



export const Navbar = () => {
   const { store } = useContext(Context)
   const favorites = store.favorites

  return (
    <nav className="p-4  bg-black sticky-top shadow ">

      <div className="d-flex align-items-center container">

        <div className="me-auto h7 fw-lighter" >
          <Link to="/" style={{ textDecoration:'none'}} >
            <img src={logo} width="200" className="me-3"></img>
          </Link>
        </div>
          <Link to="/contacts" style={{ textDecoration:'none'}}>
            <span className="mb-0 me-4 text-white">Contacts</span>
          </Link>
          <Link to="/People" style={{ textDecoration:'none'}}>
            <span className="mb-0 me-4 text-white">People</span>
          </Link>
          <Link to="/Planets" style={{ textDecoration:'none'}}>
            <span className="mb-0 me-4 text-white">Planets</span>
          </Link>
          <Link to="/Starships" style={{ textDecoration:'none'}}>
            <span className="mb-0 me-4 text-white">Starships</span>
          </Link>

          <div className="dropdown">
            <button className="btn btn-sm btn-light text-warning" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faHeart} />

                
                {favorites.length > 0 ?
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">
                    {favorites.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>: null}

              </button>
            <ul className="dropdown-menu dropdown-menu-dark p-2">
              {favorites.map( (element, i) => {
                return <li key={i} className="py-2 small"><span>{element.name}</span></li>
              })}
            </ul>
          </div>

      </div>


    </nav>
  );
};
