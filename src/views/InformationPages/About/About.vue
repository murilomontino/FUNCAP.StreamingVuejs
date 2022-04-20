<template>
<main id="main" class="site-main">
  <Breadcrumb />
  <Team />
</main>
</template>

<script>
import {
  core
} from "../../../config/pluginInit"
import Team from "./Team.vue"
import Breadcrumb from "@/components/general/Breadcrumb/Breadcrumb"

export default {
  name: "Sobre",
  components: {
    Team,
    Breadcrumb
  },
  mounted () {
    core.index()
  }
}
</script>
