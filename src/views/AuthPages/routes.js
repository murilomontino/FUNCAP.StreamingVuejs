/* Authentic View */
const SignIn1 = () => import("./SignIn/SignIn1.vue")
const SignUp1 = () => import("./SignUp/SignUp1.vue")
const RecoverPassword1 = () => import("./RecoverPassword/RecoverPassword1.vue")
const LockScreen1 = () => import("./LockSreen/LockScreen1.vue")
const ConfirmMail1 = () => import("./CorfirmMail/ConfirmMail1.vue")

const AuthChildRoutes = (prop) => [{
  path: "login",
  name: prop + ".Login",
  meta: {
    auth: true
  },
  component: SignIn1
},
{
  path: "sign-up1",
  name: prop + ".sign-up1",
  meta: {
    auth: true
  },
  component: SignUp1
},
{
  path: "password-reset1",
  name: prop + ".password-reset1",
  meta: {
    auth: true,
    mainClass: ""
  },
  component: RecoverPassword1
},
{
  path: "lock-screen1",
  name: prop + ".lock-screen1",
  meta: {
    auth: true
  },
  component: LockScreen1
},
{
  path: "confirm-mail1",
  name: prop + ".confirm-mail1",
  meta: {
    auth: true
  },
  component: ConfirmMail1
}
]

export default AuthChildRoutes
