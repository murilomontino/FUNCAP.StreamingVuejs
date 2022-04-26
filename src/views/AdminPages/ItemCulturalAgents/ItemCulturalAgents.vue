<template>
  <b-container class='card-container iq-card-block' fluid>
    <b-row class="row">
      <b-col sm="12">
        <div>
          <h1>Inciso Agentes Culturais</h1>
        </div>
      </b-col >
    </b-row>
  </b-container>
</template>
<script>
import { core } from "../../../config/pluginInit"
export default {
  name: "ItemCulturalAgents",
  components: {

  },
  mounted () {
    core.index()
  }
}
</script>
