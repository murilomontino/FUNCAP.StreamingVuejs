<template>
<b-container class='card-container d-flex flex-column w-100' fluid="sm">

  <div class="iq-header-title">
    <h4 class="card-title-custom">Meu Portifólio</h4>
    <hr/>
  </div>
  <b-row class='d-flex justify-content-center'>
    <tab-nav class="custom-tab-nav custom-card-pills" :pills="true" align="center" role="tablist">
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="portfolio-insert-data" :active="true" title="Inserir" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="portfolio-all-data" :active="false" title="Ver Tudo" dataToggle="pill" role="tab" :ariaSelected="true" />
      <tab-nav-items-light class='custom-tab-nav-items-custom-card' ariaControls="portfolio-remove-data" :active="false" title="Remover" dataToggle="pill" role="tab" :ariaSelected="true" />
    </tab-nav>
  </b-row>

    <tab-content class="custom-card-content">

      <tab-content-item id="portfolio-insert-data" class="overview-tab-custom w-100" :active="true">
      </tab-content-item>

      <tab-content-item id="portfolio-all-data" class="overview-tab-custom w-100" :active="false">
      </tab-content-item>

      <tab-content-item id="portfolio-remove-data" class="overview-tab-custom w-100" :active="false">
      </tab-content-item>
    </tab-content>

</b-container>
</template>

<script>
import {
  core
} from "../../../config/pluginInit"
export default {
  name: "MyPortfolio",
  components: {

  },
  mounted () {
    core.index()
  },
  data () {
    return {

    }
  }
}
</script>
