import {
    FetchContributors,
    FetchContributorsError,
    FetchContributorsSuccess,
    ContributorsActionTypes,
    Icontributors,
    ClearContributorsData
} from "./contributorsTypes";

export const fetchContributors = (): FetchContributors => {
    return {
        type: ContributorsActionTypes.FETCH_CONTRIBUTORS
    }
}
export const fetchContributorsSuccess = (data: Icontributors[]): FetchContributorsSuccess => {
    return {
        type: ContributorsActionTypes.FETCH_CONTRIBUTORS_SUCCESS,
        payload: data
    }
}
export const fetchContributorsError = (errorNessage: string | undefined): FetchContributorsError => {
    return {
        type: ContributorsActionTypes.FETCH_CONTRIBUTORS_ERROR,
        payload: errorNessage
    }
}
export const clearContributorsData = (): ClearContributorsData => {
    return {
        type: ContributorsActionTypes.CLEAR_CONTRIBUTORS_DATA
    }
}