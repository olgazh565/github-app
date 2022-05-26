import SwapiService from "../../services/swapiService/SwapiService"
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess, setPeopleCount, setSearchPeople } from "./peopleActionCreator"

export const fetchPeopleDataOperation = (pageNumber: number) => async (dispatch: any) => {
    try {
        const resp: any = await SwapiService.getAllPeople(pageNumber)
        dispatch(fetchPeople())
        console.log(resp);

        dispatch(fetchPeopleSuccess(resp.items))
        dispatch(setPeopleCount(resp.total_count))              
    }
    catch (e) {
        dispatch(fetchPeopleError('Fetch people failed'))
    }
}
export const searchPeopleDataOperation = (page: number = 1, search: string = "") => async (dispatch: any) => {
    try {
        dispatch(setSearchPeople(search))
        const resp: any = await SwapiService.searchPeople(page, search)
        console.log(resp);
        
        dispatch(setPeopleCount(resp.total_count))
        dispatch(fetchPeopleSuccess(resp.items))
    } catch (e) {
        dispatch(fetchPeopleError("Failed on search"))
    }
}