const reducer = (state = [], action = {}) => {

  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default reducer
