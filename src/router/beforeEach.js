import store from "../store"

const protectKey = ["dashboard", "user"]
const protectAuth = "auth"

export default async (to, from, next) => {
  let hasToken = store.getters["Auth/hasToken"]
  const primaryRoute = to.name.split(".")[0]

  if (protectKey.indexOf(primaryRoute) !== -1 && to.name !== "auth.Login" && !hasToken) {
    try {
      await store.dispatch("Auth/ActionVerifyToken")
      hasToken = store.getters["Auth/hasToken"]

      next({ name: to.name })
    } catch (err) {
      next({ name: "auth.Login" })
    }
  } else if (primaryRoute === protectAuth && hasToken) {
    next({
      name: "Home"
    })
  } else {
    try {
      await store.dispatch("Auth/ActionVerifyToken")
      hasToken = store.getters["Auth/hasToken"]
      next()
    } catch (err) {
      next()
    }
  }

  next()
}
