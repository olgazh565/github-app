import axios from "axios"

const apiClient = () => {
    const baseURL = 'https://api.github.com/'

    const axiosInstance = axios.create ({
        baseURL,
        responseType: 'json',
        headers: {
            "Content-type": "application/json"
        }
    })
    return axiosInstance

}

export default apiClient