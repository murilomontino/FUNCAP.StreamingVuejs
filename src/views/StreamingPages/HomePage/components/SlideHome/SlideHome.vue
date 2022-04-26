<template>
<section id="home" class="iq-main-slider p-0 margin-bottom-16">
  <Slick @init="navAnimateButton" @reInit="navAnimateButton" id="home-slider" class="slider m-0 p-0" :option="homeSliderOption">
    <div class="slide slick-bg s-bg-1 custom-slider-img" v-for="(video,index) in sliderData" :key="index" :style="'background-image: url('+thumbnailImage(video.snippet.thumbnails)+'); background-repeat: no-repeat;'">
      <b-container fluid class="position-relative h-100">
        <div class="slider-inner h-100">
          <b-row class="align-items-center  h-100">
            <b-col xl="6" lg="12" md="12">

              <h1 class="slider-text big-title title text-uppercase w-100" data-animation-in="fadeInLeft" data-delay-in="0.6">{{video.snippet.title}}</h1>
              <p data-animation-in="fadeInUp" data-delay-in="1">{{video.snippet.description}}</p>

            </b-col>
            <div class="trailor-video">
              <router-link :to="{ path: `/watch/${video.snippet.playlistId}&video=${video.snippet.resourceId.videoId}` }">
              <a class="video-open playbtn">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                  <polygon class='triangle' fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                  <circle class='circle' fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3" />
                </svg>
                <span class="w-trailor">Assistir</span>
              </a>
              </router-link>
            </div>
          </b-row>
        </div>
      </b-container>
    </div>
  </Slick>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle" fill="none" stroke="currentColor">
      <circle r="20" cy="22" cx="22" id="test"></circle>
    </symbol>
  </svg>
</section>
</template>

<script>
export default {
  name: "SlideHome",
  components: {},
  props: {
    sliderData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      homeSliderOption: {
        autoplay: false,
        speed: 800,
        lazyLoad: "progressive",
        arrows: true,
        dots: false,
        prevArrow: "<div class=\"slick-nav prev-arrow\"><i></i><svg><use xlink:href=\"#circle\"></svg></div>",
        nextArrow: "<div class=\"slick-nav next-arrow\"><i></i><svg><use xlink:href=\"#circle\"></svg></div>",
        responsive: [{
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }]
      }
    }
  },
  methods: {
    navAnimateButton (event, slider) {
      const nav = document.getElementsByClassName("slick-nav")
      Array.from(nav, (elem) => {
        elem.addEventListener("click", (e) => {
          elem.classList.add("animate")
          setTimeout(() => {
            elem.classList.remove("animate")
          }, 1600)
        })
      })
    },
    thumbnailImage (thumbnail) {
      // MASRES causa um bug que deve ser corrigido quando for usar
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
h1.custom-title {
  font-size: 4.5vh !important;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.margin-bottom-16 {
  margin-bottom: -180px
}

.custom-slider-img {
  padding: 0px 0 50px;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 100vh;
  position: relative;
  z-index: 1;
}
</style>
