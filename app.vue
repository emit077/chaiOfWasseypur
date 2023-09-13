<template>
  <v-app class="app-bg">
    <app-bar />
    <app-footer />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<style>
@import url("./assets/css/main.scss");
.app-bg{
  background-color: rgb(var(--v-theme-surface)) !important;
}
</style>
<!-- script -->
<script>
import AppBar from "@/components/layout/AppBar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: "IndexPage",
  components: {
    AppBar,
    AppFooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
