<template>
<!--
  componente tab-nav de fundo branco
-->
  <li :class="liClass">
    <a :class="'nav-link nav-light-custom '+className" :id="id" :data-toggle="dataToggle" :href="url" :role="role" :aria-controls="ariaControls" :aria-selected="ariaSelected">
      <slot name="title" v-if="hasTitleSlot"/>
      <template v-else>{{ title }}</template>
    </a>
  </li>
</template>
<script>
export default {
  name: "tab-nav-items-backend",
  props: {
    id: { type: String, default: "myTab" },
    active: { type: Boolean, default: false },
    role: { type: String, default: "tab" },
    ariaControls: { type: String, default: "tabpanel" },
    ariaSelected: { type: Boolean, default: false },
    dataToggle: { type: String, default: "tab" },
    href: { type: String, default: "" },
    title: { type: String, default: "" },
    liClass: { type: String, default: "nav-item nav-light" }
  },
  mounted () {
    if (this.active) {
      this.className = "show active"
    }
  },
  computed: {
    hasTitleSlot () {
      return !!this.$slots.title
    },
    url () {
      if (this.href === "") {
        return "#" + this.ariaControls
      }
      return this.href
    }
  },
  data () {
    return {
      className: ""
    }
  }
}
</script>
<style>

.nav-pills .nav-item.nav-light a { color: #8c8c8c ; border-radius: 50px; }
.nav-pills .nav-link.nav-light-custom.active, .nav-pills .show>.nav-link.nav-light-custom { color: #3c3c3c !important; background: transparent; }
.nav-pills .nav-link.nav-light-custom:hover { color: var(--iq-primary); }

</style>
