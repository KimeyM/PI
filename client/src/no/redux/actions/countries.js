import { actionTypes } from "../constants/action-types";

export const getCountries = (countries) => {
    return {
        type: actionTypes.GET_COUNTRIES,
        payload: countries
    }
}

export const createActivity = (activity) => {
    return {
        type: actionTypes.CREATE_ACTIVITY,
        payload: countries
    }
}