<template>
<section class="iq-main-slider p-0">
  <Slick id="tvshows-slider" :option="sliderOption">
    <div v-for="(item,index) in computedSliderData" :key="index">
        <div class="shows-img">
          <img :src="thumbnailImage(item.thumbnails)" class="w-100 contain-to-size" alt="">
          <div class="shows-content">
            <h1 class="text-white mb-1">{{item.title}}</h1>
            <h5 class="text-white mb-1">{{computedData(item.publishedAt)}}</h5>
            <router-link
            :to="{ path: `/watch/${item.id}&video=${item.videos[0].id}` }"
            class="btn btn-hover"><i class="fa fa-play mr-2"
                        aria-hidden="true"></i>Assistir</router-link>
          </div>
        </div>
    </div>
  </Slick>
</section>
</template>

<script>
export default {
  name: "Slider",
  props: {
    sliderData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {},
  computed: {
    computedSliderData () {
      const newSlider = this.sliderData.filter(item => item.thumbnails)
      return this.limit ? newSlider.slice(0, this.limit) : newSlider
    }
  },
  data () {
    return {
      limit: 10,
      sliderOption: {
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        nextArrow: "<button class=\"NextArrow\"><i class=\"ri-arrow-right-s-line\"></i></button>",
        prevArrow: "<button class=\"PreArrow\"><i class=\"ri-arrow-left-s-line\"></i></button>",
        arrows: true,
        dots: false,
        responsive: [{
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 1
          }
        }
        ]
      }

    }
  },
  methods: {
    computedData (publishedAt) {
      return publishedAt.split("T")[0]
    },
    // method pra pegar a imagem com melhor resolução da thumbnail
    thumbnailImage (thumbnail) {
      // MASRES causa um bug que deve ser corrigido quando for usar

      if (thumbnail?.default.url === "https://i.ytimg.com/img/no_thumbnail.jpg") {
        return "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"
      }

      if (thumbnail?.maxres) {
        return thumbnail.maxres.url
      } else if (thumbnail?.standard) {
        return thumbnail.standard.url
      } else if (thumbnail?.high) {
        return thumbnail.high.url
      } else if (thumbnail?.medium) {
        return thumbnail.medium.url
      } else if (thumbnail?.default) {
        return thumbnail.default.url
      } else {
        return "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.contain-to-size{
  width: 100%;
  height: 480px !important;
  max-height: 1024px !important;

  @media (pointer: coarse){
    height: 180px !important;
  }
}
</style>
