<template>
  <div class="container">
    <div class="h-100">
      <div
        class="row"
        style="height: 80vh; margin-top: 10vh; margin-bottom: 10vh"
      >
        <div class="col-sm bg-primary">
          <TheMenu />

          <NuxtLink :to="prev">Prev</NuxtLink> |
          <NuxtLink :to="next">Next</NuxtLink>
        </div>
        <div class="col-sm-9 bg-secondary">
          <TheReel><NuxtPage /></TheReel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routeOrder } from "./utils";

const lastIndex = routeOrder.length - 1;
const route = useRoute();
const currentRouteIndex = computed(() =>
  routeOrder.includes(route.path) ? routeOrder.indexOf(route.path) : 0
);

const prev = computed(() =>
  currentRouteIndex.value !== 0
    ? routeOrder[currentRouteIndex.value - 1]
    : routeOrder[lastIndex]
);
const next = computed(() =>
  currentRouteIndex.value < lastIndex
    ? routeOrder[currentRouteIndex.value + 1]
    : routeOrder[0]
);
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
