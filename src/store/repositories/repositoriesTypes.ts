export enum RepositoriesActionTypes {
    FETCH_REPOSITORIES = 'FETCH_REPOSITORIES',
    FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_ERROR = 'FETCH_REPOSITORIES_ERROR',
    SET_REPOSITORIES_COUNT = 'SET_REPOSITORIES_COUNT',
    SET_REPOSITORIES_PAGE = 'SET_REPOSITORIES_PAGE',
    SET_SEARCH_REPOSITORIES = 'SET_SEARCH_REPOSITORIES',
    CLEAR_SEARCH_DATA = 'CLEAR_SEARCH_DATA' 
}
export interface IRepositories {
    name: string,
    stargazers_count: number,
    pushed_at: string,
    html_url: string,
    id: number,          
}
export interface RepositoriesState {
    repositories: IRepositories[], 
    pageNumber: number,
    repositoriesCount: number,
    search: string,
    loading: boolean,
    error: string | undefined    
}
export interface FetchRepositoriesAction {
    type: RepositoriesActionTypes.FETCH_REPOSITORIES
}
export interface FetchRepositoriesActionSuccess {
    type: RepositoriesActionTypes.FETCH_REPOSITORIES_SUCCESS,
    payload: IRepositories[]
}
export interface FetchRepositoriesActionError {
    type: RepositoriesActionTypes.FETCH_REPOSITORIES_ERROR,
    payload: string | undefined
}
export interface SetRepositoriesCount {
    type: RepositoriesActionTypes.SET_REPOSITORIES_COUNT,
    payload: number
}
export interface SetRepositoriesPage {
    type: RepositoriesActionTypes.SET_REPOSITORIES_PAGE,
    payload: number
}
export interface SetSearchRepositories {
    type: RepositoriesActionTypes.SET_SEARCH_REPOSITORIES,
    payload: string
}
export interface ClearSearchData {
    type: RepositoriesActionTypes.CLEAR_SEARCH_DATA,    
}
export type RepositoriesAction = 
FetchRepositoriesAction 
| FetchRepositoriesActionSuccess 
| FetchRepositoriesActionError
| SetRepositoriesCount
| SetRepositoriesPage
| SetSearchRepositories
| ClearSearchData

