import * as types from "./mutations-types"

export default {
  [types.SET_MOVIES] (state, movies) {
    state.Movies = movies
  }
}
