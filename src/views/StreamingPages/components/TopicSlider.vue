<template>
<section id="iq-suggestede">
  <div class='custom-slider iq-main-slider' style='padding: 0px 10px !important;'>

    <div class="iq-main-header d-flex align-items-center justify-content-between">
      <h5 class="custom-title-slider">{{ sliderData.title }}</h5>
      <router-link :to="{ path: `/watch/${sliderData.id}&video=${sliderData.videos[0].id}` }" class="iq-view-all">Ver Todos</router-link>
    </div>

    <div class="favorites-contens">
      <Slick class="favorites-slider list-inline  row p-0 mb-0" ref="dSlick" :option="sliderOption">
        <li class="slide-item" v-for="(item,index) in computedSliderData" @mouseover="isHovering = index" @mouseout="isHovering = -1" :key="index">
          <router-link :to="{ path: `/watch/${sliderData.id}&video=${item.id}` }">
            <div :class="isHovering === index? 'hover-slide-item block-images position-relative':'block-images position-relative'">
              <div class="img-box">
                <img :src="item.image" class="img-fluid" alt="">
              </div>

              <div class="custom-play block-description">
                <h6 class="iq-title">
                  {{item.title}}
                </h6>
              </div>
              <div class="block-social-info">
                <ul class="list-inline p-0 m-0 music-play-lists">
                  <li class="share">
                    <span><i class="ri-share-fill"></i></span>
                    <div class="share-box">
                      <div class="d-flex align-items-center">
                        <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-facebook-fill"></i></a>
                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading" target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i class="ri-twitter-fill"></i></a>
                        <a href="#" data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/" class="share-ico iq-copy-link" tabindex="0"><i class="ri-links-fill"></i></a>
                      </div>
                    </div>
                  </li>
                  <li><span><i class="ri-heart-fill"></i></span></li>
                  <li><span><i class="ri-add-line"></i></span></li>
                </ul>
              </div>
            </div>
          </router-link>
        </li>
      </Slick>
    </div>

  </div>
</section>
</template>

<script>
export default {
  name: "TopicSlider",
  components: {},
  props: {
    sliderData: {
      type: Object,
      required: true,
      default: () => {
        return {
          title: "",
          id: "",
          videos: []
        }
      }
    }
  },
  mounted () {},
  data () {
    return {
      limit: 20,
      isHovering: -1,
      sliderOption: {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 4.4,
        slidesToScroll: 1,
        prevArrow: "<div class=\"slick-prev slick-arrow\"><i class=\"fa fa-chevron-left\"></i></div>",
        nextArrow: "<div class=\"slick-next slick-arrow\"><i class=\"fa fa-chevron-right\"></i></div>",
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1
          }
        }
        ]
      }
    }
  },
  methods: {
    next () {
      this.$refs.dSlick.next()
    },
    prev () {
      this.$refs.dSlick.prev()
    }
  },
  computed: {
    computedSliderData () {
      return this.limit ? this.sliderData.videos.slice(0, this.limit) : this.sliderData.videos
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-play {
  display: flex;
}

.custom-play .hover-buttons {
  width: 100px !important;
  position: absolute !important;
  left: 10;
  top: 110px;

}

.custorm-arrow {
  display: flex;
  background-color: white;
}

.custom-title-slider {
  font-variant: small-caps !important;
  font-family: 'Courier New', Courier, monospace;
}

.slide-item {

  .iq-title {
    display: none;
    color: #f2f2f2 !important;
  }
}

.slide-item:hover {
  .iq-title {
    display: flex;
    font-size: 12px;
    width: 200px;
    position: absolute !important;
    left: 10;
    top: 175px;
  }
}

.router-link-active {
  color: #f2f2f2 !important;

  -webkit-text-stroke-width: 10%;
  -webkit-text-stroke-color: #000;
}

</style>
