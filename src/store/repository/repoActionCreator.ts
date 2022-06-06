import {
    FetchRepoActionError,
    FetchRepoActionSuccess,
    FetchRepoPage,
    IRepo,
    RepoActionTypes   
} from "./repoTypes";

export const fetchRepoPage = (id: number): FetchRepoPage => {
    return {
        type: RepoActionTypes.FETCH_REPO_PAGE,
        payload: id
    }
}
export const fetchRepoSuccess = (data: IRepo): FetchRepoActionSuccess => {
    return {
        type: RepoActionTypes.FETCH_REPO_SUCCESS,
        payload: data
    }
}
export const fetchRepoError = (errorMessage: string | undefined): FetchRepoActionError => {
    return {
        type: RepoActionTypes.FETCH_REPO_ERROR,
        payload: errorMessage
    }
}