<template>
<!--
    Para maior controle do componente as classes CSS vindas to streamit
    foram copiadas e coladas aqui e renomeadas para o devido próposito:
      tranding ==> custom-card
    Com isso podemos alterar a cor e suas outras propriedades, sem a necessidade
    de buscá-las nos arquivos css.

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

    -->
<b-container class='card-container d-flex flex-column w-100' fluid="sm">

  <div class="iq-header-title">
    <h4 class="card-title-custom">Oportunidades</h4>
    <hr/>
  </div>
  <b-row class='d-flex justify-content-center'>
    <tab-nav class="custom-tab-nav custom-card-pills" :pills="true" align="center" role="tablist">
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="allOpportunities-data" :active="true" title="Todas as Oportunidades" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="editals-data" :active="false" title="Editais e Chamadas Publicas " dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="culturalSpace-data" :active="false" title="Subsidios para Espaços Culturais" dataToggle="pill" role="tab" :ariaSelected="true" />
    </tab-nav>
  </b-row>

    <tab-content class="custom-card-content">

      <tab-content-item id="allOpportunities-data" class="overview-tab-custom w-100" :active="true">
        <table-custom :item="opportunitiesChildren.allOpportunities" :customFields='customFields' />
      </tab-content-item>

      <tab-content-item id="editals-data" class="overview-tab-custom w-100" :active="false">
        <table-custom :item="opportunitiesChildren.editais" :customFields='customFields' />
      </tab-content-item>

      <tab-content-item id="culturalSpace-data" class="overview-tab-custom w-100" :active="false">
        <table-custom :item="opportunitiesChildren.culturalSpace" :customFields='customFields' />
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
      customFields: [{
        key: "id",
        label: "N",
        sortable: true
      },
      {
        key: "item",
        label: "Clique no Item Para Melhor Visualizar",
        sortable: true
      },
      {
        key: "inscricoes",
        label: "Incrições",
        sortable: true

      },
      {
        key: "orgao",
        label: "Orgão",
        sortable: true

      },
      {
        key: "area_de_abrangencia",
        label: "Área de Abrangência",
        sortable: true
      }
      ],
      opportunitiesChildren: {
        allOpportunities: {
          name: "Todas as Oportunidades",
          table: [{
            id: 1,
            item: "Credito DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "Rio de Janeiro"
          },
          {
            id: 2,
            item: "Testing DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 3,
            item: "EDITAL DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 4,
            item: "EDITAL DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 5,
            item: "EDITAL DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 6,
            item: "Funcional",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 7,
            item: "EDITAL DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 8,
            item: "EDITAL DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 9,
            item: "EDITAL DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          },
          {
            id: 10,
            item: "EDITAL DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          }

          ]
        },
        editais: {
          name: "Editais Dispoívels",
          table: [{
            id: 1,
            item: "B DE AQUISIÇÃO DE BENS, SERVIÇOS E FOMENTO DE SHOWS ONLINE - CHAMAMENTO PÚBLICO N° 02/2020 INSCRIÇÕES ENCERRADAS",
            inscricoes: "Encerradas",
            orgao: "SECRETARIA MUNICIPAL DE COMUNICAÇÃO E CULTURA",
            area_de_abrangencia: "MUNICÍPIO DE CARMóPOLIS"
          }]
        },
        culturalSpace: {
          name: "Subsídios Disponíveis",
          table: []
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
