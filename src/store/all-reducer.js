import {combineReducers} from 'redux'

import postReducer from './posts-reducer'

const allReducers = combineReducers(
    {
        posts : postReducer
    }
)

export default allReducers