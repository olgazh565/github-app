import { PeopleAction, PeopleActionTypes, PeopleState } from "./types"

const initialState: PeopleState = {
    people: [],
    pageNumber: 1,
    search: "",
    peopleCount: 0,
    loading: false,
    error: undefined,
    id: 0,
    repo: {},
    repoLoading: false,
    repoError: undefined,
}

export const peopleReducer = (state: PeopleState = initialState, action: PeopleAction) => {

    switch (action.type) {
        case PeopleActionTypes.FETCH_PEOPLE:
            return {...state, error: undefined, loading: true}
        case PeopleActionTypes.FETCH_PEOPLE_SUCCESS:
            return {...state, people: action.payload, loading: false, error: undefined}
        case PeopleActionTypes.FETCH_PEOPLE_ERROR:
            return {...state, loading: false, error: action.payload}
        case PeopleActionTypes.SET_PEOPLE_COUNT:
            return {...state, peopleCount: action.payload}
        case PeopleActionTypes.SET_PEOPLE_PAGE:
            return {...state, pageNumber: action.payload}    
        case PeopleActionTypes.SET_SEARCH_PEOPLE:
            return {...state, search: action.payload, loading: true, error: undefined}


        case PeopleActionTypes.FETCH_REPO_PAGE:
            return {...state, id: action.payload, repoLoading: true, error: undefined}
        case PeopleActionTypes.FETCH_REPO_SUCCESS:
            return {...state, repo: action.payload, repoLoading: false, repoError: undefined}
        case PeopleActionTypes.FETCH_REPO_ERROR:
            return {...state, repoLoading: false, repoError: action.payload}
        default:
            return state

    }
}