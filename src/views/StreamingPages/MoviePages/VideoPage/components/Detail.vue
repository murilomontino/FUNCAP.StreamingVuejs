<template>
    <section  class="fadeIn movie-detail container-fluid">
        <b-row>
            <b-col v-model='data' lg="12">
                <div class="trending-info season-info g-border">
                    <h4 class="trending-text big-title text-uppercase mt-0">{{ data.title_playlist }}</h4>
                    <div class="d-flex align-items-center text-white text-detail episode-name mb-0">

                        <span>{{ data.title_video }}</span>
                    </div>
                    <p class="trending-dec w-100 mb-0">{{ data.description }}</p>
                  <!--   <ul class="list-inline p-0 mt-4 share-icons music-play-lists">
                        <li><span><i class="ri-add-line"></i></span></li>
                        <li><span><i class="ri-heart-fill"></i></span></li>
                        <li class="share">
                        <span><i class="ri-share-fill"></i></span>
                        <div class="share-box">
                            <div class="d-flex align-items-center">
                                <a href="#" class="share-ico"><i class="ri-facebook-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-twitter-fill"></i></a>
                                <a href="#" class="share-ico"><i class="ri-links-fill"></i></a>
                            </div>
                        </div>
                        </li>
                    </ul> -->
                </div>
            </b-col>
        </b-row>
    </section>
</template>
<script>
export default {
  name: "Detail",
  components: {
  },
  mounted () {

  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {
          description: "",
          title_video: "",
          title_playlist: ""
        }
      }
    }
  }
}
</script>
<style>
.fadeIn {
-webkit-animation: fadeIn 3s ease-in-out !important;
-moz-animation: fadeIn 3s ease-in-out !important;
-o-animation: fadeIn 3s ease-in-out !important;
animation: fadeIn 3s ease-in-out !important;
}
</style>
