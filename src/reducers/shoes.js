export default (state = [], action) => {
  switch(action.type) {
    case "GET_SHOES_SUCCESS":
    return action.shoes;

    case "CREATE_SHOE_SUCCESS":
    return state.concat(action.shoe);


    default:
    return state;
  }
}
