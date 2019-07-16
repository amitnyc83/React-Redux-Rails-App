// ** Action creators **

export const updateShoeFormData = shoeFormData => {
  return {
    type: 'UPDATED_DATA',
    shoeFormData
  }
}

export const resetShoeForm = () => {
  return {
    type: "RESET_SHOE_FORM",

  }
}
