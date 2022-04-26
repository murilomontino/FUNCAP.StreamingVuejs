import { SECRET as key } from "./secret"
import SimpleCrypto from "simple-crypto-js"

export default {
  decrypts (obj) {
    const crypto = new SimpleCrypto(key)
    const objDecrypted = crypto.decrypt(obj)
    return objDecrypted
  }
}
