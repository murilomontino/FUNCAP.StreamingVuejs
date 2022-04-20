<template>
<div class='frontend-color'>
  <Loader />
  <NavHeader :items="headerItem" :userprofile="profile" :homeURL="{ name: 'Home' }" :logo="logo">
    <template slot="responsiveRight">
      <b-col class='container-profile'>
        <ul class="d-flex align-items-center justify-content-end list-inline m-0">
          <template v-if='loginProfile'>
            <li style='padding: 15px !important'>
              <BoxNotification />
            </li>
            <li>
              <Profile v-nav-toggle style='margin-right: 15px;  width: 3rem !important;' />
            </li>
          </template>
          <li v-else>
            <a href="https://funcap.mapacultural.acesso.se.gov.br" class="btn-custom" >
              <i class="icon-size-custom ri-login-box-line"></i><span>Entrar</span>
            </a>
          </li>
        </ul>
      </b-col>
    </template>
  </NavHeader>
  <div class="main-content">
    <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in" :leave-active-class="`animated ${animated.exit}`">
      <router-view />
    </transition>
  </div>
  <Footer />
  <div id="back-to-top">
    <a class="top" href="#top" id="top"> <i class="fa fa-angle-up"></i> </a>
  </div>
</div>
</template>

<script>
import {
  core
} from "../config/pluginInit"
import Loader from "../components/core/loader/Loader"
import loader from "../assets/images/logo-full.png"
import Footer from "../components/general/FooterStreaming/Footer"
import NavHeader from "../components/core/navbars/FrontendNav"
import itemsNavBar from "../staticData/itemsNavBar"
import Profile from "../components/general/Profile/Profile"
import BoxNotification from "../components/general/BoxNotification/BoxNotification"

import {
  mapActions
} from "vuex"

export default {
  name: "BackendLayout",
  components: {
    Footer,
    Loader,
    NavHeader,
    Profile,
    BoxNotification
  },
  mounted () {
    core.index()
    document.body.style.backgroundColor = "#13181c" // COLOR BODY
    this.loginProfile = this.$store.getters["Auth/hasToken"]
  },
  data () {
    return {
      profile: "",
      animated: {
        enter: "fadeInUp",
        exit: "fadeOut"
      },
      onlyLogo: false,
      onlyLogoText: false,
      logo: loader,
      headerItem: itemsNavBar.headerItem,
      loginProfile: false
    }
  },
  methods: {
    ...mapActions("Auth", ["ActionDoLogout"]),
    changeLogo (e) {
      this.logo = e
    },
    routerAnimationChange (e) {
      this.animated = e
    },
    logout () {
      this.ActionDoLogout()
    },
    onClicked () {
      this.$router.push({
        url: "mapas.cultura.se.gov.br/login.php"
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/backend.scss";
@import "../assets/css/custom.css";
@import "../assets/scss/frontend.scss";
@import "../assets/css/developer.css";

.mobile-more-menu .iq-user-frontend-dropdown img {
  width: 40px !important;
}

.iq-user-frontend-dropdown {
  width: auto
}

.a-icon-custom {
  color: white;
  font-size: 18px;
}

.container-profile {
  margin-left: 10px !important;
}

.displayNone {
  display: none;
}

.btn-custom{
  display: inline-block !important;
  width: auto !important;
  padding: 5px;
  margin-right: 10px;
  background-color: transparent !important;
  cursor: pointer;
  span {
    color: #f2f2f2;
    padding: 5px;
    margin-right: 10px;
    font-size: 14px;
    font-variant: small-caps;
  }

  .icon-size-custom{
    font-size: 24px;
    padding: 5px
  }
}

.btn-custom:hover{

  span{
    color:var(--iq-primary);
  }
  .icon-size-custom {
    color:var(--iq-primary);
  }
}
</style>
