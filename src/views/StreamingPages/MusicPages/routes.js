const ShowsPage = () => import("./ShowsPage")

const MusicRoutes = (prop) => [
  {
    path: "shows",
    name: prop + ".shows",
    meta: {
      auth: false,
      name: "Shows"
    },
    component: ShowsPage
  }
]

export default MusicRoutes
