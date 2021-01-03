import axios from "axios";
import foreach from "lodash/each";

class HttpService {
  constructor(clientConfig = {}) {
    this.client = axios.create(clientConfig);
  }

  attachHeaders = (headers = {}) => {
    Object.assign(this.client.defaults.headers, headers);
  };

  removeHeaders = (headers = []) => {
    headers.forEach((key) => delete this.client.defaults.headers[key]);
  };
}

const clientConfig = {
  baseURL: process.env.REACT_APP_API_URL
};

export default new HttpService(clientConfig);