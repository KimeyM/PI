import { combineReducers } from 'redux'
import { countries } from './countries'

const reducers = combineReducers({
    all: countries,
})

export default reducers