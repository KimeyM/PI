import axios from 'axios';

export function getCountries() {
    return async function (dispatch) {
        var allCountries = await axios.get('http://localhost:3001/countries');
        return dispatch ({
            type: 'GET_COUNTRIES',
            payload: allCountries.data
        });
    };
};

export function getNameCountries(name) {
    return async function (dispatch) {
        var names = await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch ({
            type: 'GET_NAME_COUNTRIES',
            payload: names.data
        });
    };
};

export function postActivity(payload) {
    return async function (dispatch) {
        const res =  await axios.post('http://localhost:3001/activity', payload)
        dispatch({
            type: 'POST_ACTIVITY',
            payload: res.data
        }); 
    };
};

export function getAllActivities() {
    return async function (dispatch) {
        const res = await axios.get('http://localhost:3001/activity')
        dispatch({
            type: 'GET_ALL_ACTIVITIES',
            payload: res.data
        });
    };
};

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    };
};

export function orderByPopulation(payload) {
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    };
};

export function filterCountriesByContinents(payload){
    return{
        type: 'FILTER_BY_CONTINENTS',
        payload
    };
};

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    };
};