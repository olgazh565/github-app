import { ContributorsState, ContributorsAction, ContributorsActionTypes } from "../contributors/contributorsTypes";

const initialState: ContributorsState = {
    contributors: [],
    loading: false,
    error: undefined,
    pageNumber: 1,      
}

export const contributorsReducer = (state: ContributorsState = initialState, action: ContributorsAction) => {
    switch (action.type) {
        case ContributorsActionTypes.FETCH_CONTRIBUTORS:
            return {...state, error: undefined, loading: true}        
        case ContributorsActionTypes.FETCH_CONTRIBUTORS_SUCCESS:
            return {...state, contributors: action.payload, loading: false, error: undefined} 
        case ContributorsActionTypes.FETCH_CONTRIBUTORS_ERROR:
            return {...state, loading: false, error: action.payload}
        case ContributorsActionTypes.CLEAR_CONTRIBUTORS_DATA:
            return {...state, contributors: []} 
        default:
            return state
    }        
}