import config from '../config/config.json'
import axios from 'axios'

const baseUrl = config.baseUrl;

class UserService {

    register = user => {
        return axios.post(`${baseUrl}todoapp/register`, user);
    }
}

export default new UserService();