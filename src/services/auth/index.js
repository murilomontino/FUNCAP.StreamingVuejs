import requests from "./request"
import storage from "./storage"

export default {
  // Serviços de Chamada pro servidor
  ...requests,
  // Serviços de chamada de localStorage e que não envolvam requisições ao servidor
  ...storage
}
