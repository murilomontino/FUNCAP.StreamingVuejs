import * as types from "./mutations-types"

export default {
  [types.SET_PLAYLIST] (state, playlist) {
    state.playlist = playlist
  }
}
