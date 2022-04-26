import playlists from "../api/playlists"
import fnFilter from "../filter/filterPlaylist"

const get = async (route) => {
  try {
    const items = []
    Object.keys(playlists[route]).map((playlist) => {
      const asyncGetterItem = async (list) => {
        const playlistItems = playlists[route][list]
        const filter = playlistItems.items[0].snippet.playlistId
        const playlist = await fnFilter(filter)
        items.push({
          playlist,
          playlistItems
        })
      }
      asyncGetterItem(playlist)
    })

    return items
  } catch (error) {
    return {

    }
  }
}

export default get
