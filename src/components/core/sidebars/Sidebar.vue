<template>
<!--
  A classe wrapper-menu define o estilo do icone.
  Tamanho, cor e etc

  <div class="wrapper-menu" @click="miniSidebar">
    <div class="custom-bars-sidebar-icon main-circle"><i class="las la-bars"></i></div>
  </div>
-->
<b-container class="iq-sidebar">
  <a :href="$router.resolve('/').href" class="text-primary iq-visit-link"><i class="ri-arrow-left-line"></i></a>
  <b-row class='item-profile-component'>
      <ProfileComponent />
  </b-row>
  <div class="mobile-true d-flex flex-row-reverse">
    <div class=" iq-menu-bt-sidebar">
      <div class="iq-menu-bt align-self-center">
        <div class="wrapper-menu" @click="miniSidebar">
          <div class="main-circle"><i class="las la-bars"></i></div>
        </div>
      </div>
    </div>
  </div>
  <div id="sidebar-scrollbar">

    <nav class="iq-sidebar-menu" :class="horizontal ? 'd-xl-none' : ''">
      <CollapseMenu :items="items" :open="true" :horizontal="horizontal" :sidebarGroupTitle="sidebarGroupTitle" />
    </nav>
    <div class="p-3"></div>
  </div>
</b-container>
<!-- TOP Nav Bar -->
</template>

<script>
import CollapseMenu from "../menus/CollapseMenu"
import {
  APPLOGONAME
} from "../../../config/pluginInit"
import ProfileComponent from "../profileBar/ProfileComponent"
export default {
  name: "Sidebar",
  props: {
    logo: {
      type: String,
      default: require("../../../assets/images/logo.png")
    },
    horizontal: {
      type: Boolean
    },
    toggleButton: {
      type: Boolean,
      default: true
    },
    logoShow: {
      type: Boolean,
      default: true
    },
    onlyLogo: {
      type: Boolean,
      default: false
    },
    onlyLogoText: {
      type: Boolean,
      default: false
    },
    sidebarGroupTitle: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CollapseMenu,
    ProfileComponent
  },
  mounted () { },
  methods: {
    miniSidebar () {
      this.$emit("toggle")
    }
  },
  data () {
    return {
      appName: APPLOGONAME,
      homeURL: {
        name: "dashboard.home-1"
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.item-profile-component{
  justify-content: center;
  vertical-align: middle;
}
.mobile-true{
  display: none !important;
  @media(max-width: 768px) {
    display: flex !important;
  }
}
</style>
