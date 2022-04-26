<template>
  <!-- TOP Nav Bar -->
  <header id="main-header" class="w-100">
    <b-col sm="12" class="w-100">
      <nav class="navbar navbar-expand-lg navbar-light p-0 w-100">
        <a
          href="javascript:void(0)"
          class="navbar-toggler c-toggler collapsed"
          @click="openSidebar"
        >
          <div class="navbar-toggler-icon" data-toggle="collapse">
            <span class="navbar-menu-icon navbar-menu-icon--top"></span>
            <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
            <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
          </div>
        </a>
        <router-link class="navbar-brand" :to="homeURL">
          <img
            class="img-fluid logo"
            :src="logo"
            alt="mapa-cultural-de-sergipe"
        /></router-link>
        <b-collapse id="navbarSupportedContent" is-nav :visible="sidebar">
          <div class="menu-main-menu-container">
            <ul id="top-menu" class="navbar-nav ml-auto">
              <li v-for="(item, index) in items" :key="index" class="menu-item">
                <router-link :to="urlValid(item.link)"  >
                  <span class="url-button" @click="redirectURL(item.link)">{{item.title}}</span>
                </router-link>
                <ul class="sub-menu" v-if="item.child">
                  <li
                    class="menu-item"
                    v-for="(childitem, childindex) in item.children"
                    :key="childindex"
                  >
                    <router-link
                      :class="childitem.content ? '' : 'false-content'"
                      :to="childitem.content ? childitem.link : ''"
                    >
                      <span
                        >{{ childitem.title }}
                        <i
                          v-if="!childitem.content"
                          class="icon-size-custom fa fa-lock"
                        ></i>
                      </span>
                    </router-link>
                    <ul class="sub-menu" v-if="childitem.grandchild">
                      <li
                        class="menu-item"
                        v-for="(
                          grandchilditem, grandchildindex
                        ) in childitem.children"
                        :key="grandchildindex"
                      >
                        <router-link
                          :class="grandchilditem.content ? '' : 'false-content'"
                          :to="
                            grandchilditem.content ? grandchilditem.link : ''
                          "
                        >
                          <span
                            >{{ grandchilditem.title }}
                            <i
                              v-if="!grandchilditem.content"
                              class="icon-size-custom fa fa-lock"
                            ></i>
                          </span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </b-collapse>
        <div class="mobile-more-menu">
          <b-navbar-toggle target="dropdownMenuButton" class="more-toggle">
            <i class="ri-more-line"></i>
          </b-navbar-toggle>
          <b-collapse id="dropdownMenuButton" class="more-menu">
            <div class="navbar-right position-relative">
              <slot name="responsiveRight" />
            </div>
          </b-collapse>
        </div>
        <div class="navbar-right menu-right">
          <slot name="responsiveRight" />
        </div>
      </nav>
      <div class="nav-overlay"></div>
    </b-col>
  </header>
  <!-- TOP Nav Bar END -->
</template>

<script>
import { core, APPLOGONAME } from "../../../config/pluginInit"
export default {
  name: "FrontendNav",
  props: {
    homeURL: {
      type: Object,
      default: () => ({
        name: "dashboard.home-1",
      }),
    },
    logo: {
      type: String,
      default: require("../../../assets/images/logo.png"),
    },
    items: {
      type: Array,
    },
    userprofile: {
      type: String,
    },
  },
  data () {
    return {
      appName: APPLOGONAME,
      sidebar: false,
    }
  },
  mounted () {
    core.index()
    document.addEventListener("click", this.closeSidebar, true)
  },
  destroyed () {
    document.removeEventListener("click", this.closeSidebar, true)
  },
  methods: {
    closeSidebar (e) {
      if (!e.target.classList.contains("navbar-toggler-icon")) {
        this.sidebar = false
        document.getElementsByTagName("body")[0].classList.remove("nav-open")
      }
    },
    openSidebar () {
      document.getElementsByTagName("body")[0].classList.add("nav-open")
      this.sidebar = true
    },
    urlValid (link) {
      if (link && link.match(/^(http|https):\/\/[^ "]+$/)) {
        return ""
      }
      return link ?? ""
    },
    redirectURL (link) {
      if (link && link.match(/^(http|https):\/\/[^ "]+$/)) {
        window.location.href = link
      }
    }
  },
}
</script>

<style>
.menu-right {
  width: 1rem !important;
}

.false-content:hover {
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.false-content span {
  color: gray;
}

.url-button {
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.url-button:hover {
  color: orange;
}

</style>
