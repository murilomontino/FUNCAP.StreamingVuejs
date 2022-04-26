<template>
<ul class="d-flex custom-collor-submenu navbar-nav ml-auto navbar-list">
  <li class="nav-item nav-icon" v-nav-toggle>
    <a href="javascript:void(0)" class="search-toggle iq-waves-effect text-gray rounded">
      <i class="ri-notification-2-line" />
    </a>
    <div class="iq-sub-dropdown">
      <div class="iq-card shadow-none m-0">
        <div class="iq-card-body p-0">
          <div class="bg-primary p-3">
            <h5 class="mb-0 text-white">Notificações<small class="badge  badge-light float-right pt-1">4</small></h5>
          </div>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/1.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">Emma Watson Barry</h6>
                <small class="float-right font-size-12">Just Now</small>
                <p class="mb-0">95 MB</p>
              </div>
            </div>
          </a>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/02.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">New customer is join</h6>
                <small class="float-right font-size-12">5 days ago</small>
                <p class="mb-0">Cyst Barry</p>
              </div>
            </div>
          </a>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/03.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">Two customer is left</h6>
                <small class="float-right font-size-12">2 days ago</small>
                <p class="mb-0">Cyst Barry</p>
              </div>
            </div>
          </a>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/04.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">New Mail from Fenny</h6>
                <small class="float-right font-size-12">3 days ago</small>
                <p class="mb-0">Cyst Barry</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </li>
  <li class="nav-item nav-icon" v-nav-toggle>
    <a href="javascript:void(0)" class="search-toggle iq-waves-effect text-gray rounded">
      <i class="ri-mail-line" />
    </a>
    <div class="iq-sub-dropdown">
      <div class="iq-card shadow-none m-0">
        <div class="iq-card-body p-0 ">
          <div class="bg-primary p-3">
            <h5 class="mb-0 text-white">Mensagens<small class="badge  badge-light float-right pt-1">5</small></h5>
          </div>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/1.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">Barry Emma Watson</h6>
                <small class="float-left font-size-12">13 Jun</small>
              </div>
            </div>
          </a>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/02.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">Lorem Ipsum Watson</h6>
                <small class="float-left font-size-12">20 Apr</small>
              </div>
            </div>
          </a>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/03.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">Why do we use it?</h6>
                <small class="float-left font-size-12">30 Jun</small>
              </div>
            </div>
          </a>
          <a href="#" class="iq-sub-card">
            <div class="media align-items-center">
              <div class="">
                <img class="avatar-40 rounded" src="../../../assets/images/user/04.jpg" alt="">
              </div>
              <div class="media-body ml-3">
                <h6 class="mb-0 ">Variations Passages</h6>
                <small class="float-left font-size-12">12 Sep</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </li>
</ul>
</template>

<script>
export default {
  name: "BoxNotification",
  created () {
  }
}
</script>
