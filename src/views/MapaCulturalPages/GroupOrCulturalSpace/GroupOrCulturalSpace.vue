<template>
<b-container class='card-container d-flex flex-column w-100' fluid="sm">
  <div class="iq-header-title">
    <h4 class="card-title-custom">Grupos ou Espaços Culturais</h4>
    <hr/>
  </div>

</b-container>
</template>
<script>
import { core } from "../../../config/pluginInit"

export default {
  name: "GroupOrCulturalSpace",
  components: {

  },
  mounted () {
    core.index()
  }
}
</script>
