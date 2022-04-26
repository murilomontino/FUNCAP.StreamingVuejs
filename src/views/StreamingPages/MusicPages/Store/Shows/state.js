/**
 * @typedef Shows
 * @type { Object }
 * @property { string } shows.id - ID único do video
 * @property { string } shows.publishedAt - Data de Publicação
 * @property { string } shows.title - Titulo
 * @property { string } shows.description - Descrição
 * @property { Thumbnail[] } shows.thumbnails - Imagens dos Videos
 * @property { Videos[] } shows.videos
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
  /** @type {Shows[]} */
  shows: []
}
