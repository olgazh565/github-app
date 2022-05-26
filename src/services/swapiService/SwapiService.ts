import apiClient from "./apiClient";

class SwapiService {
    getAllPeople(page: number = 1) {
        return apiClient().get('search/repositories?q=stars:>1&order=star&per_page=10', {
            params: {page}
        }).then(resp => resp.data)        
    }
    searchPeople(page: number = 1, search: string = "") {
        return apiClient().get('search/repositories?q=stars:>1&order=star&per_page=10', {
            params: {page, search}
        }).then(resp => resp.data)        
    }
}

export default new SwapiService();