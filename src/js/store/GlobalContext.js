import React, {createContext, useEffect, useState} from "react";

export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore] = useState({
    theme : true,
    users : [],
    photos : []
  })

  // Actions 
// ...

const [actions, setActions] = useState({
  getUsers: async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const options = { method: "GET" };

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setStore(prevStore => ({ ...prevStore, users: data }));
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
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const options = { 
      method: "DELETE"
    };

    const response = await fetch(url, options);
    if (response.ok) {
      actions.getUsers()
    } else {
      console.log('ERROR flux action: getPhotos: ', response.status, response.statusText);
    }
  },

  updateUsers : () => {

  }

});

// ...

  useEffect(() => {
     actions.getUsers()
     actions.getPhotos()
  },[] )

  return(
    <Context.Provider value={{ store, setStore, actions, setActions }}>
      {props.children}
    </Context.Provider>
  )

}