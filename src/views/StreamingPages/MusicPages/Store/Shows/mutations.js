import * as types from "./mutations-types"

export default {
  [types.SET_SHOWS] (state, shows) {
    state.shows = shows
  }
}
