<template>
<router-link :to="{ name: 'user.user-profile' }">
  <div class='custom-size-img line-height pt-3 user-profile'>
    <img :src="userProfile" class="img-fluid rounded-circle mr-3" alt="user">
  </div>
  <div class='profile-username'>
  <span style="font-size: 10px; text-align: center">Oi, Jéssica</span>
  </div>
</router-link>
</template>

<script>
import {
  core
} from "../../../config/pluginInit"
import profile from "../../../assets/images/user/1.jpg"

export default {
  name: "Profile",
  components: {},
  mounted () {
    core.index()
  },
  data () {
    return {
      userProfile: profile
    }
  }
}
</script>

<style>
.custom-size-img {
  width: 4rem !important;
  margin: 1vh;
}
.profile-username{
  justify-content: center !important;
  align-items: center !important;
  text-align: center
}
</style>
