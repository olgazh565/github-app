import { FetchPeopleAction, FetchPeopleActionError, FetchPeopleActionSuccess, FetchRepoPage, IPeople, PeopleActionTypes, SetPeopleCount, SetPeoplePage, SetSearchPeople } from "./types";

export const fetchPeople = (): FetchPeopleAction => {
    return {
        type: PeopleActionTypes.FETCH_PEOPLE
    }
}
export const fetchPeopleSuccess = (data: IPeople[]): FetchPeopleActionSuccess => {
    return {
        type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
        payload: data
    }
}
export const fetchPeopleError = (errorNessage: string | undefined): FetchPeopleActionError => {
    return {
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload: errorNessage
    }
}
export const setPeopleCount = (peopleCount: number): SetPeopleCount => {
    return {
        type: PeopleActionTypes.SET_PEOPLE_COUNT,
        payload: peopleCount
    }
}
export const setPeoplePage = (peoplePage: number): SetPeoplePage => {
    return {
        type: PeopleActionTypes.SET_PEOPLE_PAGE,
        payload: peoplePage
    }
}
export const setSearchPeople = (search: string): SetSearchPeople => {
    return {
        type: PeopleActionTypes.SET_SEARCH_PEOPLE,
        payload: search
    }
}
export const fetchRepoPage = (id: number): FetchRepoPage => {
    return {
        type: PeopleActionTypes.FETCH_REPO_PAGE,
        payload: id
    }
}