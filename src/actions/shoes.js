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

// ** Async Actions **
export const getShoes = () => {
  return dispatch => {
    return fetch(`${API_URL}/shoes`)
    .then(response => response.json())
    .then(shoes => dispatch(setShoes(shoes)))
    .catch(error => console.log(error));
  }
}

export const createShoe = shoe => {
  return dispatch => {
    return fetch(`${API_URL}/shoes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shoe: shoe })
    })
    .then(response => response.json())
    .then(shoes => {
      dispatch(addShoe(shoe))
      dispatch(resetShoeForm())
    })
    .catch(error => console.log(error))
  }
}

export const getShoe = (shoeId) => {
  return dispatch => {
    return fetch(`${API_URL}/shoes/${shoeId}`)
    .then(response => response.json())
    .then(shoe => { dispatch(setShoes([shoe]));
    })
    .catch(error => console.log(error))
  }
}
