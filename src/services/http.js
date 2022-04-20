import axios from "axios"
import store from "../store"

const http = axios.create({
  baseURL: "http://192.168.100.3:3000/",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
})

/*
  Intercepta as responses do servidor
*/
http.interceptors.response.use(response => {
  // Caso tudo ocorra bem, ele retorna o response pra aplicação
  return response
}, error => {
  // Caso o usuário não esteja autenticado, redireciona para a página de Login
  if (error.response.status === 401) {
    store.dispatch("Auth/ActionDoLogout")
    return window.vm.$router.push({
      name: "auth.Login"
    })
  }
  return error
})

http.interceptors.request.use(config => {
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
  config.headers["x-access-token"] = token
  return config
})

export default http
