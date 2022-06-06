import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { contributorsReducer } from "./contributors/contributorsReducer";
import { repositoriesReducer } from "./repositories/repositoriesReducer";
import { repoReducer } from "./repository/repoReducer";

const rootReducer = combineReducers({
    repositories: repositoriesReducer,
    repo: repoReducer,
    contributors: contributorsReducer
})

export const store = createStore(
    rootReducer, 
    undefined, 
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>