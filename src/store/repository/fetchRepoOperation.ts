import GithubService from "../../services/githubService/GithubService"
import {
    fetchRepoError,
    fetchRepoPage,
    fetchRepoSuccess  
} from "./repoActionCreator"

export const fetchRepoPageOperation = (id: number) => async (dispatch: any) => {
    console.log(1)
    try {
        dispatch(fetchRepoPage(id))
        const resp: any = await GithubService.getRepoPage(id)
        
        console.log(resp);  
        dispatch(fetchRepoSuccess(resp))        
    }
    catch (e) {
        dispatch(fetchRepoError('Fetch repo failed'))
    }
}