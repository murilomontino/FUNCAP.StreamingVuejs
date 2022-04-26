import * as types from "./mutations-types"

export default {
  [types.SET_WORKSHOPS] (state, workshops) {
    state.workshops = workshops
  }
}
