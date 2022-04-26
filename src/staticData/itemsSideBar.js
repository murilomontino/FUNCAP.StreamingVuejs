
/*

  {
    title: 'Nome',
    name: 'sidebar.nome', #NOME DA ROTA
    is_heading: false, #True ele não é menu mas um título
    is_active: false,
    link: {
      name: 'dashboard.home-1' #Nome da rota que ira abrir !important
    },
    class_name: '',
    is_icon_class: true, # SE O ICONE ESTARÁ VISÍVEL
    icon: 'las la-home iq-arrow-left' # Nome do ICONE

    os icones disponiveis seguem essa nomeclatura:

    // las name-icon
    // ion-name-icon #icones Ionicons
    // dripicons-name-icon #icones dripicons
    // ri-icon-type
    // la-name-icon #icones la-brands-400

  },

*/
module.exports = [
  {
    name: "Menu",
    type: 1,
    is_heading: true,
    is_icon_class: false
  },
  {
    title: "Inicio",
    name: "sidebar.dashboard",
    is_heading: false,
    is_active: false,
    type: 1,
    link: {
      name: "dashboard.home-1"
    },
    class_name: "",
    is_icon_class: true,
    icon: "las la-home iq-arrow-left"
  },
  {
    title: "Busca",
    name: "sidebar.pageSearch",
    is_heading: false,
    is_active: false,
    type: 1,
    link: {
      name: "dashboard.pageSearch"
    },
    is_icon_class: true,
    icon: "ion-android-search"
  },
  {
    title: "Oportunidades",
    name: "sidebar.opportunities",
    is_heading: false,
    is_active: false,
    type: 1,
    link: {
      name: "dashboard.opportunities"
    },
    is_icon_class: true,
    icon: "las la-list iq-arrow-left"
  },
  {
    title: "Minhas Inscrições",
    name: "sidebar.mySubscriptions",
    is_heading: false,
    is_active: false,
    type: 1,
    link: {
      name: "dashboard.mySubscriptions"
    },
    is_icon_class: true,
    icon: "dripicons-pencil"
  },
  {
    title: "Meu Portifólio",
    name: "sidebar.myPortfolio",
    is_heading: false,
    is_active: false,
    type: 1,
    link: {
      name: "dashboard.myPortfolio"
    },
    is_icon_class: true,
    icon: "ion-android-folder-open"
  },
  {
    title: "Minha Documentação",
    name: "sidebar.myDocumentation",
    is_heading: false,
    is_active: false,
    type: 1,
    link: {
      name: "dashboard.myDocumentation"
    },
    is_icon_class: true,
    icon: "ion-ios-folder"
  },
  {
    title: "Grupos/Espaços Culturais",
    name: "sidebar.groupOrCulturalSpace",
    is_heading: false,
    is_active: false,
    type: 1,
    link: {
      name: "dashboard.groupOrCulturalSpace"
    },
    is_icon_class: true,
    icon: "las la-university iq-arrow-left"
  },
  // ADMIN PAGES
  {
    name: "Admin",
    is_heading: true,
    type: 2,
    is_icon_class: false
  },
  {
    title: "Relatórios",
    name: "sidebar.report",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.report"
    },
    is_icon_class: true,
    icon: "ri-file-chart-line"
  },
  {
    title: "Inciso 1 - Agentes Culturais",
    name: "sidebar.itemCulturalAgents",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.itemCulturalAgents"
    },
    is_icon_class: true,
    icon: "ion-android-person"
  },
  {
    title: "Inciso 2 - Entidades Culturais",
    name: "sidebar.itemCulturalEntities",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.itemCulturalEntities"
    },
    is_icon_class: true,
    icon: "ri-community-fill"
  },
  {
    title: "Inciso 3 - Oportunidades",
    name: "sidebar.itemOportunities",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.itemOportunities"
    },
    is_icon_class: true,
    icon: "dripicons-document"
  },
  {
    title: "Financeiro",
    name: "sidebar.financial",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.financial"
    },
    is_icon_class: true,
    icon: "ri-money-dollar-circle-fill"
  },
  {
    title: "Inserir Documento",
    name: "sidebar.insertDocument",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.insertDocument"
    },
    is_icon_class: true,
    icon: ""
  },
  {
    title: "Área do Admin",
    name: "sidebar.areaAdmin",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.areaAdmin"
    },
    is_icon_class: true,
    icon: "ri-admin-fill"
  },
  {
    title: "Editais - Comissão",
    name: "sidebar.noticesCommission",
    is_heading: false,
    is_active: false,
    type: 2,
    link: {
      name: "admin.noticesCommission"
    },
    is_icon_class: true,
    icon: "ri-newspaper-line"
  }
]
