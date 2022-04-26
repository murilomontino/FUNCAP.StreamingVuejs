/* Backend View */
const Dashboard = () => import("./Dashboard.vue")
const Opportunities = () => import("./Opportunities/Opportunities.vue")
const Search = () => import("./Search/Search.vue")
const MySubscriptions = () => import("./MySubscriptions/MySubscriptions.vue")
const MyDocumentation = () => import("./MyDocumentation/MyDocumentation.vue")
const GroupOrCulturalSpace = () => import("./GroupOrCulturalSpace/GroupOrCulturalSpace.vue")
const MyPortfolio = () => import("./MyPortfolio/MyPortfolio.vue")

const MapaCulturalPages = (prop) => [{
  path: "home-1",
  name: prop + ".home-1",
  meta: {
    auth: true,
    name: "Home 1"
  },
  component: Dashboard
},
{
  path: "opportunities",
  name: prop + ".opportunities",
  meta: {
    auth: true,
    name: "Opportunities"
  },
  component: Opportunities
},
{
  path: "pageSearch",
  name: prop + ".pageSearch",
  meta: {
    auth: true,
    name: "PageSearch"
  },
  component: Search
},
{
  path: "mySubscriptions",
  name: prop + ".mySubscriptions",
  meta: {
    auth: true,
    name: "MySubscriptions"
  },
  component: MySubscriptions
},
{
  path: "myDocumentation",
  name: prop + ".myDocumentation",
  meta: {
    auth: true,
    name: "MyDocumentation"
  },
  component: MyDocumentation
},
{
  path: "myPortfolio",
  name: prop + ".myPortfolio",
  meta: {
    auth: true,
    name: "MyPortfolio"
  },
  component: MyPortfolio
},
{
  path: "groupOrCulturalSpace",
  name: prop + ".groupOrCulturalSpace",
  meta: {
    auth: true,
    name: "GroupOrCulturalSpace"
  },
  component: GroupOrCulturalSpace
}
]

export default MapaCulturalPages
