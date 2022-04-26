<template>
<section class="iq-main-slider p-0 margin-vertical-0-px">
  <div class="iq-main-header d-flex align-items-center justify-content-between margin-vertical-12 div-title-responsive-screen">
    <h5 class="custom-title-slider title-responsive-screen custom-title-slider">{{ sliderData.title }}</h5>
    <router-link :to="{ path: `/watch/${sliderData.id}&video=${sliderData.videos[0].id}` }" class="iq-view-all verTodos-screen">Ver Todos</router-link>
  </div>

  <Slick id="topicNetflix-slider" :option="sliderOption">
    <div v-for="(item,index) in computedSliderData"
    :class="classDinamic(index, computedSliderData.length)" :key="index">
    <div>
      <router-link :to="{ path: `/watch/${sliderData.id}&video=${item.id}` }">
      <div @mouseover="mouseOver(index)" @mouseout="isHovering = -1" :class="isHovering === index? 'hover-slide-item shows-img opacity-1-5':'opacity-0-8'">
        <div class="img-box">
          <img :src="thumbnailImage(item.thumbnails)" class="contain-to-size" alt="">
        </div>
        <div :class="isHovering === index? 'shows-content': 'none'">
          <h4 class="text-white mb-1">{{item.title}}</h4>
          <!-- <h5 class="text-white mb-1">{{item.publishedAt}}</h5> -->
        </div>
      </div>
      </router-link>
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
  mounted () {},
  computed: {
    computedSliderData () {
      const newSliderData = this.sliderData.videos
      return this.limit ? newSliderData.slice(0, this.limit) : newSliderData.videos
    }
  },
  data () {
    return {
      isHovering: -1,
      limit: 20,
      sliderOption: {
        centerMode: false,
        centerPadding: 100,
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        nextArrow: "<button class=\"NextArrow\"><i class=\"ri-arrow-right-s-line\"></i></button>",
        prevArrow: "<button class=\"PreArrow\"><i class=\"ri-arrow-left-s-line\"></i></button>",
        arrows: true,
        dots: false,
        responsive: [{
          breakpoint: 991,
          settings: {
            arrows: true,
            slidesToShow: 3.2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
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
    mouseOver (index) {
      this.isHovering = index
    },
    classDinamic (id, tam) {
      const left = id === (tam - 1) && id >= 4 ? "left-120-px" : ""
      return this.isHovering === id ? `div-z-index-max custom-div-48-px ${left}` : "custom-div-48-px div-z-index-min"
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

.div-z-index-max {
  position: relative;
  z-index: 9999 !important;
}

.div-z-index-min {
    z-index: 0 !important;
}

.left-120-px{
  left: -60px !important;
}

.hover-slide-item {
  background-color: #3d3c3c;
  cursor: pointer;
  z-index: 9999 !important;
  //width: 125% !important;

}

.opacity-1-5{
    filter: brightness(125%);
}

.opacity-0-8 {
  opacity: 0.8 !important;
}

.contain-to-size{
  width: 100%;
  min-height: 180px !important;
  height: 200px;
  object-fit: fill !important;
}

.none {
  display: none
}

.margin-vertical-12{
  margin-top: 40px;
  @media (pointer: coarse){
    margin-top: 0px;
  }
}

.verTodos-screen{
  @media (pointer: coarse){
    display:none;
  }
}

.title-responsive-screen{
  @media (pointer: coarse){
    font-size: 16px;
    padding: 4px;
    font-variant: small-caps;

  }
}

.div-title-responsive-screen{
  @media (pointer: coarse){
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
}

.custom-title-slider{
  padding-inline: 12px !important;
  font-size: 20px !important;
}

.custom-div-48-px{
  margin-left: 12vh !important;
  @media (pointer: coarse){
    margin-left: 0vh !important;
  }
  width: 100% !important;
}
.margin-vertical-0-px{
  margin-top: 0px !important;
  @media (pointer: coarse){
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
}

</style>
