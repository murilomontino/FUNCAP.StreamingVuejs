/**
 * @typedef Lives
 * @type { Object }
 * @property { string } live.id - ID único do video
 * @property { string } live.publishedAt - Data de Publicação
 * @property { string } live.title - Titulo
 * @property { string } live.description - Descrição
 * @property { Thumbnail[] } live.thumbnails - Imagens dos Videos
 * @property { Videos[] } live.videos
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
  /** @type {TvPrograms[]} */
  TvPrograms: []
}
