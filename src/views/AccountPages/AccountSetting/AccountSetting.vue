<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
          <div class="iq-header-title">
            <h4 class="card-title">Configurações da Conta</h4>
          </div>
        </div>
        <div class="iq-card-body">
          <div class="acc-edit">
            <form>
              <div class="form-group">
                <label for="uname">Usuário:</label>
                <input type="text" class="form-control" id="uname" value="Bni@01">
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" value="Bnijohn@gmail.com">
              </div>
              <div class="form-group">
                <label for="altemail">Email Alternativo:</label>
                <input type="email" class="form-control" id="altemail" value="designtheme@gmail.com">
              </div>
              <button type="submit" class="btn btn-primary">Salvar</button>
              <button type="reset" class="btn iq-bg-danger">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
          <div class="iq-header-title">
            <h4 class="card-title">Social Media</h4>
          </div>
        </div>
        <div class="iq-card-body">
          <div class="acc-edit">
            <form>
              <div class="form-group">
                <label for="facebook">Facebook:</label>
                <input type="text" class="form-control" id="facebook" value="www.facebook.com">
              </div>
              <div class="form-group">
                <label for="twitter">Twitter:</label>
                <input type="text" class="form-control" id="twitter" value="www.twitter.com">
              </div>
              <div class="form-group">
                <label for="google">Google +:</label>
                <input type="text" class="form-control" id="google" value="www.google.com">
              </div>
              <div class="form-group">
                <label for="instagram">Instagram:</label>
                <input type="text" class="form-control" id="instagram" value="www.instagram.com">
              </div>
              <div class="form-group">
                <label for="youtube">You Tube:</label>
                <input type="text" class="form-control" id="youtube" value="www.youtube.com">
              </div>
              <button type="submit" class="btn btn-primary">Salvar</button>
              <button type="reset" class="btn iq-bg-danger">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { core } from "../../../config/pluginInit"
export default {
  name: "AccountSetting",
  mounted () {
    core.index()
  }
}
</script>
