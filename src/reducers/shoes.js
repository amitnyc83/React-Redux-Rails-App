export default (state = [], action) => {
  switch(action.type) {
    case "GET_SHOES_SUCCESS":
    return action.shoes;


    default:
    return state;
  }
}
