<template>
  <div class="d-block text-animation">
    <svg viewBox="0 0 340 150">
      <text x="50%" y="30%" class="" dominant-baseline="middle" text-anchor="middle">chai of</text>
      <text x="50%" y="70%" class="" dominant-baseline="middle" text-anchor="middle">wasseypur</text>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
$stroke-width: 0.5;
$stroke-color: #fff;
.text-animation text {
  animation: stroke 6s alternate;
  transition: color 6s linear;
  font-size: 70px !important;
  fill: transparent;
  stroke: $stroke-color;
  text-align: center !important;
  font-family: "Samarkan" !important;
  opacity: 0.7;
}

@keyframes stroke {
  0% {
    // fill: rgba(72, 138, 20, 0);
    stroke: $stroke-color;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: $stroke-width;
  }
  70% {
    // fill: rgba(72, 138, 20, 0);
    stroke: $stroke-color;
  }
  80% {
    // fill: rgba(72, 138, 20, 0);
    stroke: $stroke-color;
    stroke-width: $stroke-width;
  }
  100% {
    // fill: $stroke-color;
    stroke: $stroke-color;
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    // stroke-width: 0;
  }
}
</style>
<script>
export default {
  name: "AnimatedText",
  data: () => ({}),
};
</script>
