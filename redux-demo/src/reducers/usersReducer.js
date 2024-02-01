const initialState = {
    pending: false,
    error: "",
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PENDING':
        return {...state, pending: true, error: "", users: []};
      case 'FETCH_SUCCESS':
        return {...state, pending: false, error: "", users: action.payload};
      case 'FETCH_FAILURE':
        return {...state, pending: false, error: action.payload, users: []};  
      default:
        return state;
    }
  }
  
  export default usersReducer;