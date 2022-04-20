<template>
  <div>
    <Slider v-bind:sliderData='sliderData'/>
    <TopicSlider v-for='(item, index) in sliderData' :key='index' v-bind:sliderData='item'/>
  </div>
</template>
<script>

import {
  core
} from "@/config/pluginInit"
import Slider from "../../components/Slider"
import TopicSlider from "../../components/TopicNetflix.vue"

import routesStore from "../../../../staticData/routesStoreAPI"

import {
  mapActions
} from "vuex"

export default {
  name: "Shows",
  components: {
    Slider,
    TopicSlider

  },
  data () {
    return {
      sliderData: []
    }
  },
  mounted () {
    core.index()

    this.ActionDatabasePopulation(routesStore.SHOWS).then(() => {
      this.sliderData = this.$store.getters["Shows/getShows"]
    })
  },
  methods: {
    ...mapActions("StoreGeneral", ["ActionDatabasePopulation"])

  }
}
</script>
