/**
 * @typedef Workshops
 * @type { Object }
 * @property { string } workshop.id - ID único do video
 * @property { string } workshop.publishedAt - Data de Publicação
 * @property { string } workshop.title - Titulo
 * @property { string } workshop.description - Descrição
 * @property { Thumbnail[] } workshop.thumbnails - Imagens dos Videos
 * @property { Videos[] } workshop.videos
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
  /** @type {Workshops[]} */
  workshops: []
}
