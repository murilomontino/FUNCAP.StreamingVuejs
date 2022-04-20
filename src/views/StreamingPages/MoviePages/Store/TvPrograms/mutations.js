import * as types from "./mutations-types"

export default {
  [types.SET_TV_PROGRAMS] (state, tvPrograms) {
    state.TvPrograms = tvPrograms
  }
}
