<template>
    <b-collapse  tag="ul" :class="className" :visible="open" :id="idName" :accordion="accordianName">
        <li v-for="(item,index) in items" :key="index" :class=" !hideListMenuTitle? 'p-0' : item.is_heading ? 'iq-menu-title' :activeLink(item) && item.children ? 'active' : activeLink(item) ? 'active' : ''">
          <i v-if="item.is_heading && hideListMenuTitle" class="ri-subtract-line" />
          <span style="left: 0;" class="center-span" v-if="item.is_heading && hideListMenuTitle">{{ $t(item.name) }}</span>
            <router-link :to="item.link" v-if="!item.is_heading" :class="`iq-waves-effect ${activeLink(item) && item.children ? 'active custom-active-item-sidebar' : activeLink(item) ? 'active custom-active-item-sidebar' : ''}`" v-b-toggle="item.name">
              <i :class="item.icon + ' icon-padding-center' " v-if="item.is_icon_class"/>
              <template v-else v-html="item.icon">
              </template>
              <span class='wrap-text'>{{ item.title }}</span>
              <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
              <small v-html="item.append" v-if="hideListMenuTitle" :class="item.append_class" />
            </router-link>
            <List v-if="item.children" :items="item.children" :sidebarGroupTitle="hideListMenuTitle" :open="item.link.name !== '' && activeLink(item) && item.children ? true : !!(item.link.name !== '' && activeLink(item))" :idName="item.name" :accordianName="`sidebar-accordion-${item.class_name}`" :className="`iq-submenu ${item.class_name}`" />
        </li>
    </b-collapse>
</template>
<script>
import List from "./CollapseMenu"
import { core } from "../../../config/pluginInit"
export default {
  name: "List",
  props: {
    items: Array,
    className: { type: String, default: "iq-menu" },
    open: { type: Boolean, default: false },
    idName: { type: String, default: "sidebar" },
    accordianName: { type: String, default: "sidebar" },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  data () {
    return {
      type_user: 0
    }
  },
  components: {
    List
  },
  computed: {
    hideListMenuTitle () {
      return this.sidebarGroupTitle
    }
  },
  mounted () {
    this.type_user = this.$store.state.Auth.user.type
  },
  methods: {
    activeLink (item) {
      return core.getActiveLink(item, this.$route.name)
    }
  }
}
</script>
<style>
.wrap-text{
  font-size: 11px !important;
  word-wrap:  break-word !important
}
.icon-padding-center{
  margin-right: 1rem !important;
}
.center-span{
  padding: 0.3rem !important;
}

.custom-active-item-sidebar{
  background-color: rgba(172, 248, 162, 0.1) !important;
  width: 100% !important;
}
</style>
