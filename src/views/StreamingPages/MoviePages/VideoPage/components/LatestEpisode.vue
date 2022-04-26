<template>
<section id="iq-favorites">
  <b-container fluid>
    <div class="block-space">
      <b-row>
        <b-col sm="12" class="overflow-hidden">
          <div class="iq-main-header d-flex align-items-center justify-content-between">
            <h4 class="main-title">Episódios</h4>
          </div>
        </b-col>
      </b-row>
      <div class="row">
        <b-col v-on:click='onClickedEpisode(item)' md="6" class="col-1-5 iq-mb-30" v-for="(item,index) in computedLatestData" :key="index">
          <div class="epi-box">
            <div  class="epi-img position-relative">
              <img :src="thumbnailImage(item.thumbnails)" class="img-fluid img-zoom" alt="">
              <div class="episode-play-info">
                <div  class="episode-play">
                  <router-link :to="{ path: `/watch/${$route.params.playlist}&video=${item.id}` }">
                    <i class="ri-play-fill"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="epi-desc p-3">
              <router-link :to="{ path: `${$route.params.playlist}&video=${item.id}` }">
                <h6 class="epi-name text-white mb-0">{{item.title}}</h6>
              </router-link>
            </div>
          </div>
        </b-col>
      </div>

        <div v-if='limit <= latestData.length' v-on:click='onClickViewMore' class='w-100 div-hr-view'>
          <hr class='line-hr'/>
          <a  class="view-more iq-view-all">Ver Mais</a>
        </div>

    </div>
  </b-container>

</section>
</template>

<script>
export default {
  name: "LatestEpisode",
  components: {},
  data () {
    return {
      limit: 20
    }
  },
  mounted () {

  },
  props: {
    latestData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    computedLatestData () {
      return this.limit ? this.latestData.slice(0, this.limit) : this.latestData
    }
  },
  methods: {
    async onClickedEpisode (video) {
      this.$emit("changeYoutubeVideo", video)
    },
    onClickViewMore () {
      this.limit += 10
    },
    thumbnailImage (thumbnail) {
      if (thumbnail.maxres) return thumbnail.maxres.url
      else if (thumbnail.standard) return thumbnail.standard.url
      else if (thumbnail.high) return thumbnail.high.url
      else if (thumbnail.medium) return thumbnail.medium.url
      else if (thumbnail.default) return thumbnail.default.url
      else return "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"
    }
  }
}
</script>
<style lang="scss" scoped>
hr.line-hr{
  width: 100% !important;
  border-top: 1px solid #f2f2f2 !important;
}
.div-hr-view{
  width: 100% !important;
  display: flexbox;
  position: relative;
  justify-content:flex-end;
  cursor: pointer;
}

.div-hr-view:hover{
  color: var(--iq-primary);
  .line-hr{
  border-top: 1px solid var(--iq-primary) !important;
  }

}
.view-more{
  position: absolute;
  right: 5px;
  top: 0px;
}
</style>
