export default (state = {
  name: '',
  price: 0,
  brand: '',
  img_url: '',
  description: ''
}, action) => {
  switch(action.type) {
    case "UPDATED_DATA":
    return action.shoeFormData

    default:
    return state;
  }
}
