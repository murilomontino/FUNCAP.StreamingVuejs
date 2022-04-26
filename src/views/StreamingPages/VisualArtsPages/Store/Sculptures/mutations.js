import * as types from "./mutations-types"

export default {
  [types.SET_CIRCUS] (state, circus) {
    state.circus = circus
  }
}
