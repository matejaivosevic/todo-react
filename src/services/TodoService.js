import BaseAPIService from "./BaseAPIService"
import ServiceAPI from "./config"

/* eslint quotes: ["error", "backtick"] */
/* eslint-env es6 */
class TodoService extends BaseAPIService {
      getUserTodos = () => this.apiClient.get(ServiceAPI.TODOS);

      editTodo = (id, todo) => this.apiClient.patch(`${ServiceAPI.UPDATE}/${id}`, todo)

      deleteTodo = (id) => this.apiClient.delete(`${ServiceAPI.DELETE}/${id}`)

      addTodo = (newTodo) => this.apiClient.post(`${ServiceAPI.ADD}`, newTodo)

      handleComplete = (id) => this.apiClient.patch(`${ServiceAPI.HANDLE_COMPLETED}/${id}`, {})
}

export default new TodoService()
