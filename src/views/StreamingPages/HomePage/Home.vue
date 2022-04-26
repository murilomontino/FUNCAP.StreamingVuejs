<template>
  <!-- Página Principal do path '/', aqui deverá estar os componentes da pasta components -->
  <div>
    <SlideHome v-bind:sliderData='SlidersHome'/>
    <Topic
      v-for="(slide, index) in Sliders"
      v-bind:sliderData='slide.items'
      :title='slide.title'
      :path='slide.path'
      v-bind:key='index'
    />
  </div>
</template>
<script>
import { core } from "@/config/pluginInit"
import {
  mapActions
} from "vuex"

import routesStore, { getters } from "../../../staticData/routesStoreAPI"

import SlideHome from "./components/SlideHome/SlideHome"
import Topic from "./components/Topic/Topic"

export default {
  name: "HomePage",
  components: {
    SlideHome,
    Topic
  },
  data () {
    return {
      Sliders: [
        {
          name: routesStore.MOVIES,
          items: [],
          path: "movies",
          title: "Filmes"
        },
        {
          name: routesStore.SHOWS,
          items: [],
          path: "shows",
          title: "Shows"
        },
        {
          name: routesStore.TVPROGRAMS,
          items: [],
          path: "tv-programs",
          title: "Programas de TV"
        },
        {
          name: routesStore.WORKSHOPS,
          items: [],
          path: "workshops",
          title: "Oficinas"
        }

      ],
      SlidersHome: []
    }
  },
  mounted () {
    core.index()
  },
  created () {
    this.Sliders.map((item) => {
      this.ActionDatabasePopulation(item.name).then(async () => {
        item.items = await this.$store.getters[getters[item.name]]
      })
    })

    this.ActionHomeSlide(routesStore.HOMESLIDE).then(async () => {
      this.SlidersHome = await this.$store.getters[getters[routesStore.HOMESLIDE]]
    })
  },
  methods: {
    ...mapActions("TopSlide", ["ActionGetTopSlide"]),
    ...mapActions("StoreGeneral", ["ActionDatabasePopulation", "ActionHomeSlide"])

  }

}
</script>
