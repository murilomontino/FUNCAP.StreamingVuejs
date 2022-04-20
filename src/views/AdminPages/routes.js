// Rotas de Acesso do adminstrador
const Report = () => import("./Report/Report.vue")
const ItemCulturalAgents = () => import("./ItemCulturalAgents/ItemCulturalAgents.vue")
const ItemCulturalEntities = () => import("./ItemCulturalEntities/ItemCulturalEntities.vue")
const ItemOportunities = () => import("./ItemOportunities/ItemOportunities.vue")
const Financial = () => import("./Financial/Financial.vue")
const AreaAdmin = () => import("./AreaAdmin/AreaAdmin.vue")
const NoticesCommission = () => import("./NoticesCommission/NoticesCommission.vue")
const InsertDocument = () => import("./InsertDocument/InsertDocument.vue")

const adminRoutes = (prop) => [{
  path: "report",
  name: prop + ".report",
  meta: {
    admin: true,
    auth: true,
    name: "Report"
  },
  component: Report
},
{
  path: "itemCulturalAgents",
  name: prop + ".itemCulturalAgents",
  meta: {
    admin: true,
    auth: true,
    name: "ItemCulturalAgents"
  },
  component: ItemCulturalAgents
},
{
  path: "itemCulturalEntities",
  name: prop + ".itemCulturalEntities",
  meta: {
    admin: true,
    auth: true,
    name: "ItemCulturalEntities"
  },
  component: ItemCulturalEntities
},
{
  path: "itemOportunities",
  name: prop + ".itemOportunities",
  meta: {
    admin: true,
    auth: true,
    name: "ItemOportunities"
  },
  component: ItemOportunities
},
{
  path: "financial",
  name: prop + ".financial",
  meta: {
    admin: true,
    auth: true,
    name: "Financial"
  },
  component: Financial
},
{
  path: "areaAdmin",
  name: prop + ".areaAdmin",
  meta: {
    admin: true,
    auth: true,
    name: "AreaAdmin"
  },
  component: AreaAdmin
},
{
  path: "insertDocument",
  name: prop + ".insertDocument",
  meta: {
    admin: true,
    auth: true,
    name: "InsertDocument"
  },
  component: InsertDocument
},
{
  path: "noticesCommission",
  name: prop + ".noticesCommission",
  meta: {
    admin: true,
    auth: true,
    name: "NoticesCommission"
  },
  component: NoticesCommission
}
]

export default adminRoutes
