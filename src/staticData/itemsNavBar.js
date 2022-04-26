/*
  Template de adição de Menus

  headerItem: [
    {
      title: string,
      link: string,
      child: boolean
      children: [  #Caso child seja True
        {
          title: string,
          link: string,
          grandchild: boolean
          children:[
            ...
          ]
        }
      ]
    }
  ]

*/

module.exports = {
  headerItem: [
    {
      title: "Filmes",
      link: "/streaming/movies",
      child: false

    },
    {
      title: "Shows",
      link: "/streaming/shows",
      child: false,
    },
    {
      title: "Programas de TV",
      link: "/streaming/tv-programs",
      child: false,
    },
    {
      title: "Literatura",
      link: "https://funcap.mapacultural.se.gov.br/literatura",
      child: false
    },
    {
      title: "Músicas",
      link: "https://funcap.mapacultural.se.gov.br/musicas",
      child: false
    },
    {
      title: "Artes Visuais",
      link: "/streaming/workshops",
      child: false,
    },
    {
      title: "Agenda Cultural",
      link: null,
      child: true,
      children: [
        {
          title: "Unidades Culturais",
          link: "",
          content: true,
          grandchild: true,
          children: [
            {
              title: "Agentes de Cultura",
              link: "/streaming/artist",
              content: false,
              grandchild: false
            },
            {
              title: "Museus",
              link: "/streaming/museums",
              content: false,
              grandchild: false
            },
            {
              title: "Teatros",
              link: "/streaming/theaters",
              content: false,
              grandchild: false
            },
            {
              title: "Casas de Cultura",
              content: false,
              link: "/streaming/culture-house",
              grandchild: false
            },
            {
              title: "Espaços Culturais",
              link: "/streaming/cultural-space",
              content: false,
              grandchild: false
            }
          ]
        },
        {
          title: "Eventos",
          link: "/streaming/cultural-space",
          content: false,
          grandchild: false
        },
        {
          title: "Patrimônio Cultural",
          link: "/streaming/patrimony",
          content: false,
          grandchild: false
        },
        {
          title: "Oficinas",
          link: "/streaming/patrimony",
          content: false,
          grandchild: false
        },
        {
          title: "Editais e Chamadas Publicas",
          link: "/streaming/patrimony",
          content: false,
          grandchild: false
        },
        {
          title: "Pesquisas de Sergipe",
          link: "/streaming/sergipe-searches",
          content: false,
          grandchild: false
        }

      ]
    }
  ]
}
