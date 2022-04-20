import playlists from "../api/playlist.json"

const fnFilter = async (filter) => {
  const filtered = playlists.items.filter(item => item.id === filter)[0]

  return filtered
}

export default fnFilter
