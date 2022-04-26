<template>
<div>
  <Slider v-bind:sliderData='sliderData' />
  <TopicNetflix v-for='(item, index) in computedSliderData' :key='index' v-bind:sliderData='item' />
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
  name: "Programas-Para-TV",
  components: {
    Slider,
    TopicNetflix

  },
  data () {
    return {
      sliderData: []
    }
  },
  created () {
    this.ActionDatabasePopulation(routesStore.TVPROGRAMS).then(() => {
      this.sliderData = this.$store.getters["TvPrograms/getTvPrograms"]
    })
  },
  mounted () {
    core.index()
  },
  methods: {
    ...mapActions("StoreGeneral", ["ActionDatabasePopulation"])
  },
  computed: {
    computedSliderData () {
      let newSliderData = this.sliderData
      newSliderData = newSliderData.sort((a, b) => a.publishedAtNew < b.publishedAtNew)
      return newSliderData
    }
  }
}
</script>
