<template>
<main id="main" class="site-main">
  <Breadcrumb />
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <ContactList />
        <ContactFrom />
      </div>
    </div>
  </div>
</main>
</template>

<script>
import Breadcrumb from "@/components/general/Breadcrumb/Breadcrumb"
import ContactFrom from "./ContactFrom"
import ContactList from "./contactList"

export default {
  name: "Contact",
  components: {
    Breadcrumb,
    ContactFrom,
    ContactList
  }
}
</script>
