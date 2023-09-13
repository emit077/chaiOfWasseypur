<template>
   <div class="app-padding py-3 d-flex align-center" id="app-bar">
    <div class="d-inline-flex align-center pt-2 w-25" >
      <router-link to="/" class="router-link">
        <img src="../../assets/images/logo-light.svg" alt="" width="70">
      </router-link>
    </div>

    <!--  desktop  -->
    <div class="d-inline-block text-right w-75" v-show="header">
      <div class="d-inline-flex">
        <div class="d-inline-block align-center">
          <span class="ml-8 d-inline-block">
            <!-- <span class="text-dot" @click.prevent=""> Home </span> -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- script -->
<script>
export default {
  name: "AppBar",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
