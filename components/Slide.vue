<template>
  <div
    class="row overflow-auto faded align-items-center"
    style="height: 80vh"
    @scroll="handleSlideScroll"
    ref="slide"
  >
    <div style="height: 5vh"></div>
    <slot></slot>
    <div style="height: 5vh"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useNavigation } from "../hooks/navigation";

const { prev, next } = useNavigation();
const router = useRouter();

const slide = ref(null);
const isReady = ref(false);
const isScrollable = ref(false);

const finishedForwardScroll = ref(false);
const finishedBackwardScroll = ref(true);
const reachedTop = ref(true);
const reachedBottom = ref(false);
const scrollDirection = ref("");

function handleWindowScroll(e) {
  if (isReady.value) {
    const isScrollingForward = e.wheelDeltaY < 0;
    const isScrollingBackward = e.wheelDeltaY > 0;

    if (isScrollable.value) {
      if (
        isScrollingForward &&
        (scrollDirection.value !== "forward" || finishedForwardScroll.value)
      ) {
        reachedTop.value = false;
        scrollDirection.value = "forward";
        finishedBackwardScroll.value = false;
        if (reachedBottom.value && finishedForwardScroll.value) {
          changePage(next);
          isReady.value = false;
        }
      } else if (
        isScrollingBackward &&
        (scrollDirection.value !== "backward" || finishedBackwardScroll.value)
      ) {
        reachedBottom.value = false;
        scrollDirection.value = "backward";
        finishedForwardScroll.value = false;
        if (reachedTop.value && finishedBackwardScroll.value) {
          changePage(prev);
          isReady.value = false;
        }
      }
    } else {
      if (isScrollingForward && scrollDirection.value !== "forward") {
        scrollDirection.value = "forward";
        changePage(next);
        isReady.value = false;
      } else if (isScrollingBackward && scrollDirection.value !== "backward") {
        scrollDirection.value = "backward";
        changePage(prev);
        isReady.value = false;
      }
    }
  }
}
function handleSlideScroll({
  target: { scrollTop, clientHeight, scrollHeight },
}) {
  if (scrollTop + clientHeight >= scrollHeight) {
    reachedBottom.value = true;
    finishedForwardScroll.value = false;
    setTimeout(() => {
      finishedForwardScroll.value = true;
    }, 1000);
  }
  if (scrollTop === 0) {
    reachedTop.value = true;
    finishedBackwardScroll.value = false;
    setTimeout(() => {
      finishedBackwardScroll.value = true;
    }, 1000);
  }
}

function changePage(direction) {
  router.push({ path: direction.value });
}

window.onerror = function (e) {
  if (e.includes("NotFoundError:")) {
    document.location.reload();
    return true;
  }
};

addEventListener("wheel", handleWindowScroll);

onMounted(() => {
  setTimeout(() => {
    isReady.value = true;
    const { clientHeight, scrollHeight } = slide.value;
    isScrollable.value = scrollHeight > clientHeight;
  }, 1500);
});

onUnmounted(() => {
  removeEventListener("wheel", handleWindowScroll);
});
</script>

<style>
/* .faded {
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
} */

.faded {
  --mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 1) 0,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0) 100%,
      rgba(0, 0, 0, 0) 0
    )
    100% 90% / 100% 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>
