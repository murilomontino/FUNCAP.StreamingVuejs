import MoreCultureRoutes from "./MoreCulturePages/routes"
import MovieRoutes from "./MoviePages/routes"
import VisualArtsRoutes from "./VisualArtsPages/routes"
import MusicRoutes from "./MusicPages/routes"

const StreamingPagesRoutes = (prop) => [
  ...MoreCultureRoutes(prop),
  ...MovieRoutes(prop),
  ...VisualArtsRoutes(prop),
  ...MusicRoutes(prop),
]

export default StreamingPagesRoutes
