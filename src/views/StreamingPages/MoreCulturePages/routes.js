const ArtistPage = () => import("./ArtistsPage")
const CulturalSpacePage = () => import("./CulturalSpacesPage")
const CultureHousePage = () => import("./CultureHousesPage")
const MuseumsPage = () => import("./MuseumsPage")
const PatrimonyPage = () => import("./PatrimonyPage")
const TheatersPage = () => import("./TheatersPage")
const SergipeSearchesPage = () => import("./SergipeSearchesPage")

const MoreCultureRoutes = (prop) => [
  {
    path: "artist",
    name: prop + ".artist",
    meta: {
      auth: false,
      name: "Artistas"
    },
    component: ArtistPage
  },
  {
    path: "cultural-space",
    name: prop + ".cultural-space",
    meta: {
      auth: false,
      name: "Espaços Culturais"
    },
    component: CulturalSpacePage
  },
  {
    path: "culture-house",
    name: prop + ".culture-house",
    meta: {
      auth: false,
      name: "Casas de Cultura"
    },
    component: CultureHousePage
  },
  {
    path: "museums",
    name: prop + ".museums",
    meta: {
      auth: false,
      name: "Museus"
    },
    component: MuseumsPage
  },
  {
    path: "patrimony",
    name: prop + ".patrimony",
    meta: {
      auth: false,
      name: "Patrimônio"
    },
    component: PatrimonyPage
  },
  {
    path: "theaters",
    name: prop + ".theaters",
    meta: {
      auth: false,
      name: "Teatros"
    },
    component: TheatersPage
  },
  {
    path: "sergipe-searches",
    name: prop + ".sergipe-searches",
    meta: {
      auth: false,
      name: "Pesquisas de Sergipe"
    },
    component: SergipeSearchesPage
  }
]

export default MoreCultureRoutes
