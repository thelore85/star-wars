import React, {createContext, useEffect, useState} from "react";

export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore ] = useState({
    theme : true,
    users : [],
    photos : [],
    people: [],
    starships: [],
    planets: [],
    favorites: [],
    details: {}
  })

  // Actions 
  const [actions, setActions] = useState({

    getDetails: async (url) => {
      const options = {method: 'GET'}
      const response = await fetch(url, options)
      if(response.ok){
        const data = await response.json();
        setStore( prevStore => ({...prevStore, details: data}) )
      }else{
        console.log('api get details error: ', response.status)
      }
    },

    addFavorites: (items)=>{
      setStore(prevStore => ({ ...prevStore, favorites: items }));
      localStorage.setItem('favorites', JSON.stringify(items))
    },

    getUsers: async () => {
      const url = "https://playground.4geeks.com/apis/fake/contact/agenda/thelore85";
      const options = { method: "GET" };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setStore(prevStore => ({ ...prevStore, users: data }));
      } else {
        console.log('ERROR flux action: getUsers: ', response.status, response.statusText);
      }
    },

    getStarWarsPeople: async () => {
      const url = "https://www.swapi.tech/api/people";
      const options = { method: "GET" };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setStore(prevStore => ({ ...prevStore, people: data }));
        localStorage.setItem('people', JSON.stringify(data))
      } else {
        console.log('ERROR flux action: getUsers: ', response.status, response.statusText);
      }
    },

    getStarWarsPlanets: async () => {
      const url = "https://www.swapi.tech/api/planets";
      const options = { method: "GET" };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setStore(prevStore => ({ ...prevStore, planets: data }));
        localStorage.setItem('planets', JSON.stringify(data))
      } else {
        console.log('ERROR flux action: getUsers: ', response.status, response.statusText);
      }
    },

    getStarWarsStarships: async () => {
      const url = "https://www.swapi.tech/api/starships";
      const options = { method: "GET" };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setStore(prevStore => ({ ...prevStore, starships: data }));
        localStorage.setItem('starships', JSON.stringify(data))
      } else {
        console.log('ERROR flux action: getUsers: ', response.status, response.statusText);
      }
    },

    getPhotos: async () => {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const options = { method: "GET" };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setStore(prevStore => ({ ...prevStore, photos: data }));
      } else {
        console.log('ERROR flux action: getPhotos: ', response.status, response.statusText);
      }
    },

    deleteUser : async (id) => {
      const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
      const options = { 
        method: "DELETE"
      };

      const response = await fetch(url, options);
      if (response.ok) {
        console.log("user delated: ", store)
        actions.getUsers()
      } else {
        console.log('ERROR flux action: getPhotos: ', response.status, response.statusText);
      }
    },

    addUser : async (request) => {
      const { name, email, agenda, address, phone } = request;

      console.log('api debug', request )
      const contactInfo = {
          full_name: name,
          email: email,
          agenda_slug: agenda,
          address: address,
          phone: phone
        }

      const url = "https://playground.4geeks.com/apis/fake/contact/";
      const options = { 
        method: "POST",
        body: JSON.stringify(contactInfo),
        headers: { "Content-Type": "application/json" }
      };

      const response = await fetch(url, options);
      if (response.ok) {
        console.log("user added: ", store)
        actions.getUsers()
      } else {
        console.log('ERROR flux action: getPhotos: ', response.status, response.statusText);
      }
    },

  });

  // UseEffect
  useEffect(() => {

  // retrive local storage memory
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const people = JSON.parse(localStorage.getItem('people'));
  const planets = JSON.parse(localStorage.getItem('planets'));
  const starships = JSON.parse(localStorage.getItem('starships'));

  // load favorites from local storafe
  if( favorites.length > 0 ){
      setStore(prevStore => ({ ...prevStore, favorites: favorites }));
  }

  if( people ){
      setStore(prevStore => ({ ...prevStore, people: people }));
  }

  if( planets ){
    setStore(prevStore => ({ ...prevStore, planets: planets }));
  }

  if( starships ){
    setStore(prevStore => ({ ...prevStore, starships: starships }));
  }

     actions.getUsers()
     actions.getPhotos()
     actions.getStarWarsPeople()
     actions.getStarWarsPlanets()
     actions.getStarWarsStarships()

  },[] )

  return(
    <Context.Provider value={{ store, setStore, actions }}>
      {props.children}
    </Context.Provider>
  )

}