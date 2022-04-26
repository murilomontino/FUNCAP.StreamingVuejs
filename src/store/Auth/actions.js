import * as types from "./mutations-types"
import services from "../../services"
import modules from "../../modules"

/*
            interface User =  {
              name: string,
              id: string,
              type: admin || normal
              img: string,
              cpf: string
            }
            interface Data {
              msg: string,
              user: User,
              token: string
            }
            res = {
              data: Data
            }
*/

export default {
  ActionDoLogin ({ dispatch }, payload) {
    const cryptData = modules.security.encrypts(payload)

    return services.auth.login({ cryptData: cryptData })
      .then(res => {
        const token = res.data.tokenEncrypt
        const user = modules.security.decrypts(res.data.userEncrypt)
        dispatch("ActionSetUser", user)
        dispatch("ActionSetToken", token)
        window.vm.$router.push({ name: "Home" })
      })
  },
  ActionSetUser (context, user) {
    context.commit(types.SET_USER, user)
  },
  ActionSetToken (context, token) {
    services.auth.setLocalToken(token)
    services.auth.setAuthorizationToken(token)
    context.commit(types.SET_TOKEN, token)
  },
  ActionDoLogout ({ dispatch }) {
    services.auth.logout()
    dispatch("ActionSetUser", {})
    dispatch("ActionSetToken", "")
    window.vm.$router.push({ name: "auth.Login" })
  },
  ActionLoadSession ({ dispatch }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await services.auth.loadSession()
        dispatch("ActionSetUser", data)
        resolve()
      } catch (err) {
        dispatch("ActionDoLogout")
        reject(err)
      }
    })
  },
  ActionVerifyToken ({ dispatch, state }) {
    if (state.token) {
      return Promise.resolve(state.token)
    }
    const token = services.auth.getLocalToken()
    if (!token) {
      return Promise.reject(new Error("Token Inválido"))
    }

    dispatch("ActionSetToken", token)
    return dispatch("ActionLoadSession")
  }
}
