import axios from "axios";
 
export function fetchUsers(){
 
  return function(dispatch){
    axios.get('http://swapi.co/api/people/')
        .then((response) =>{
          dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data.results});
        })
        .catch((err) => {
          dispatch({type:'FETCH_USERS_REJECTED',payload:err})
        })
  }
}