/**
 * @typedef User
 * @type { Object }
 * @property { string } user.id - ID único do usuário
 * @property { number } user.type - Tipo de Usuário  1 || 2 || 3
 * @property { string } user.img - Url da imagem de perfil
 * @property { string } user.name - Nome
 * @property { string } user.cpf - CPF
 *
 */

export default {
  /** @type {User} */
  user: {
    id: "",
    type: "",
    img: "",
    name: "",
    cpf: ""
  },
  token: ""
}
