import * as types from "./mutations-types"

export default {
  [types.SET_ARTISTICDRAWINGS] (state, artisticDrawings) {
    state.artisticDrawings = artisticDrawings
  }
}
