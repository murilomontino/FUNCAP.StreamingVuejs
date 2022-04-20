<template>
    <MiniFooter class='custom-collor-mini-footer'>
      <template v-slot:left>
        <router-link class="list-inline-item color-text" target="_blank" :to="{name: 'information.about'}">Sobre Nós</router-link>
        <router-link class="list-inline-item color-text" target="_blank" :to="{name: 'information.privacypolicy'}">Politica de Privacidade</router-link>
      </template>
      <template v-slot:right>
        © 2020 <a href="#">{{ appName }}</a> Todos os Direitos Reservados.
      </template>
    </MiniFooter>
</template>
<script>
import MiniFooter from "../../core/footer/MiniFooter"
import { APPNAME } from "../../../config/pluginInit"
export default {
  name: "LayoutFooter",
  components: {
    MiniFooter
  },
  mounted () {
  },
  data () {
    return {
      appName: APPNAME
    }
  }
}
</script>
<style>
.color-text {
  color: #fff !important;
}

</style>
