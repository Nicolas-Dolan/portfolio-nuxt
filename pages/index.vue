<template>
  <Slide>
    <div class="d-flex justify-content-between flex-column start">
      <h1 class="text-center">Full-Stack Web Developer</h1>
      <NuxtLink :to="next">
        <h2 class="text-center text-white">Scroll</h2>
        <img
          class="scrollArrow mx-auto d-block"
          alt="down arrow"
          src="../assets/images/down-arrow.png"
        />
      </NuxtLink>
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";
import { useNavigation } from "../hooks/navigation";

const { prev, next } = useNavigation();

definePageMeta(pageMeta as any);
</script>

<style scoped>
.start {
  height: 200px;
}
a {
  text-decoration: none;
}

@-webkit-keyframes bounce {
  from {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }

  80% {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }

  93% {
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }
}

@keyframes bounce {
  from {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }

  80% {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }

  93% {
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
.scrollArrow {
  max-height: 40px;
  animation: bounce 5s linear infinite;
}
</style>
