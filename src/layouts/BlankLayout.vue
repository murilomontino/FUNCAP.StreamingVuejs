<template>
<div>
  <Loader />
  <div :class="this.$route.meta.mainClass == '' ? '' : 'main-content'">
    <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in" :leave-active-class="`animated ${animated.exit}`">
      <router-view />
    </transition>
  </div>
  <Footer />
</div>
</template>

<script>
import Loader from "../components/core/loader/Loader"
import {
  core
} from "../config/pluginInit"
import Footer from "../components/general/FooterStreaming/Footer"

export default {
  name: "BlankLayout",
  components: {
    Loader,
    Footer
  },
  mounted () {
    core.index()
  }
}
</script>

<style lang="scss">
@import "../assets/scss/backend.scss";
@import "../assets/css/custom.css";
@import "../assets/scss/frontend.scss";
@import "../assets/css/developer.css";

.modal-backdrop {
  opacity: .5;
}
</style>
