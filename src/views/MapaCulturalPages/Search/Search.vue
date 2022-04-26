<template>
<!--
    Abaixo está o escorpo padronizado:

    <b-container class='card-container iq-card-block' fluid>
      <b-row class="row">
        <b-col sm="12">

        </b-col>
      </b-row>
    </b-container>

    Abaixo encontra-se o escorpo de navegação

    <tab-nav
      class="custom-card-pills text-center align-items-center d-flex"
      :pills="true" align="center" role="tablist"
    >
        <tab-nav-items
        ariaControls="agents-data" // QUAL ABA ELA IRÁ CARREGAR AO CLICAR
        :active="true" // ABA ATIVA
        title="TITULO"
        dataToggle="pill"
        role="tab"
        :ariaSelected="true"
        />
    <tab-nav>

    <tab-content class="custom-card-content">
      <tab-content-item
        id="agents-data"
        class="overview-tab"
        :active="true">
          <div class="custom-card-info align-items-center w-100 animated fadeInUp">
            <== CONTEUDO ==>
          </div>
      </tab-content-item>
    </tab-content>

    ### DATA
    customFields -> Define o que irá aparecer na tabela
    -->

<b-container class='card-container d-flex justify-content-center flex-column w-100' fluid="sm">

  <div class="iq-header-title">
    <h4 class="card-title-custom">Busca</h4>
    <hr/>
  </div>

    <tab-nav class="text-center align-items-center d-flex" :pills="true" align="center" role="tablist">
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="agents-data" :active="true" title="Agentes" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="cultural-groups-data" :active="false" title="Grupos ou Espaços" dataToggle="pill" role="tab" :ariaSelected="true" />
    </tab-nav>
    <tab-content class="custom-card-content">

      <tab-content-item id="agents-data" class="overview-tab-custom w-100" :active="true">
          <table-custom class='d-flex flex-column' :item="searchChildren.agents" :customFields='customFields' />
      </tab-content-item>

      <tab-content-item id="cultural-groups-data" class="overview-tab-custom w-100" :active="false">
          <table-custom class='d-flex flex-column'  :item="searchChildren.culturalGroups" :customFields='customFields' />
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
  components: {},
  data () {
    return {
      customFields: [{
        key: "nome",
        sortable: true
      },
      {
        key: "segmento",
        sortable: true

      },
      {
        key: "atuação",
        sortable: true

      },
      {
        key: "cidade",
        sortable: true
      }
      ],
      searchChildren: {
        culturalGroups: {
          name: "Grupos e Espaços Culturais",
          table: [{
            nome: "ABASSA MARIA DA PAZ",
            atuacao: "Outros",
            segmento: "Cultura Negra",
            cidade: "Nossa Senhora do Socorro"
          },
          {
            nome: "ABASSA MARIA DA PAZ",
            atuacao: "Outros",
            segmento: "Cultura Negra",
            cidade: "Nossa Senhora do Socorro"
          }
          ]
        },
        agents: {
          name: "Agentes",
          table: [{
            nome: "BBASSA MARIA DA PAZ",
            atuacao: "Outros",
            segmento: "Cultura Negra",
            cidade: "Nossa Senhora do Socorro"
          },
          {
            nome: "ABASSA MARIA DA PAZ",
            atuacao: "Outros",
            segmento: "Cultura Negra",
            cidade: "Nossa Senhora do Socorro"
          }
          ]
        }
      },
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
<style >

</style>
