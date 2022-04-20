<template>
  <div>
    <Slider v-bind:sliderData='sliderData'/>
    <Topic v-for='(item, index) in sliderData' :key='index' v-bind:sliderData='item'/>
  </div>
</template>
<script>

import {
  core
} from "@/config/pluginInit"
import Slider from "../../components/Slider"
import Topic from "../../components/TopicNetflix.vue"

import routesStore, { getters } from "../../../../staticData/routesStoreAPI"

import {
  mapActions
} from "vuex"

export default {
  name: "Exposições",
  components: {
    Slider,
    Topic

  },
  data () {
    return {
      sliderData: []
    }
  },
  created () {
    this.ActionDatabasePopulation(routesStore.WORKSHOPS).then(() => {
      this.sliderData = this.$store.getters[getters.Workshops]
    })
  },
  mounted () {
    core.index()
  },
  methods: {
    ...mapActions("StoreGeneral", ["ActionDatabasePopulation"])

  }
}
</script>
