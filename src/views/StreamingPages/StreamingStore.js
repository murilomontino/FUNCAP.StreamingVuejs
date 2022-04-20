import MovieStore from "./MoviePages/MovieStore"
import StoreGeneral from "./StoreGeneral"
import MusicStore from "./MusicPages/MusicStore"
import VisualArtsStore from "./VisualArtsPages/VisualArtsStore"

export default {
  ...MovieStore,
  ...MusicStore,
  ...VisualArtsStore,
  StoreGeneral

}
