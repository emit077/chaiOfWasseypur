<style lang="scss" scoped>
.landing-screen {
  background-image: url("@/assets/images/cup.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-position-y: bottom;
}
</style>
<template>
  <div class="text-center landing-screen app-padding">
    <div class="my-7">
      <animated-text />
    </div>
    <p class="font-moon-dance text-h2 mt-3">
      Where stories unfold over a cup of tea
    </p>
  </div>
</template>
<!-- script -->
<script>
import AnimatedText from "@/components/other-components/AnimatedText.vue";

export default {
  name: "LandingScreen",
  components: {
    AnimatedText,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
