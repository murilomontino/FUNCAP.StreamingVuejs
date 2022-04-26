/**
 * @typedef Movies
 * @type { Object }
 * @property { string } Movies.id - ID único do video
 * @property { string } Movies.publishedAt - Data de Publicação
 * @property { string } Movies.title - Titulo
 * @property { string } Movies.description - Descrição
 * @property { Thumbnail[] } Movies.thumbnails - Imagens dos Videos
 * @property { Videos[] } Movies.videos
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
 *
 *
 */

export default {
  /** @type {Movies[]} */
  Movies: []
}
