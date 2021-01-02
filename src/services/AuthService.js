import BaseAPIService from "./BaseAPIService"
import ServiceAPI from "./config";

class AuthService extends BaseAPIService {
  constructor(props) {
    super(props);
  }

  loginUser = (user) => this.apiClient.post(`${ServiceAPI.LOGIN}`, user.user);
}

export default new AuthService();