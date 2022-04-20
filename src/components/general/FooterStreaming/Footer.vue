<template>
<footer id="contact" class="footer-one iq-bg-dark">
  <div class="footer-top">
    <div class="container-fluid">
      <div class="row footer-standard">
        <div class="col-lg-7">
          <div class="widget text-left">
            <div class="menu-footer-link-container">
              <ul id="menu-footer-link-1" class="menu p-0">
                <li id="menu-item-7316" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316">
                  <router-link :to="{name: 'information.privacypolicy'}">Politica de Privacidade</router-link>
                </li>

                <!-- <li id="menu-item-7315" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7315">
                  <router-link :to="{name: 'information.faq'}">FAQ</router-link>
                </li> -->

                <li id="menu-item-7317" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7315">
                  <router-link :to="{name: 'information.about'}">Sobre Nós</router-link>
                </li>

              <!--  <li id="menu-item-7317" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7315">
                  <router-link :to="{name: 'information.contact'}">Contato</router-link>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="widget text-left">
            <div class="textwidget">
              <p><small>© 2021 MAPA DA CULTURA DE SERGIPE. Todos os direitos reservados </small></p>
            </div>
          </div>
        </div>
        <div class="rede-social-icons col-lg-2 col-md-6 mt-4 mt-lg-0">
          <h6 class="footer-link-title">
            Siga-nos:
          </h6>
          <ul class="info-share">
            <li><a target="_blank" href="#"><i class="ri-facebook-fill"></i></a></li>
            <li><a target="_blank" href="#"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div class="widget text-left">
            <div class="sites-gov-sergipe textwidget">
              <div class="d-flex align-items-center">
                <a class="app-image" href="https://www.funcap.se.gov.br/" target="_blank">
                  <img class='img-card' src="@/assets/images/frontend/footer/funcap-logo.png" alt="funcap">
                </a>
                <a class="ml-3 app-image" href="https://www.se.gov.br/" target="_blank">
                  <img class='img-card' src="@/assets/images/frontend/footer/governo-logo.png" alt="governo sergipe">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  mounted () {}
}
</script>

<style lang="scss">
.img-card {
  max-width: 140px;
  max-height: 100px;
  width: auto;
  height: auto;
}

@media(max-width:786px) {
  .footer-top .menu-footer-link-container{
    text-align: center;
  }
  .textwidget {
    text-align: center;
  }
  .rede-social-icons{
    text-align: center;
  }
  .sites-gov-sergipe{
    display: flex;
    justify-content: center ;
  }
}

</style>
