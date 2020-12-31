import axios from "axios";
import foreach from "lodash/each";

class HttpService {
  constructor(clientConfig = {}) {
    this.client = axios.create(clientConfig);
  }
}

const clientConfig = {
  baseURL: process.env.REACT_APP_API_URL
};

export default new HttpService(clientConfig);