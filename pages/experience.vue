<template>
  <Slide key="experience">
    <h2>Experience & Education</h2>
    <div class="col-sm-4 d-flex justify-content-center align-self-start">
      <div
        class="d-flex flex-sm-column flex-wrap flex-sm-nowrap justify-content-sm-center h-100"
      >
        <div
          v-for="{ route, iconSrc, name, isActive } in computedExpList"
          class="mb-2"
        >
          <NuxtLink :to="`/experience/${route}`">
            <div class="frame">
              <img
                :src="iconSrc"
                :alt="name"
                class="expIcon"
                :class="{ isActive }"
              />

              <div class="overlay">
                <div class="text">{{ name }}</div>
              </div>
            </div></NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="col-sm-8 align-self-start">
      <NuxtPage
        :transition="{
          name: 'blur',
          mode: 'out-in',
        }"
      />
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { pageMeta } from "../utils";

const routes = useRoute();

const experienceList = [
  {
    name: "Redactyl",
    iconSrc: "/assets/images/redactyl.png",
    route: "redactyl",
  },
  {
    name: "Imperial College London",
    iconSrc: "/assets/images/icl.png",
    route: "imperial-college-london",
  },
  {
    name: "General Assembly",
    iconSrc: "/assets/images/ga.png",
    route: "general-assembly",
  },
  {
    name: "Syneos Health",
    iconSrc: "/assets/images/syneos.png",
    route: "syneos-health",
  },
  {
    name: "AS&K",
    iconSrc: "/assets/images/ask.png",
    route: "ask",
  },
  {
    name: "The Lancet",
    iconSrc: "/assets/images/lancet.png",
    route: "the-lancet",
  },
  {
    name: "King's College London",
    iconSrc: "/assets/images/kcl.jpeg",
    route: "kings-college-london",
  },
];
const computedExpList = computed(() => {
  return experienceList.map((item) => {
    return { ...item, isActive: routes.path.includes(item.route) };
  });
});

definePageMeta(pageMeta as any);
</script>

<style scoped>
.expIcon {
  max-width: 90px;
  height: auto;
  padding: 5px;
}
.isActive {
  padding: 0px;
  border: rgba(255, 255, 255, 0.19) thick solid;
  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 10px;
}

.frame {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: white;
  border-radius: 10px;
}

.frame:hover .overlay {
  opacity: 0.75;
}

.text {
  color: black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: block;
}
</style>
