import Vue from "vue"
import VueRouter from "vue-router"
// import beforeEach from './beforeEach'

// import AdminRoutes from '../views/AdminPages/routes'
// import AuthChildRoutes from '../views/AuthPages/routes'
// import MapaCulturalRoutes from '../views/MapaCulturalPages/routes'
import InformationRoutes from "../views/InformationPages/routes"
import ExtraPagesRoutes from "../views/ExtraPages/routes"
// import AccountRoutes from '../views/AccountPages/routes'
import StreamingRoutes from "../views/StreamingPages/routes"

/* Layouts */
// const BackendLayout = () => import('../layouts/BackendLayout')
const FrontendLayout = () => import("../layouts/FrontendLayout")
const Default = () => import("../layouts/BlankLayout")
// const AuthLayout = () => import('../layouts/AuthLayout')

const Home = () => import("../views/StreamingPages/HomePage/Home.vue")

Vue.use(VueRouter)

const generalPages = () => [
  {
    path: "/",
    name: "Home",
    meta: {
      auth: true,
      name: "Home",
      slider: "true"
    },
    component: Home
  }
]

const routes = [
  {
    path: "/",
    name: "home",
    component: FrontendLayout,
    meta: {
      auth: true
    },
    children: generalPages()
  },
  {
    path: "/information",
    name: "Information",
    component: FrontendLayout,
    meta: {
      auth: false
    },
    children: InformationRoutes("information")
  },
  /*   {
    path: '/dashboard',
    name: 'dashboard',
    component: BackendLayout,
    meta: {
      auth: true
    },
    children: MapaCulturalRoutes('dashboard')
  },
  {
    path: '/user',
    name: 'user',
    component: FrontendLayout,
    meta: {
      auth: true
    },
    children: AccountRoutes('user')
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    meta: {
      auth: true
    },
    children: AuthChildRoutes('auth')
  }, */
  {
    path: "/pages",
    name: "pages",
    component: Default,
    meta: {
      auth: true
    },
    children: ExtraPagesRoutes("default")
  },
  // Admin PAGES
  /*   {
    path: '/admin',
    name: 'admin',
    component: BackendLayout,
    meta: {
      auth: true,
      admin: true
    },
    children: AdminRoutes('admin')
  }, */
  // Streaming pages
  {
    path: "/streaming",
    name: "streaming",
    component: FrontendLayout,
    meta: {
      auth: true,
      admin: true
    },
    children: StreamingRoutes("streaming")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  routes
})

// router.beforeEach(beforeEach)
export default router
