import axios from "../http"

export default {
  // Request http de Login do Usuário
  login (userData) {
    return axios.post("api/auth", userData)
  },
  // Request http de Registrar Usuário
  register (userData) {
    return axios.post("api/register", userData)
  },
  // Request de http de Validação do usuário
  loadSession () {
    return axios.post("api/loadSession")
  }
}
