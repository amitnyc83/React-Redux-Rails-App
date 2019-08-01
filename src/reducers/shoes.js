export default (state = [], action) => {
  switch(action.type) {
    case "GET_SHOES_SUCCESS":
    return action.shoes;

    case "CREATE_SHOE_SUCCESS":
    return state.concat(action.shoe);

    case "REMOVE_SHOE_SUCCESS":
    return state.filter(shoe => shoe.id !== action.shoeId);

    case "LIKE_SHOE":
    return state.map((shoe) => {
      if(shoe.id === action.shoe.id) {
        return action.shoe
      } else {
        return shoe
      }
    });



    default:
    return state;
  }
}
