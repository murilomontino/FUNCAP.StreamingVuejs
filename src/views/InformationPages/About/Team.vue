<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="text-center iq-title-box iq-title-default">
          <h2 class="iq-title text-capitalize">
            Time Funcap
          </h2>
          <!--                <p class="iq-title-desc">Your Streamit is build by one of the best and well experienced web developers and an <br>awarded Envato Elite Author.</p> -->
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row about-us-detail">
      <div class="col-md-3" v-for="(list,index) of lists" :key="index">
        <div class="image-box">
          <img width="265" height="345" :src="list.src" class="attachment-large size-large" alt="" loading="lazy">
        </div>
        <div class="icon-box-content">
          <div class="widget-container">
            <p class="heading-title size-default">{{list.titulo}}</p>
          </div>
          <div class="widget-container">
            <h4 class="heading-title size-default">{{list.nome}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Team",
  data () {
    return {
      lists: [{
        src: require("@/assets/images/frontend/about-us/02.jpg"),
        titulo: "CEO-Desenvolvedor",
        nome: "Renan"

      },
      {
        src: require("@/assets/images/frontend/about-us/03.jpg"),
        titulo: "Desenvolvedor",
        nome: "Murilo"

      }
      ]
    }
  }
}
</script>
