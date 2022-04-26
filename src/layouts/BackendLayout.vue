<template>
<!--

  .custom-collor ###customiza a cor da barra superior e lateral

  .backend-color ###Customiza a cor de todo o conteudo por baixo dos menus e outras divs

  .custom-collor-submenu ###Customiza a cor da barra de perfil do usuário

  <div class='backend-color'>
    <Loader />
    <Sidebar ### Barra Lateral de Navegação
      class='custom-collor' # Classe mencionada acima
      :items="verticalMenu"
      :logo="logo"
      :onlyLogo="onlyLogo"
      :onlyLogoText="onlyLogoText"
      @toggle="sidebarMini"
      :toggleButton="toggleSideIcon"
      :sidebarGroupTitle="sidebarGroupTitle"
    />
    <DefaultNavBar /> ### Barra Superior de Navegação

    # DIV do conteudo da página, de acordo com o filho-componente aberto
    <div id="content-page" class="content-page">
        <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in"
                    :leave-active-class="`animated ${animated.exit}`">
          <router-view/>
        </transition>
    </div>

  </div>

  -->
<b-container class='backend-color flex-column w-100'>
  <Loader />
  <!-- TOP Nav Bar -->
  <DefaultNavBar class='custom-collor-navbar' title="Painel" :homeURL="{ name: 'dashboard.home-1' }" :sidebarGroupTitle="sidebarGroupTitle" @toggle="sidebarMini" :logo="logo">
    <template slot="responsiveRight">
      <BoxNotification/>
    </template>
  </DefaultNavBar>
  <b-container class="wrapper-backend">
    <!-- Sidebar  -->
    <Sidebar class='custom-collor-siderbar' :items="verticalMenu" :logo="logo" :onlyLogo="onlyLogo" :onlyLogoText="onlyLogoText" @toggle="sidebarMini" :toggleButton="toggleSideIcon" :sidebarGroupTitle="sidebarGroupTitle" />
    <!-- TOP Nav Bar END -->
    <b-container class='iq-container-div-and-footer'>
      <b-row id="content-page" class="content-page justify-content-center" fluid="sm">
        <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in" :leave-active-class="`animated ${animated.exit}`">
          <router-view />
        </transition>
      </b-row>
      <Footer />
    </b-container>
  </b-container>
</b-container>
</template>

<script>
import {
  core
} from "../config/pluginInit"
import Loader from "../components/core/loader/Loader"
import Sidebar from "../components/core/sidebars/Sidebar"
import DefaultNavBar from "../components/core/navbars/MapaCulturalNavBar"
import SideBarItems from "../staticData/itemsSideBar"
import BoxNotification from "../components/general/BoxNotification/BoxNotification"
import loader from "../assets/images/logo.png"
import Footer from "../components/general/FooterMapaCultural/LayoutFooter"
import { mapActions } from "vuex"

export default {
  name: "BackendLayout",
  components: {
    Footer,
    Loader,
    Sidebar,
    DefaultNavBar,
    BoxNotification
  },
  created () {
    this.ActionVerifyToken()
  },
  mounted () {
    this.layoutSetting(this.$route.name)
    document.body.style.backgroundColor = "#e3ebf3" // COLOR BODY
  },
  computed: {
    toggleSideIcon () {
      var show = true
      return show
    }
  },
  watch: {
    $route: function (to, from) {
      this.layoutSetting(to.name)
    }
  },
  data () {
    return {
      animated: {
        enter: "fadeInUp",
        exit: "fadeOut"
      },
      verticalMenu: SideBarItems,
      onlyLogo: false,
      onlyLogoText: false,
      sidebarGroupTitle: true,
      logo: loader,
      message: [{
        image: require("../assets/images/user/user-1.jpg"),
        name: "Nik Emma Watson",
        date: "13 jan"
      },
      {
        image: require("../assets/images/user/user-2.jpg"),
        name: "Greta Life",
        date: "14 Jun"
      },
      {
        image: require("../assets/images/user/user-3.jpg"),
        name: "Barb Ackue",
        date: "16 Aug"
      },
      {
        image: require("../assets/images/user/user-4.jpg"),
        name: "Anna Sthesia",
        date: "21 Sept"
      },
      {
        image: require("../assets/images/user/user-5.jpg"),
        name: "Bob Frapples",
        date: "29 Sept"
      }
      ],
      notification: [{
        image: require("../assets/images/user/user-1.jpg"),
        name: "Nik Emma Watson",
        date: "23 hour ago",
        description: "Enjoy smart access to videos, games"
      },
      {
        image: require("../assets/images/user/user-2.jpg"),
        name: "Greta Life",
        date: "14 hour ago",
        description: "Google Chromecast: Enjoy a world of entertainment"
      },
      {
        image: require("../assets/images/user/user-3.jpg"),
        name: "Barb Ackue",
        date: "16 hour ago",
        description: "Dell Inspiron Laptop: Get speed and performance from"
      },
      {
        image: require("../assets/images/user/user-4.jpg"),
        name: "Anna Sthesia",
        date: "21 hour ago",
        description: "Deliver your favorite playlist anywhere in your home "
      },
      {
        image: require("../assets/images/user/user-5.jpg"),
        name: "Bob Frapples",
        date: "11 hour ago",
        description: "MacBook Air features up to 8GB of memory, a fifth-generation"
      }
      ]
    }
  },
  methods: {
    ...mapActions("Auth", ["ActionVerifyToken"]),
    layoutSetting (routeName) {
      this.onlyLogo = true
      this.onlyLogoText = true
      this.sidebarGroupTitle = true
      this.logo = loader
    },
    changeLogo (e) {
      this.logo = e
    },
    sidebarMini () {
      core.triggerSet()
      this.$store.dispatch("Setting/miniSidebarAction")
    },
    logout () {
      localStorage.removeItem("user")
      localStorage.removeItem("access_token")
      this.$router.push({
        name: "auth1.sign-in1"
      })
    },
    routerAnimationChange (e) {
      this.animated = e
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/backend.scss";
@import "../assets/css/custom.css";
@import "../assets/scss/frontend.scss";
@import "../assets/css/developer.css";

.wrapper-backend {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  box-sizing: border-box;

  @media only screen and (max-width: 768px)  {
    display: flex !important;
  }

}

.backend-color {
  background-color: #e3ebf3 !important;
}

.custom-collor-submenu {
  background-color: #141414 !important;
  width: auto !important;
}

.custom-div-footer {
  background-color: red !important;
  position: relative;
  right: 0px;
}

.custom-collor-siderbar {
  background-color: #141414 !important;
  border-right: 3px solid #26a868;
}

.custom-collor-navbar {
  background-color: #141414 !important;
}

.custom-collor-mini-footer {
  background-color: #141414 !important;
}

.iq-container-div-and-footer{
  position: relative !important;
  width: 100% !important;
  @media(max-width: 768px) {
    position: absolute !important;
    min-width: 115% !important;
    overflow-y: auto;
    left: -10px !important;
    top: 0px !important;
  }
}
</style>
