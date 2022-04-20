<template>
<div>

  <Slider v-bind:sliderData='sliderData' />
  <TopicSlider v-for='(item, index) in sliderData' :key='index' v-bind:sliderData='item' />

</div>
</template>

<script>
import {
  core
} from "@/config/pluginInit"
import Slider from "../../components/Slider"
import TopicSlider from "../../components/TopicNetflix.vue"

import routesStore, { getters } from "../../../../staticData/routesStoreAPI"

import {
  mapActions
} from "vuex"

export default {
  name: "Filmes",
  components: {
    Slider,
    TopicSlider

  },
  data () {
    return {
      sliderData: []
    }
  },
  created () {

  },
  mounted () {
    core.index()
    this.ActionDatabasePopulation(routesStore.MOVIES).then(() => {
      this.sliderData = this.$store.getters[getters.Movies]
    })
  },
  methods: {
    ...mapActions("StoreGeneral", ["ActionDatabasePopulation"])

  }
}
</script>
