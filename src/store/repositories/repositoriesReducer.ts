import { RepositoriesAction, RepositoriesActionTypes, RepositoriesState } from "./repositoriesTypes"

const initialState: RepositoriesState = {
    repositories: [],
    pageNumber: localStorage.pageNumber ? localStorage.pageNumber : 1,
    search: localStorage.search ? localStorage.search : '',
    repositoriesCount: 0,
    loading: false,
    error: undefined    
}

export const repositoriesReducer = (state: RepositoriesState = initialState, action: RepositoriesAction) => {

    switch (action.type) {
        case RepositoriesActionTypes.FETCH_REPOSITORIES:
            return {...state, error: undefined, loading: true}
        case RepositoriesActionTypes.FETCH_REPOSITORIES_SUCCESS:
            return {...state, repositories: action.payload, loading: false, error: undefined}
        case RepositoriesActionTypes.FETCH_REPOSITORIES_ERROR:
            return {...state, loading: false, error: action.payload}
        case RepositoriesActionTypes.SET_REPOSITORIES_COUNT:
            return {...state, repositoriesCount: action.payload}
        case RepositoriesActionTypes.SET_REPOSITORIES_PAGE:
            return {...state, pageNumber: action.payload}    
        case RepositoriesActionTypes.SET_SEARCH_REPOSITORIES:
            return {...state, search: action.payload, loading: true, error: undefined}
      
        default:
            return state
    }
}