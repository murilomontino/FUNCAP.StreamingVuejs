<template>
<!-- TOP Nav Bar

-->
<b-container fluid class="iq-top-navbar">

  <b-nav class="navbar navbar-expand-lg navbar-light p-0">

    <div class="wrapper-menu" @click="miniSidebar">
      <div class="main-circle"><i class="las la-bars"></i></div>
    </div>
    <b-col class='row d-flex justify-content-center'>
      <b-nav-item class="iq-navbar-logo d-flex justify-content-between">
        <router-link :to="homeURL" class="header-logo">
          <img :src="logo" class="img-fluid rounded-normal" alt="logo" />
          <div class="logo-title">
            <span class="text-primary">{{
                appName
              }}</span>
          </div>
        </router-link>
      </b-nav-item>
    </b-col>
    <div class='menu-none-display'>
      <div class="ml-auto"></div>
      <b-navbar-toggle target="nav-collapse" class="mr-2 text-primary">
        <i class="ri-menu-3-line"></i>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <slot name="responsiveRight" />
      </b-collapse>
      <slot name="right" />
    </div>
  </b-nav>
</b-container>
<!-- TOP Nav Bar END -->
</template>

<script>
import {
  APPLOGONAME
} from "../../../config/pluginInit"
import {
  mapGetters
} from "vuex"
export default {
  name: "DefaultNavBar",
  props: {
    homeURL: {
      type: Object,
      default: () => ({
        name: "dashboard.home-1"
      })
    },
    logo: {
      type: String,
      default: require("../../../assets/images/logo.png")
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array
    },
    sidebarGroupTitle: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    if (!this.horizontal) {
      document.addEventListener("click", this.closeSearch, true)
    }
  },
  computed: {
    ...mapGetters({
      bookmark: "Setting/bookmarkState"
    })
  },
  data () {
    return {
      appName: APPLOGONAME,
      showMenu: false,
      showSideBar: true
    }
  },
  methods: {
    miniSidebar () {
      this.$emit("toggle")
      this.showSideBar = !this.showSideBar
    },
    removeClass () {
      this.showSearch = false
      this.showMenu = ""
      this.globalSearch = ""
      if (
        document.getElementById("searchbox-datalink") !== null &&
        document.getElementById("searchbox-datalink") !== undefined
      ) {
        document
          .getElementById("searchbox-datalink")
          .classList.remove("show-data")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-menu {
  @media (min-width: 1300px) {
    display: none;
  }
}

.logo-title {}

.iq-top-navbar {
  padding: 0 15px 0 30px;
  min-height: 60px;
  vertical-align: middle !important;
  justify-content: center !important;
  position: fixed;
  top: 0px;
  right: 0;
  display: inline-block;
  background: var(--iq-light-card);
  margin: 0;
  transition: all 0.45s ease 0s;

  @media(max-width: 768px) {
    width: 100% !important;
  }
  @media (max-width: 1292) and (min-width: 769) {
    min-width: 300vh !important;
    background: red !important;
  }
}

body.sidebar-main .iq-top-navbar {
  @media(max-width: 768px) {
    width: 100% !important;
  }
}

.iq-sidebar-menu .iq-menu.hover-menu {
  display: flex;

  @media (max-width: 1299px) {
    display: none !important;
  }
}

.menu-none-display {
  display: flex;

  @media(max-width: 768px) {
    display: none !important;
  }
}
</style>
