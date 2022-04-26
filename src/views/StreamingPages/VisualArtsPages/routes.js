const WorkshopsPage = () => import("./WorkshopsPage")
const PanelsPage = () => import("./PanelsPage")
const SculpturesPage = () => import("./SculpturesPage")
const ArtisticDrawings = () => import("./ArtisticDrawingsPage")

const VisualArtsRoutes = (prop) => [
  {
    path: "sculptures",
    name: prop + ".sculptures",
    meta: {
      auth: false,
      name: "Esculturas"
    },
    component: SculpturesPage
  },
  {
    path: "artistic-drawings",
    name: prop + ".artistic-drawings",
    meta: {
      auth: false,
      name: "Desenhos Artísticos"
    },
    component: ArtisticDrawings
  },
  {
    path: "panels",
    name: prop + ".panels",
    meta: {
      auth: false,
      name: "Curta-Metragem"
    },
    component: PanelsPage
  },
  {
    path: "workshops",
    name: prop + ".workshops",
    meta: {
      auth: false,
      name: "Exposições"
    },
    component: WorkshopsPage
  }
]

export default VisualArtsRoutes
