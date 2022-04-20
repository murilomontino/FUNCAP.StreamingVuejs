<template>
<!--

  O envio de props deverá ocorrer respeitando esse objeto:

  {
    table:[
      # items que serão tabelados
    ],

    "Propriedades Adversas"
  }

  <b-table

    Propriedades de Visual da tabela

      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"

      ## PROPRIEDADES DE LÓGICA DA ORGANIZAÇÃO DA TABELA
      :filter="filter"
      :fields="customFields"
      :current-page="currentPage"
      :filter-included-fields="filterOn"
      :per-page="perPage"
      :items="item.table"
      show-empty
      @filtered="onFiltered"
    ></b-table>

    tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],

-->

<b-container class='w-100' fluid="sm">

    <h5 class='card-title-custom' style='color: #0f0f0f'>{{item.name}}</h5>

  <b-row fluid class='w-100'>
    <b-col class="iq-search-bar" style='margin: 10px'>

      <b-col sm="5" md="6" class="my-0">
        <b-form-group label="Mostrar" label-for="per-page-select" label-cols-sm="6" label-cols-md="4" label-cols-lg="3" label-align-sm="left" label-size="sm" class="mb-0">
          <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" size="sm"></b-form-select>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-2">
        <b-form-group label="Procurar" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0">
          <b-input-group size="sm">
            <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Pesquise um termo"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>

    </b-col>
  </b-row>

    <b-table
      class='table-custom d-flex'
      fluid="sm"
      responsive
      :filter="filter"
      :fields="customFields"
      :current-page="currentPage"
      :filter-included-fields="filterOn"
      :per-page="perPage"
      :items="item.table"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
      table-class="table-custom">
    </b-table>

    <b-row sm="7" md="6" class="my-1 pagination-custom">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="sm"
        class="my-0 w-100">
      </b-pagination>
    </b-row>

</b-container>
</template>

<script>
export default {
  name: "Table",
  data () {
    return {
      totalRows: 1, // Inicialização de valor e da variavel
      currentPage: 1, // Inicialização de valor e da variavel
      perPage: 10, // Valor de quantidade por página default
      pageOptions: [10, 25, 50, 100], // Valor de opções de quantidade de items por página
      filter: null, // Inicialização de valor e da variavel
      filterOn: [] // Inicialização de valor e da variavel
    }
  },
  mounted () {
    // Set the initial number of items
    this.totalRows = this.item.table.length
  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    customFields: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>
.table-custom {
  overflow: auto;
  justify-content: center;
  align-items: center;

}

.table-custom .table tr {
  color: #666666 !important;
  align-self: center;
}

.table-custom .table th[scope="col"] {
  text-align: center;
  font-size: 16px;
  vertical-align: middle;
  min-width: 20%;
}

.table-custom .table td,
tr {
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
}

.table-custom .table-striped {
  background-color: #e3ebf3 !important;
}

.search-custom-icon {
  position: absolute;
  right: 370px;
  padding: 5px;
}

</style>
