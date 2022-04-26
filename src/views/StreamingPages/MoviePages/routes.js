
const TvPrograms = () => import("./TvPrograms")
const Movies = () => import("./MoviesPage")
const VideoPage = () => import("./VideoPage")

const MoviePagesRoutes = (prop) => [
  {
    path: "/watch/:playlist&video=:id",
    name: prop + ".watch",
    meta: {
      auth: false,
      name: "Watch"
    },
    component: VideoPage
  },
  {
    path: "movies",
    name: prop + ".movies",
    meta: {
      auth: false,
      name: "Filmes"
    },
    component: Movies
  },
  {
    path: "tv-programs",
    name: prop + ".tv-programs",
    meta: {
      auth: false,
      name: "Programas Para TV"
    },
    component: TvPrograms
  }
]

export default MoviePagesRoutes
