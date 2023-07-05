<template>
  <div class="h-100">
    <!-- <Slide2 /> -->
    <!-- <component :is="currentSlide"></component> -->
    <!-- <NuxtPage /> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const slideMapper = {
  1: resolveComponent("Slide1"),
  2: resolveComponent("Slide2"),
};
const route = useRoute();
const currentSlide = computed(() => {
  return route in slideMapper ? slideMapper[route] : slideMapper[1];
});
// const currentSlideName = ref(
//   route in slideMapper ? slideMapper[route] : "Slide1"
// );
// const currentSlide = resolveComponent(currentSlideName);
// watch(route, (newVal, oldVal) => {
//   currentSlideName.value =
//     newVal in slideMapper ? slideMapper[newVal] : "Slide1";
//   currentSlide = resolveComponent(currentSlideName);
// });
console.log(currentSlide);
</script>
