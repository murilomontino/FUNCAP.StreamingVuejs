<template>
  <b-container>
    <ComingSoon/>
  </b-container>
</template>
<script>
import { core } from "@/config/pluginInit"
import ComingSoon from "@/views/ExtraPages/ComingSoon/ComingSoon.vue"

export default {
  name: "Espaços Culturais",
  components: {
    ComingSoon

  },
  mounted () {
    core.index()
  }
}
</script>
