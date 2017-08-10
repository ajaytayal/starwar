import axios from "axios";
 
export function searchPlanets(){
 
  return function(dispatch){
    axios.get('http://swapi.co/api/planets/')
        .then((response) =>{
          dispatch({type:'FETCH_PLANETS_FULFILLED', payload:response.data.results});
        })
        .catch((err) => {
          dispatch({type:'FETCH_PLANETS_REJECTED',payload:err})
        })
  }
}