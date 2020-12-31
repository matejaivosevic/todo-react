import BaseAPIService from "./BaseAPIService"
import ServiceAPI from "./config";

class AuthService extends BaseAPIService {
  constructor(props) {
    super(props);
  }

  registerUser = (user) => this.apiClient.post(`${ServiceAPI.REGISTER}`, user.user);
}

export default new AuthService();