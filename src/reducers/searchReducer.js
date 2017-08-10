export default function reducer(state={
  searches:[],
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch (action.type) {
    case "FETCH_PLANETS":{
      return {...state, fetching: true}
    }
    case "FETCH_PLANETS_FULFILLED":{
      return {
              ...state,
              fetching: false,
              fetched: true,
              searches:action.payload
              }
    }
     case "FETCH_PLANETS_REJECTED":{
       return {
                ...state,
                fetching: false,
                error: action.payload
              }
     }
 
  }
  return state;
}