<template>
  <b-container>
    <ComingSoon/>
  </b-container>
</template>
<script>
import { core } from "../../../../config/pluginInit"
import ComingSoon from "../../../ExtraPages/ComingSoon/ComingSoon.vue"

export default {
  name: "Casas de Cultura",
  components: {
    ComingSoon

  },
  mounted () {
    core.index()
  }
}
</script>
