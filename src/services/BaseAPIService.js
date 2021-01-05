import httpService from './HttpService'

class BaseAPIService {
  constructor () {
    this.http = httpService
    this.apiClient = httpService.client
  }
}

export default BaseAPIService
