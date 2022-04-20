import playlists from "../api/playlists"

const getRoutes = async (route) => {
  try {
    const items = Object.keys(playlists[route])

    return items
  } catch (error) {
    return {

    }
  }
}
export default getRoutes
