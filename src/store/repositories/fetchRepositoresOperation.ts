import GithubService from "../../services/githubService/GithubService"
import {
    fetchRepositories,
    fetchRepositoriesError,
    fetchRepositoriesSuccess,
    setRepositoriesCount,
    setSearchRepositories
} from "./repositoriesActionCreator"

export const fetchRepositoriesOperation = (pageNumber: number) => async (dispatch: any) => {
    try {
        const resp: any = await GithubService.getRepositories(pageNumber)
        dispatch(fetchRepositories())
        console.log(resp);

        dispatch(fetchRepositoriesSuccess(resp.items))
        dispatch(setRepositoriesCount(resp.total_count))              
    }
    catch (e) {
        dispatch(fetchRepositoriesError('Fetch repositories failed'))
    }
}
export const searchRepositoriesOperation = (page: number = 1, search: string = "") => async (dispatch: any) => {
    try {
        dispatch(setSearchRepositories(search))
        const resp: any = await GithubService.searchRepositories(page, search)

        dispatch(fetchRepositoriesSuccess(resp.items))
        dispatch(setRepositoriesCount(resp.total_count))

    } catch (e) {
        dispatch(fetchRepositoriesError("Failed on search"))
    }
}