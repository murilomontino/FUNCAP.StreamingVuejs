<template>
<main id="main" class="privacy-collor site-main">
  <Breadcrumb />
  <PrivacyPolicyDetail />
</main>
</template>

<script>
import PrivacyPolicyDetail from "./PrivacyPolicyDetail"
import Breadcrumb from "@/components/general/Breadcrumb/Breadcrumb"
export default {
  name: "PrivacyPolicy",
  components: {
    PrivacyPolicyDetail,
    Breadcrumb
  }
}
</script>

<style>
.privacy-collor {
  background-color: #fff !important;
  height: 100% !important;
}
</style>
