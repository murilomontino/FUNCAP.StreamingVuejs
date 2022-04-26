import axios from "../http"

export default {
  getCategories () {
    return axios.get("/api/categories")
  }
}
