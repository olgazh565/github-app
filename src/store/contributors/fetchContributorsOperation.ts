import SwapiService from "../../services/swapiService/SwapiService";
import { fetchContributors, fetchContributorsError, fetchContributorsSuccess } from "./contributorsActionCreator";

export const fetchContributorsOperation = (id: number) => async (dispatch: any) => {
        
    try {
        dispatch(fetchContributors())
        const resp: any = await SwapiService.getContributors(id)
        
        console.log(resp);  
        dispatch(fetchContributorsSuccess(resp))
        
    }
    catch (e) {
        dispatch(fetchContributorsError('Fetch contributors failed'))
    }
}