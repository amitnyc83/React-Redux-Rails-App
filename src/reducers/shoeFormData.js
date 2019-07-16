const initialState = {
  name: '',
  price: 0,
  brand: '',
  img_url: '',
  description: ''
}


export default (state = initialState, action) => {

  switch(action.type) {
    case "UPDATED_DATA":
    return action.shoeFormData

    case "RESET_SHOE_FORM":
    return initialState;

    default:
    return state;
  }
}
