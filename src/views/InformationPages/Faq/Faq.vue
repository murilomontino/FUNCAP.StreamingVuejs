<template>
<div>
  <Breadcrumb />
  <FaqList />
</div>
</template>

<script>
import Breadcrumb from "@/components/general/Breadcrumb/Breadcrumb"
import FaqList from "./FaqList"
export default {
  name: "Faq",
  components: {
    FaqList,
    Breadcrumb
  }
}
</script>
