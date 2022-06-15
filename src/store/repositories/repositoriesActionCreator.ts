import {
    ClearSearchData,
    FetchRepositoriesAction,
    FetchRepositoriesActionError,
    FetchRepositoriesActionSuccess,
    IRepositories,
    RepositoriesActionTypes,
    SetRepositoriesCount,
    SetRepositoriesPage,
    SetSearchRepositories
} from "./repositoriesTypes";

export const fetchRepositories = (): FetchRepositoriesAction => {
    return {
        type: RepositoriesActionTypes.FETCH_REPOSITORIES
    }
}
export const fetchRepositoriesSuccess = (data: IRepositories[]): FetchRepositoriesActionSuccess => {
    return {
        type: RepositoriesActionTypes.FETCH_REPOSITORIES_SUCCESS,
        payload: data
    }
}
export const fetchRepositoriesError = (errorMessage: string | undefined): FetchRepositoriesActionError => {
    return {
        type: RepositoriesActionTypes.FETCH_REPOSITORIES_ERROR,
        payload: errorMessage
    }
}
export const setRepositoriesCount = (repositoriesCount: number): SetRepositoriesCount => {
    return {
        type: RepositoriesActionTypes.SET_REPOSITORIES_COUNT,
        payload: repositoriesCount
    }
}
export const setRepositoriesPage = (repositoriesPage: number): SetRepositoriesPage => {
    return {
        type: RepositoriesActionTypes.SET_REPOSITORIES_PAGE,
        payload: repositoriesPage
    }
}
export const setSearchRepositories = (search: string): SetSearchRepositories => {
    return {
        type: RepositoriesActionTypes.SET_SEARCH_REPOSITORIES,
        payload: search
    }
}
export const clearSearchData = (): ClearSearchData => {
    return {
        type: RepositoriesActionTypes.CLEAR_SEARCH_DATA       
    }
}


