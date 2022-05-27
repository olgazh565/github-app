export enum PeopleActionTypes {
    FETCH_PEOPLE = 'FETCH_PEOPLE',
    FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS',
    FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR',
    SET_PEOPLE_COUNT = 'SET_PEOPLE_COUNT',
    SET_PEOPLE_PAGE = 'SET_PEOPLE_PAGE',
    SET_SEARCH_PEOPLE = 'SET_SEARCH_PEOPLE',

    FETCH_REPO_PAGE = 'FETCH_REPO_PAGE',
    FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS',
    FETCH_REPO_ERROR = 'FETCH_REPO_ERROR'
}
export interface IPeople {
    id: number,
    name: string,
    stargazers_count: number
    pushed_at: string,
    html_url: string,    
    language: string,
    description: string,
    contributors_url: string,
    owner: {
        avatar_url: string,
        login: string,
        html_url: string
    },   
}
export interface PeopleState {
    people: IPeople[], 
    pageNumber: number,
    peopleCount: number,
    search: string,
    loading: boolean,
    error: string | undefined,  
    id: number,
    repo: any,
    repoLoading: boolean,
    repoError: string | undefined,
}

export interface FetchPeopleAction {
    type: PeopleActionTypes.FETCH_PEOPLE
}
export interface FetchPeopleActionSuccess {
    type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
    payload: IPeople[]
}
export interface FetchPeopleActionError {
    type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
    payload: string | undefined
}
export interface SetPeopleCount {
    type: PeopleActionTypes.SET_PEOPLE_COUNT,
    payload: number
}
export interface SetPeoplePage {
    type: PeopleActionTypes.SET_PEOPLE_PAGE,
    payload: number
}
export interface SetSearchPeople {
    type: PeopleActionTypes.SET_SEARCH_PEOPLE,
    payload: string
}
export interface FetchRepoPage {
    type: PeopleActionTypes.FETCH_REPO_PAGE,
    payload: number
}
export interface FetchRepoActionSuccess {
    type: PeopleActionTypes.FETCH_REPO_SUCCESS,
    payload: any
}
export interface FetchRepoActionError {
    type: PeopleActionTypes.FETCH_REPO_ERROR,
    payload: string | undefined
}


export type PeopleAction = 
FetchPeopleAction 
| FetchPeopleActionSuccess 
| FetchPeopleActionError
| SetPeopleCount
| SetPeoplePage
| SetSearchPeople
| FetchRepoPage
| FetchRepoActionError
| FetchRepoActionSuccess