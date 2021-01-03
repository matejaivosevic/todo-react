import BaseAPIService from "./BaseAPIService"
import ServiceAPI from "./config";
import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } from '../utils/localStorage'

class AuthService extends BaseAPIService {
  constructor(props) {
    super(props);

    const token = this.getToken();

    if (token) {
      this.attachAuthHeader(token);
    }
  }

  loginUser = async (credentials) => {
    const { data } = await this.apiClient.post(ServiceAPI.LOGIN, credentials.user);
    const token = data.token;
    const user = data.name;

    this.createSession(token, user);
    return data;
  };

  createSession = (token, user) => {
    if (!token || !user) {
      return;
    }
    setLocalStorageItem("jwt-token", token);
    setLocalStorageItem("user", JSON.stringify(user));

    this.attachAuthHeader(token);
  };

  attachAuthHeader = (token) => {
    this.http.attachHeaders({
      Authorization: `Bearer ${token}`
    });
  };

  getToken = () => {
    const token = getLocalStorageItem("jwt-token");
    return token ? token : null;
  };

  removeAuthHeader = () => {
    this.http.removeHeaders(["Authorization"]);
  };

  getLoggedUser = async () => {
    const data = await this.apiClient.get(ServiceAPI.ME);
    return data;
  }

  logout = async () => {
    const { data } = await this.apiClient.post(ServiceAPI.LOGOUT);
    this.destroySession()
    return data;
  };

  destroySession = () => {
    removeLocalStorageItem("jwt-token");
    removeLocalStorageItem("user");
    this.removeAuthHeader();
  };
}

export default new AuthService();