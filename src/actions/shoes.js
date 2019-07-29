import { resetShoeForm } from './shoeForm'

const API_URL = process.env.REACT_APP_API_URL;

// ** Actions Creators **
const setShoes = shoes => {
  return {
    type: "GET_SHOES_SUCCESS",
    shoes
  }
}

const addShoe = shoe => {
  return {
    type: "CREATE_SHOE_SUCCESS",
    shoe
  }
}

const removeShoe = shoe => {
  return {
    type: "REMOVE_SHOE_SUCCESS",
    shoe
  }
}

const addLikes = shoe => {
  return {
    type: "LIKE_SHOE",
    shoe
  }
}

// ** Async Actions **
export const getShoes = () => {
  return dispatch => {
    return fetch(`${API_URL}/shoes`)
    .then(response => response.json())
    .then(shoes => {
      dispatch(setShoes(shoes))})
    .catch(error => console.log(error));
  }
}


export const getShoe = (shoeId) => {
  return dispatch => {
    return fetch(`${API_URL}/shoes/${shoeId}`)
    .then(response => response.json())
    .then(shoe => dispatch(setShoes([shoe])))
    .catch(error => console.log(error));
  }
}


export const createShoe = ( shoe, routerHistory ) => {
  return dispatch => {
    return fetch(`${API_URL}/shoes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shoe: shoe })
    })
    .then(displayErrors)
    .then(response => response.json())
    .then(shoes => {
      dispatch(addShoe(shoe))
      dispatch(resetShoeForm())
      routerHistory.replace(`/shoes`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace(`/shoes/new`)
    })
  }
}


export const likeShoe = ( shoe, shoes ) => {
  const updatedShoe = {...shoe,  likes: shoe.likes + 1 }
  return dispatch => {
    return fetch(`${API_URL}/shoes/${shoe.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shoe: updatedShoe })
    })
    .then(response => response.json ())
    .then(shoe => {
      dispatch(addLikes(shoe))
    })
    .catch(error => console.log(error))
  }
}


export const deleteShoe = ( shoeId, routerHistory ) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/shoes/${shoeId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removeShoe(shoeId));
      routerHistory.replace('/shoes');
    })
    .catch(error => console.log(error))
  }
}

function displayErrors(response){
  if(!response.ok){
    throw Error(response.statusText);
  }
  return response
}
