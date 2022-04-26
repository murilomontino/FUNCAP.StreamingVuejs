import axios from "../http"

export default {
  logout () {
    localStorage.removeItem("token")
    this.setAuthorizationToken("")
  },
  setAuthorizationToken (token) {
    axios.defaults.headers["x-access-token"] = token
  },
  getLocalToken () {
    return localStorage.getItem("token")
  },
  setLocalToken (token) {
    localStorage.setItem("token", token)
  }
}
