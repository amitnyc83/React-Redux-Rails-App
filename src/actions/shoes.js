const API_URL = process.env.REACT_APP_API_URL;


// ** Actions Creators **
const setShoes = shoes => {
  return {
    type: "GET_SHOES_SUCCESS",
    shoes
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
