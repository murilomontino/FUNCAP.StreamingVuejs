<template>
<b-container class='card-container d-flex flex-column w-100' fluid="sm">

  <div class="iq-header-title">
    <h4 class="card-title-custom">Meu Portifólio</h4>
    <hr />
  </div>
  <b-row class='d-flex justify-content-center'>
    <tab-nav class="custom-card-pills text-center align-items-center d-flex" :pills="true" align="center" role="tablist">
      <tab-nav-items ariaControls="agents-report" :active="true" title="Agentes" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items ariaControls="cultural-groups-report" :active="false" title="Grupos e Espaços Culturais" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items ariaControls="emergency-income-report" :active="false" title="Renda Emergencial" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items ariaControls="opportunities-report" :active="false" title="Oportunidades" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items ariaControls="cultural-subsidies-report" :active="false" title="Subsídios Culturais" dataToggle="pill" role="tab" :ariaSelected="true" />
    </tab-nav>
  </b-row>

  <tab-content class="custom-card-content">

    <tab-content-item id="agents-custom-card" class="overview-tab" :active="true">
        <h1>Agentes</h1>
    </tab-content-item>
    <tab-content-item id="cultural-groups-custom-card" class="overview-tab" :active="false">
        <h1>Grupos e Espaços Culturais</h1>
    </tab-content-item>
    <tab-content-item id="emergency-income-custom-card" class="overview-tab" :active="false">
        <h1>Renda Emergencial</h1>
    </tab-content-item>
    <tab-content-item id="opportunities-custom-card" class="overview-tab" :active="false">
        <h1>Oportunidades</h1>
    </tab-content-item>
    <tab-content-item id="cultural-subsidies-custom-card" class="overview-tab" :active="false">
        <h1>Subsídios Culturais</h1>
    </tab-content-item>
  </tab-content>
</b-container>
</template>

<script>
import {
  core
} from "../../../config/pluginInit"
export default {
  name: "custom-card",
  components: {

  },
  data () {
    return {
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
        responsive: [{
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
  },
  mounted () {
    core.index()
  }
}
</script>
