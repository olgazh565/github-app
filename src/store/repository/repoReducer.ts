import { RepoAction, RepoActionTypes, RepoState } from "./repoTypes"

const initialState: RepoState = {
    id: 0,
    repo: {},
    repoLoading: false,
    repoError: undefined,    
}

export const repoReducer = (state: RepoState = initialState, action: RepoAction) => {

    switch (action.type) {
        case RepoActionTypes.FETCH_REPO_PAGE:
            return {...state, id: action.payload, repoLoading: true, error: undefined}
        case RepoActionTypes.FETCH_REPO_SUCCESS:
            return {...state, repo: action.payload, repoLoading: false, repoError: undefined}
        case RepoActionTypes.FETCH_REPO_ERROR:
            return {...state, repoLoading: false, repoError: action.payload}      
        default:
            return state
    }
}
