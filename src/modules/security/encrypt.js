import { SECRET as key } from "./secret"
import SimpleCrypto from "simple-crypto-js"

export default {
  encrypts (obj) {
    const crypto = new SimpleCrypto(key)
    const stringCrypt = crypto.encrypt(obj)

    return stringCrypt
  }
}
