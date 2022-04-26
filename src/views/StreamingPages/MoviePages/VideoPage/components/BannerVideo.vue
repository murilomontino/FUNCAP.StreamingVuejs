<template>
  <youtube id='youtube' ref="youtube" class='video-container' width='720' height='360' :resize='true' :video-id="youtubeId" />
</template>

<script>
export default {
  name: "BannerVideo",
  components: {},
  props: {
    youtubeId: String
  },
  mounted () {
    this.playVideo()
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
  methods: {
    async playVideo () {
      await this.player.playVideo()
      // Do something after the playVideo command
    }
  }
}
</script>
<style>
.video-container{
  display: flex;
  justify-content: center;
  align-self: center ;
  height: 620px ;
  margin-top: 20px;
}
</style>
