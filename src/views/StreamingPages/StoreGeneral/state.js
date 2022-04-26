/**
 * @typedef Content
 * @type { Object }
 * @property { string } content.id - ID único do video
 * @property { string } content.publishedAt - Data de Publicação
 * @property { string } content.title - Titulo
 * @property { string } content.description - Descrição
 * @property { Thumbnail[] } content.thumbnails - Imagens dos Videos
 * @property { Videos[] } content.videos
 *
 *
 * @typedef Videos
 * @type {Object}
 * @property { string } video.description - Descrição
 * @property { string } video.image
 * @property { string } video.title
 * @property { string } video.id
 * @property { Thumbnail[] } video.thumbnails
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
 */

export default {
  /** @type {Content[]} */
  trendings: [],
  /** @type {Content[]} */
  homeSlide: []
}
