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
/* .slide-left-enter-active,
.slide-left-leave-active, */
/* .slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
} */
.slide-left-enter-active {
  animation: zoomIn 2s;
}
.slide-left-leave-active {
  animation: zoomInPlus 1s;
  /* animation-fill-mode: forwards; */
}
.slide-right-enter-active {
  animation: zoomOutPlus 1.5s;
}
.slide-right-leave-active {
  animation: zoomOut 1s;
  animation-fill-mode: forwards;
}

/* .slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);

  transform: scale3d(0.01, 0.01, 0.01);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);

  transform: scale3d(4, 4, 4);
} */
/* .slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
} */

//////////////////////////////////

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.01, 0.01, 0.01);
    transform: scale3d(0.01, 0.01, 0.01);
  }

  /* 15% {
    opacity: 0;
    -webkit-transform: scale3d(0.01, 0.01, 0.01);
    transform: scale3d(0.01, 0.01, 0.01);
  } */

  50% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.01, 0.01, 0.01);
    transform: scale3d(0.01, 0.01, 0.01);
  }

  /* 15% {
    opacity: 0;
    -webkit-transform: scale3d(0.01, 0.01, 0.01);
    transform: scale3d(0.01, 0.01, 0.01);
  } */

  50% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

//////////////////////////////////

@-webkit-keyframes zoomInPlus {
  from {
    /* display: flex; */
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  99% {
    -webkit-transform: scale3d(4, 4, 4);
    transform: scale3d(4, 4, 4);
    opacity: 0;
  }
  to {
    /* display: none; */
    opacity: 0;
  }
}

@keyframes zoomInPlus {
  from {
    /* display: flex; */
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  99% {
    -webkit-transform: scale3d(4, 4, 4);
    transform: scale3d(4, 4, 4);
    opacity: 0;
  }

  to {
    /* display: none; */
    opacity: 0;
  }
}

.zoomInPlus {
  -webkit-animation-name: zoomInPlus;
  animation-name: zoomInPlus;
}

//////////////////////////////

@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(0.01, 0.01, 0.01);
    transform: scale3d(0.01, 0.01, 0.01);
  }

  to {
    opacity: 0;
    /* display: none; */
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    -webkit-transform: scale3d(0.01, 0.01, 0.01);
    transform: scale3d(0.01, 0.01, 0.01);
  }

  to {
    opacity: 0;
    /* display: none; */
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

/////////////////////

@-webkit-keyframes zoomOutPlus {
  from {
    /* opacity: 0;
  }

  66% { */
    -webkit-transform: scale3d(4, 4, 4);
    transform: scale3d(4, 4, 4);
    opacity: 0;
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  to {
    opacity: 1;
  }
}

@keyframes zoomOutPlus {
  from {
    /* opacity: 0;
  }

  66% { */
    -webkit-transform: scale3d(4, 4, 4);
    transform: scale3d(4, 4, 4);
    opacity: 0;
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  to {
    opacity: 1;
  }
}

.zoomOutPlus {
  -webkit-animation-name: zoomOutPlus;
  animation-name: zoomOutPlus;
}
</style>
