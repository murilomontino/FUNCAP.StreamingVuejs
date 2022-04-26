<template>
  <div>
    <Loader />
    <section class="sign-in-page">
      <router-view></router-view>
    </section>
    <div>
    <Footer />
    </div>
  </div>
</template>
<script>
import Loader from "../components/core/loader/Loader"
import logo from "../assets/images/logo.png"
import { core } from "../config/pluginInit"
import Footer from "../components/general/FooterStreaming/Footer"
export default {
  name: "AuthLayout",
  components: {
    Loader,
    Footer
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      options: {
        slidesPerView: 1,
        loop: true
      },
      logo: logo
      // bgImageURL: bgImage
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/backend.scss";
@import "../assets/css/custom.css";
@import "../assets/scss/frontend.scss";
@import "../assets/css/developer.css";

</style>
