import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { SeriesReducer } from "./Series/reducer"
import { CurrentMatchReducer } from "./CurrentMatch/reducer"


const rootReducer =combineReducers({
    seriesstore:SeriesReducer,
    CurrentMatchstore:CurrentMatchReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
