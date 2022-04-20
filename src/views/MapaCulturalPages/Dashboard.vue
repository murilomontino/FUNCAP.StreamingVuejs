<template>
<b-container class='card-container justify-content-center flex-column w-100' fluid="sm">
  <b-row class="row">
      <h1>Painel Principal</h1>
  </b-row>
</b-container>
</template>

<script>
import {
  core
} from "../../config/pluginInit"
export default {
  name: "Dashboard",
  mounted () {
    core.index()
  },
  components: {}
}
</script>
