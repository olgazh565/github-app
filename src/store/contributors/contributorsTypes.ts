export enum ContributorsActionTypes {
    FETCH_CONTRIBUTORS = 'FETCH_CONTRIBUTORS',
    FETCH_CONTRIBUTORS_SUCCESS = 'FETCH_CONTRIBUTORS_SUCCESS',
    FETCH_CONTRIBUTORS_ERROR = 'FETCH_CONTRIBUTORS_ERROR',
    CLEAR_CONTRIBUTORS_DATA = 'CLEAR_CONTRIBUTORS_DATA'
}
export interface Icontributors {
    login: string,
    html_url: string,
    contributions: number,
    id: number,
}
export interface ContributorsState{
    contributors: Icontributors[],
    loading: boolean,
    error: string | undefined,
    pageNumber: number,    
}
export interface FetchContributors {
    type: ContributorsActionTypes.FETCH_CONTRIBUTORS
}
export interface FetchContributorsSuccess {
    type: ContributorsActionTypes.FETCH_CONTRIBUTORS_SUCCESS,
    payload: Icontributors[]
}
export interface FetchContributorsError {
    type: ContributorsActionTypes.FETCH_CONTRIBUTORS_ERROR,
    payload: string | undefined
}
export interface ClearContributorsData {
    type: ContributorsActionTypes.CLEAR_CONTRIBUTORS_DATA,
}
export type ContributorsAction = 
| FetchContributors
| FetchContributorsSuccess
| FetchContributorsError
| ClearContributorsData
