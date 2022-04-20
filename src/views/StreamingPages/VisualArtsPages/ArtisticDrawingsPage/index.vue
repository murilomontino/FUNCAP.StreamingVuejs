<template>
  <div>
    <Slider v-bind:sliderData='sliderData'/>
    <TopicNetflix v-for='(item, index) in sliderData' :key='index' v-bind:sliderData='item'/>
  </div>
</template>
<script>

import {
  core
} from "@/config/pluginInit"
import Slider from "../../components/Slider"
import TopicNetflix from "../../components/TopicNetflix.vue"

import routesStore from "../../../../staticData/routesStoreAPI"

import {
  mapActions
} from "vuex"

export default {
  name: "Desenhos Artísticos",
  components: {
    Slider,
    TopicNetflix

  },
  data () {
    return {
      sliderData: []
    }
  },
  mounted () {
    core.index()

    this.ActionDatabasePopulation(routesStore.ARTISTICDRAWINGS).then(() => {
      this.sliderData = this.$store.getters["ArtisticDrawings/getArtisticDrawings"]
    })
  },
  methods: {
    ...mapActions("StoreGeneral", ["ActionDatabasePopulation"])

  }
}
</script>
