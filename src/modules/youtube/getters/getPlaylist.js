import fnFilter from "../filter/filterPlaylist"
import playlists from "../api/playlists"

const getPlaylist = async (playlistName, route) => {
  const playlistItems = playlists[playlistName][route]

  const filter = playlistItems.items[0].snippet.playlistId
  const playlist = await fnFilter(filter)

  return {
    playlist,
    playlistItems
  }
}

export default getPlaylist
