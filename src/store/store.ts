import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { peopleReducer } from "./people/peopleReducer";

const rootReducer = combineReducers({
    people: peopleReducer
})

export const store = createStore(
    rootReducer, 
    undefined, 
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>