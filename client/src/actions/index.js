import axios from 'axios';

//no hacer logica en ACTIONS, hacerla en Reducer

//en esta funcion estamos conectando el Front con el Back
export function getCountries() {
    return async function (dispatch) {
        var allCountries = await axios.get("http://localhost:3001/countries");
        return dispatch ({
            type: 'GET_COUNTRIES',
            payload: allCountries.data
        })        
    }
}

export function getNameCountries(name) {
    return async function (dispatch) {
        try {
            var names = await axios.get(`http://localhost:3001/countries?name=${name}`)
            dispatch ({
                type: "GET_NAME_COUNTRIES",
                payload: names.data
            })
        } catch (e) {
            // alert("Country not found")
        }
    }
}

export function postActivity(payload) {
        return async function (){
            const res =  await axios.post ('http://localhost:3001/activity', payload)
            console.log(res)
            return res; 
        }
    }

  export function getAllActivities() {
    return async function (dispatch) {
        return axios.get('http://localhost:3001/activity')
        .then((res) => {
            dispatch({type: "GET_ALL_ACTIVITIES", payload: res.data})
        })
  };
}
  

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    }
}


export function filterCountriesByContinents(payload){
    return{
        type: 'FILTER_BY_CONTINENTS',
        payload
    }

}

export function filterCreated(payload) {
    return {
        type: "FILTER_CREATED",
        payload
    }
  };

  