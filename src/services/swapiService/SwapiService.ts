import apiClient from "./apiClient";

class SwapiService {
    getRepositories(page: number) {
        return apiClient().get(`/search/repositories?q=stars:>1&order=star&per_page=10`, {
            params: {page}
        }).then(resp => resp.data)        
    }
    searchRepositories(page: number, search: string = "") {
        return apiClient().get(`search/repositories?q=${search}+in:name&sort=stars&per_page=10`, {
            params: {page, search}
        }).then(resp => resp.data)        
    }
    getRepoPage(id: number) {
        return apiClient().get(`repositories/${id}`, {
            params: {id}
        }).then(resp => resp.data)        
    }
    getContributors(id: number) {
        return apiClient().get(`repositories/${id}/contributors`, {
            params: {id}
        }).then(resp => resp.data)        
    }
    
}

export default new SwapiService();