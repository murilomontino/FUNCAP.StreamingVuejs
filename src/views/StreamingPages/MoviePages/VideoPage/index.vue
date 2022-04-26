<template>
<div style="margin-top: 40px">
  <BannerVideo v-bind:youtubeId='youtubeId'/>
  <Detail v-bind:data='descriptionEpisode'/>
  <LatestEpisode @changeYoutubeVideo="getDescriptionVideo($event)" v-bind:latestData='dataEpisodes'/>
</div>
</template>
<script>
import { core } from "@/config/pluginInit"
import LatestEpisode from "./components/LatestEpisode"
import Detail from "./components/Detail"
import BannerVideo from "./components/BannerVideo"
import $ from "jquery"

import {
  mapActions
} from "vuex"
export default {
  name: "ShowDetail",
  components: {
    Detail,
    LatestEpisode,
    BannerVideo
  },
  data () {
    return {
      youtubeId: this.$route.params.id,
      dataEpisodes: [],
      descriptionEpisode: {
        title_playlist: "",
        title_video: "",
        description: ""
      }
    }
  },
  created () {

  },
  mounted () {
    core.index()

    this.ActionPlaylistNow(this.$route.params.playlist).then(() => {
      // Todos os Videos da Playlist
      this.dataEpisodes = this.$store.getters["Playlist/getVideos"]
      // pega informações do video atual
      const video = this.dataEpisodes?.filter(video => video.id === this.$route.params.id)[0]

      this.getDescriptionVideo(video)
    })
  },
  methods: {
    ...mapActions("Playlist", ["ActionPlaylistNow"]),
    getDescriptionVideo (video) {
      this.youtubeId = video.id
      // mapeia os dados em um objeto de fácil uso
      this.descriptionEpisode = {
        title_video: video.title,
        description: video.description,
        title_playlist: this.$store.state.Playlist.playlist.title
      }
      $("html, body").animate({ scrollTop: 80 }, "slow") // slow, medium, fast
    }
  }
}
</script>
