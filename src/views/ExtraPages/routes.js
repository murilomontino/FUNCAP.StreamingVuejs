/* Extra Pages */
const ErrorPage = () => import("./ErrorPage/ErrorPage.vue")
const ComingSoon = () => import("./ComingSoon/ComingSoon.vue")
const Maintenance = () => import("./Maintenance/Maintenance.vue")

const ExtraPagesRoutes = (prop) => [{
  path: "error/:code",
  name: prop + ".error",
  meta: {
    auth: true
  },
  component: ErrorPage
},
{
  path: "coming-soon",
  name: prop + ".coming-soon",
  meta: {
    auth: true
  },
  component: ComingSoon
},
{
  path: "maintenance",
  name: prop + ".maintenance",
  meta: {
    auth: true
  },
  component: Maintenance
}
]

export default ExtraPagesRoutes
