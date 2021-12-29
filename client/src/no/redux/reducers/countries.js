import { actionTypes } from "../constants/action-types"

const initialState = {
    countries: [{
        id: 1,
        name: "arg"
    }]
}

export const countries = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.GET_COUNTRIES:
            return state
        default:
            return state
    }
}