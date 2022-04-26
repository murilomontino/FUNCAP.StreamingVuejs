// import * as types from './mutations-types'
import * as types from "./mutations-types"

import { getters } from "../../../../../staticData/routesStoreAPI"

export default {
  ActionPlaylistNow ({ dispatch, rootGetters }, id) {
    // Variavel de controle de fluxo, caso seja falso diz que ainda não foi encontrado o video,
    // quando for, o loop só irá retornar nada, evitando reprocessamento de busca
    let hasVideo = false

    for (const item in getters) {
      const store = getters[item]

      if (!hasVideo) {
        try {
          const playlistLater = rootGetters[store].filter(playlist => playlist.id === id)[0]
          // Busca a informação
          let playlistNow = window.sessionStorage.getItem("playlist")
          // Transforma a string em objeto json
          playlistNow = JSON.parse(playlistNow)
          // Verifica se Existe uma playlist, para caso não exista mandar a que está na memória.
          // Será negativo quando o usuário der F5 na aplicação
          if (playlistLater !== undefined) {
            hasVideo = true
            // Compara o id da antiga com o novo, se for diferente basta salvar o novo e dar dispatch
            if (playlistNow && playlistNow.id !== playlistLater.id) {
              window.sessionStorage.setItem("playlist", JSON.stringify(playlistLater))
              dispatch("ActionSetPlaylist", playlistLater)
            } else {
              // Casa seja igual, dá dispatch na da memória, mas tanto faz nesse caso, agora só é pra jgoar no state.
              dispatch("ActionSetPlaylist", playlistLater)
            }
          } else {
            // Casa , dá dispatch na da memória, mas tanto faz nesse caso, agora só é pra jgoar no state.
            dispatch("ActionSetPlaylist", playlistLater)
          }
        } catch (err) {

        }
      }
    }
  },
  ActionSetPlaylist (context, playlist) {
    context.commit(types.SET_PLAYLIST, playlist)
  }
}
