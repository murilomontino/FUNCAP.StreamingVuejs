import axios from "../http"

export default {
  getDocumentaries () {
    return axios.get("/api/documentaries")
  },
  getPlaylist (playlist) {
    return axios.get(`/playlist/${playlist}`)
  }
}
