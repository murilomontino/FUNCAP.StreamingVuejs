import * as types from "./mutations-types"

export default {
  [types.SET_HOMESLIDE] (state, content) {
    state.homeSlide = content
  }
}
