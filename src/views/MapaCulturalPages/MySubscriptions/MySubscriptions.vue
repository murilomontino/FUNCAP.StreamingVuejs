<template>
<b-container class='card-container d-flex flex-column w-100' fluid="sm">
  <div class="iq-header-title">
    <h4 class="card-title-custom">Minhas Inscrições</h4>
    <hr />
  </div>
</b-container>
</template>

<script>
import {
  core
} from "../../../config/pluginInit"
export default {
  name: "MySubscriptions",
  components: {

  },
  mounted () {
    core.index()
  }
}
</script>
