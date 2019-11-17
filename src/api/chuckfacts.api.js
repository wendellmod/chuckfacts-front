import axios from 'axios'
import { BASE_URL } from '@/config/constants'

const API = {
    getFacts() {
        const endpoint = BASE_URL+'/jokes/random'
        return axios.get(endpoint)
    }
}
export default API