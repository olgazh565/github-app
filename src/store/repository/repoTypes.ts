export enum RepoActionTypes {
    FETCH_REPO_PAGE = 'FETCH_REPO_PAGE',
    FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS',
    FETCH_REPO_ERROR = 'FETCH_REPO_ERROR',
    CLEAR_REPO_DATA = 'CLEAR_REPO_DATA'
}
export interface IRepo {
    id: number,
    name: string,
    stargazers_count: number
    pushed_at: string,
    html_url: string,    
    language: string,
    description: string,
    contributors_url: string,
    topics: [],
    owner: {
        avatar_url: string,
        login: string,
        html_url: string
    },   
}
export interface RepoState {
    id: number,
    repo: any,
    repoLoading: boolean,
    repoError: string | undefined    
}
export interface FetchRepoPage {
    type: RepoActionTypes.FETCH_REPO_PAGE,
    payload: number
}
export interface FetchRepoActionSuccess {
    type: RepoActionTypes.FETCH_REPO_SUCCESS,
    payload: IRepo
}
export interface FetchRepoActionError {
    type: RepoActionTypes.FETCH_REPO_ERROR,
    payload: string | undefined
}
export interface ClearRepoData {
    type: RepoActionTypes.CLEAR_REPO_DATA,
}
export type RepoAction = 
| FetchRepoPage
| FetchRepoActionError
| FetchRepoActionSuccess
| ClearRepoData

