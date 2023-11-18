const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

    },

		actions: {

			getUsers: async () => {
        const url = "https://jsonplaceholder.typicode.com/users"
        const options = { method: "GET"}

        const response = await fetch( url, options)
        if( response.ok ){
          const data = await response.json()
          setStore({users: data})
        }else{
          console.log( 'ERROR flux action: loadUser: ', response.status, response.statusText )
        }
			},

		}
	};
};

export default getState;
