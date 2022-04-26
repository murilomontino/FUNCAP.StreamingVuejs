/**
 * @typedef Playlist
 * @type { Object }
 * @property { string } playlist.id - ID único do video
 * @property { string } playlist.publishedAt - Data de Publicação
 * @property { string } playlist.title - Titulo
 * @property { string } playlist.description - Descrição
 * @property { Thumbnail } playlist.thumbnails - Imagens dos Videos
 * @property { Videos[] } playlist.videos
 *
 *
 * @typedef Videos
 * @type {Object}
 * @property { string } video.description - Descrição
 * @property { string } video.image
 * @property { string } video.title
 * @property { string } video.id
 *
 * @typedef ConfigThumbnail
 * @type { Object }
 * @property { string } config.url
 * @property { number } config.width
 * @property { number } config.height
 *
 * @typedef Thumbnail
 * @type { Object }
 * @property { ConfigThumbnail } thumbnail.default
 * @property { ConfigThumbnail } thumbnail.medium
 * @property { ConfigThumbnail } thumbnail.high
 * @property { ConfigThumbnail } thumbnail.standard
 * @property { ConfigThumbnail } thumbnail.maxres
 *
 *
 */

export default {
  /** @type {Playlist} */
  playlist: {
    title: "",
    description: "",
    publishedAt: "",
    id: "",
    thumbnails: {
      default: {},
      high: {},
      maxres: {},
      medium: {},
      standard: {}
    },
    videos: []
  }
}
