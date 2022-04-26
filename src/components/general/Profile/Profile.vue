<template>
<div class='custom-size-img'>
  <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
    <img :src="userProfile" class="img-fluid rounded-circle mr-3" alt="user">
  </a>
  <div class="iq-sub-dropdown iq-user-dropdown">
    <div class="iq-card shadow-none m-0">
      <div class="iq-card-body p-0 ">
        <div class="bg-primary p-3">
          <h5 class="mb-0 text-white line-height">Hello Nik jone</h5>
          <span class="text-white font-size-12">{{ $t('nav.user.available') }}</span>
        </div>
        <router-link :to="{ name: 'user.user-profile' }" class="iq-sub-card iq-bg-primary-hover">
          <div class="media align-items-center">
            <div class="rounded iq-card-icon iq-bg-primary">
              <i class="ri-file-user-line"></i>
            </div>
            <div class="media-body ml-3">
              <h6 class="mb-0 ">{{ $t('nav.user.profileTitle') }}</h6>
              <p class="mb-0 font-size-12">{{ $t('nav.user.profileSub') }}</p>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'user.user-edit' }" class="iq-sub-card iq-bg-primary-hover">
          <div class="media align-items-center">
            <div class="rounded iq-card-icon iq-bg-primary">
              <i class="ri-profile-line"></i>
            </div>
            <div class="media-body ml-3">
              <h6 class="mb-0 ">{{ $t('nav.user.profileEditTitle') }}</h6>
              <p class="mb-0 font-size-12">{{ $t('nav.user.profileEditSub') }}</p>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'user.account-setting' }" class="iq-sub-card iq-bg-primary-hover">
          <div class="media align-items-center">
            <div class="rounded iq-card-icon iq-bg-primary">
              <i class="ri-account-box-line"></i>
            </div>
            <div class="media-body ml-3">
              <h6 class="mb-0 ">{{ $t('nav.user.accountSettingTitle') }}</h6>
              <p class="mb-0 font-size-12">{{ $t('nav.user.accountSettingSub') }}</p>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'user.privacy' }" class="iq-sub-card iq-bg-primary-hover">
          <div class="media align-items-center">
            <div class="rounded iq-card-icon iq-bg-primary">
              <i class="ri-lock-line"></i>
            </div>
            <div class="media-body ml-3">
              <h6 class="mb-0 ">{{ $t('nav.user.privacySettingTitle') }}</h6>
              <p class="mb-0 font-size-12">{{ $t('nav.user.privacySettingSub')}}</p>
            </div>
          </div>
        </router-link>
        <div class="d-inline-block w-100 text-center p-3">
          <a class="bg-primary iq-sign-btn" href="javascript:void(0)" @click="logout" role="button">{{ $t('nav.user.signout') }}<i class="ri-login-box-line ml-2"></i></a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { core } from "../../../config/pluginInit"
import profile from "../../../assets/images/user/1.jpg"
import { mapActions } from "vuex"

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
  },
  methods: {
    ...mapActions("Auth", ["ActionDoLogout"]),
    logout () {
      this.ActionDoLogout()
    }
  }
}
</script>
<style >
.custom-size-img{
  width: 2.5rem !important;
}
</style>
