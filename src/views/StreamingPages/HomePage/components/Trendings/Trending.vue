<template>
  <section id="iq-trending" class="s-margin">
    <b-container fluid>
        <b-row>
          <b-col sm="12" class=" overflow-hidden">
              <div class="iq-main-header d-flex align-items-center justify-content-between">
                <h4 class="main-title">Em Alta</h4>
                <router-link :to="{ name: 'landing-page.show-category' }" class="text-primary">View all</router-link>
              </div>
              <div class="trending-contens">
                <Slick id="trending-slider-nav" class="list-inline p-0 mb-0 row align-items-center"  :option="trendingOption1">
                    <li v-for="(item,index) in items" :key="index">
                      <a href="javascript:void(0);">
                          <div class="movie-slick position-relative">
                            <img :src="`${require('@/assets/images/frontend/trending/'+item.backgroudImage)}`" class="img-fluid" alt="">
                          </div>
                      </a>
                    </li>
                </Slick>
                <Slick id="trending-slider" class="list-inline p-0 m-0  d-flex align-items-center" :option="trendingOption">
                  <li v-for="(item,index) in items" :key="index">
                    <div class="tranding-block position-relative"  :style="{backgroundImage:`url(${require('@/assets/images/frontend/trending/'+item.backgroudImage)})`}">
                      <div  class="trending-custom-tab">
                        <div class="tab-title-info position-relative">
                            <div class="tab-title-info position-relative">
                              <tab-nav class="trending-pills tranding-tab-nav text-center align-items-center d-flex" :pills="true" align="center" role="tablist">
                                <tab-nav-items ariaControls="trending-data1" :active="true" title="Sobre" dataToggle="pill" role="tab" :ariaSelected="true"/>
                              </tab-nav>
                            </div>
                            <tab-content class="trending-content">
                              <tab-content-item id="trending-data1" class="overview-tab" :active="true">
                                <div class="trending-info align-items-center w-100 animated fadeInUp">
                                    <a href="javascript:void(0);" tabindex="0">
                                      <div class="res-logo">
                                          <div class="channel-logo">
                                            <img src="@/assets/images/logo-full.png" class="c-logo" alt="streamit">
                                          </div>
                                      </div>
                                    </a>
                                    <h1 class="trending-text big-title text-uppercase">{{item.title}}</h1>
                                    <div class="d-flex align-items-center text-white text-detail">
                                      <span class="badge badge-secondary p-3">{{item.age}}</span>
                                      <span class="ml-3">{{item.time}}</span>
                                      <span class="trending-year">{{item.year}}</span>
                                    </div>
                                    <p class="trending-dec">
                                    </p>
                                    <p class="trending-dec">
                                    </p>
                                    <div class="p-btns">
                                      <div class="d-flex align-items-center p-0">
                                          <router-link :to="{ name: 'landing-page.category-detail' }" class="btn btn-hover mr-2" tabindex="0"><i
                                            class="fa fa-play mr-2" aria-hidden="true"></i>Assistir</router-link>
                                          <a href="javascript:void(0);" class="btn btn-link" tabindex="0"><i class="ri-add-line"></i>Minha Lista</a>
                                      </div>
                                    </div>
                                    <div class="trending-list mt-4">
                                      <div class="text-primary title">Atores: <span class="text-body">{{item.starring}}</span>
                                      </div>
                                      <div class="text-primary title">Gêneros: <span class="text-body">{{item.genres}}</span>
                                      </div>
                                      <div class="text-primary title">Isto é: <span class="text-body">{{items.tags}}</span>
                                      </div>
                                    </div>
                                </div>
                              </tab-content-item>

                            </tab-content>
                         </div>
                      </div>
                    </div>
                  </li>
                </Slick>
              </div>
          </b-col>
        </b-row>
    </b-container>
  </section>
</template>
<script>
import MovieOverview from "./MovieOverview"

export default {
  name: "Details",
  components: {

  },
  mounted () {
    var tabEl = document.getElementsByClassName("tranding-tab-nav")
    Array.from(tabEl).map((elem) => {
      elem.addEventListener("shown.bs.tab", function (e) {
        e.target.classList.add("show")
        e.relatedTarget.classList.remove("show")
      })
    })
  },
  data () {
    return {
      items: MovieOverview.items,
      selected: 3,
      trendingOption1: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: "#trending-slider",
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      trendingOption: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: "#trending-slider-nav"
      }
    }
  }
}
</script>
