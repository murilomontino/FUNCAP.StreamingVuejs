// import Vue from 'vue'

import modules from "@/modules"

import StoreStreaming from "../StreamingStore"
import storeRoutes, { setters } from "../../../staticData/routesStoreAPI"

import * as types from "./mutations-types"

export default {
  async ActionDatabasePopulation ({ rootState }, playlistRoute) {
    const Conteudo = []
    const playlist = await modules.youtube.getters.getRoutes(playlistRoute)

    // Verifica se em sessionStorage há os topicos
    playlist.map(route => {
      const mapAsync = async () => {
        // Busca rota na memória

        let routeMemory = window.sessionStorage.getItem(route)
        routeMemory = JSON.parse(routeMemory)

        // Caso existe ela da push no state lives para acesso da aplicação
        if (routeMemory) {
          Conteudo.push(routeMemory)
        } else {
          const item = await modules.youtube.getters.getPlaylist(playlistRoute, route)

          const content = {
            id: item.playlist.id,
            publishedAt: item.playlist.snippet.publishedAt,
            publishedAtNew: item.playlistItems.items[item.playlistItems.items.length - 1].snippet.publishedAt,
            title: item.playlist.snippet.title,
            description: item.playlist.snippet.description,
            videos: [],
            thumbnails: item.playlist.snippet.thumbnails
          }

          // Videos da playlist separados em outro objeto
          item.playlistItems.items.map(video => {
            if (video.snippet && (video.snippet.title !== "Deleted video" && video.snippet.title !== "Private video")) {
              content.videos.push({
                id: video.snippet.resourceId.videoId,
                publishedAt: video.snippet.publishedAt,

                thumbnails: video.snippet.thumbnails,
                title: video.snippet.title,
                description: video.snippet.description
              })
            }
          })

          content.videos.sort((a, b) => a.publishedAt > b.publishedAt ? -1 : 1)

          // salva na memória
          window.sessionStorage.setItem(route, JSON.stringify(content))
          // salva no estado da aplicação
          Conteudo.push(content)
        }
      }
      mapAsync()
    })

    switch (playlistRoute) {
      // A
      case storeRoutes.MOVIES:
        StoreStreaming.Movies.mutations[setters.Movies](rootState.Movies, Conteudo)
        break

      case storeRoutes.SHOWS:

        StoreStreaming.Shows.mutations[setters.Shows](rootState.Shows, Conteudo)
        break
      // T
      case storeRoutes.TVPROGRAMS:
        StoreStreaming.TvPrograms.mutations[setters.TvPrograms](rootState.TvPrograms, Conteudo)
        break
      // W
      case storeRoutes.WORKSHOPS:
        StoreStreaming.Workshops.mutations[setters.Workshops](rootState.Workshops, Conteudo)
        break

      default:
        break
    }
  },

  async ActionHomeSlide (context, playlistRoute) {
    const playlist = await modules.youtube.getters.getRoutes(playlistRoute)

    playlist.map(route => {
      const mapAsync = async () => {
        // Busca rota na memória
        let routeMemory = window.sessionStorage.getItem(route)
        routeMemory = JSON.parse(routeMemory)
        // Caso existe ela da push no state lives para acesso da aplicação
        if (routeMemory) {
          context.commit(types.SET_HOMESLIDE, routeMemory)
        } else {
          const item = await modules.youtube.getters.getPlaylist(playlistRoute, route)
          // salva na memória
          window.sessionStorage.setItem(route, JSON.stringify(item.playlistItems.items))
          // salva no estado da aplicação
          context.commit(types.SET_HOMESLIDE, item.playlistItems.items)
        }
      }
      mapAsync()
    })
  }
}
