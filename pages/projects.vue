<template>
  <Slide>
    <h2>Software Projects</h2>
    <div
      class="col-sm-4 d-flex justify-content-center align-self-start projects"
    >
      <div
        class="d-flex flex-sm-column flex-wrap flex-sm-nowrap justify-content-sm-center h-100"
      >
        <div
          v-for="{
            route,
            iconSrc,
            name,
            isActive,
            labelFontSize,
          } in computedProjectList"
          class="mb-4"
          :key="name"
        >
          <NuxtLink :to="`/projects/${route}`">
            <div class="frame">
              <img
                :src="iconSrc"
                :alt="name"
                class="expIcon"
                :class="{ isActive }"
              />

              <div class="overlay">
                <div class="text" :style="{ fontSize: labelFontSize }">
                  {{ name }}
                </div>
              </div>
            </div></NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="col-sm-8 align-self-start">
      <div v-if="routes.path.includes('comprehensible-world')">
        <h3>Comprehensible World</h3>
        <h4>
          <a
            href="https://comprehensible.world"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
            ><div class="d-flex align-items-center">
              <img
                class="sm-arrow"
                alt="right arrow"
                src="/assets/images/right-arrow.png"
              />
              <div><em>&nbsp;Go to Comprehensible World</em></div>
            </div></a
          >
        </h4>
        <hr />
      </div>
      <div v-if="routes.path.includes('redactyl')">
        <h3>Redactyl</h3>
        <h4>
          <a
            href="https://redactyl.app"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
            ><div class="d-flex align-items-center">
              <img
                class="sm-arrow"
                alt="right arrow"
                src="/assets/images/right-arrow.png"
              />
              <div><em>&nbsp;Go to Redactyl</em></div>
            </div></a
          >
        </h4>
        <hr />
      </div>
      <!-- <Transition> -->
      <div v-if="routes.path.includes('icl')">
        <h3>Projects at Imperial College London</h3>
        <h5>
          <NuxtLink
            to="/projects/icl-naomi"
            class="text-white"
            :class="{ isActiveLink: routes.path.includes('naomi') }"
            >Naomi</NuxtLink
          >
          |
          <NuxtLink
            to="/projects/icl-wodin"
            class="text-white"
            :class="{ isActiveLink: routes.path.includes('wodin') }"
            >WODIN</NuxtLink
          >
          |
          <NuxtLink
            to="/projects/icl-orderlyweb"
            class="text-white"
            :class="{ isActiveLink: routes.path.includes('orderlyweb') }"
            >OrderlyWeb</NuxtLink
          >
        </h5>

        <div>
          <NuxtLink to="/experience/imperial-college-london" class="text-white"
            ><div class="d-flex align-items-center">
              <img
                class="sm-arrow"
                alt="right arrow"
                src="/assets/images/right-arrow.png"
              />
              <div><em>&nbsp;Go to Imperial experience overview</em></div>
            </div></NuxtLink
          >
        </div>
        <hr />
      </div>
      <!-- </Transition>
      <Transition> -->
      <div v-if="routes.path.includes('ga')">
        <h3>Projects at General Assembly</h3>
        <h5>
          <NuxtLink
            to="/projects/ga1-goblin-gold"
            class="text-white"
            :class="{ isActiveLink: routes.path.includes('goblin-gold') }"
            >Goblin Gold</NuxtLink
          >
          |
          <NuxtLink
            to="/projects/ga2-geography-genius"
            class="text-white"
            :class="{
              isActiveLink: routes.path.includes('geography-genius'),
            }"
            >Geography Genius</NuxtLink
          >
          |
          <NuxtLink
            to="/projects/ga3-beehive"
            class="text-white"
            :class="{ isActiveLink: routes.path.includes('beehive') }"
            >Beehive</NuxtLink
          >
          |
          <NuxtLink
            to="/projects/ga4-pokemon-unlimited"
            class="text-white"
            :class="{
              isActiveLink: routes.path.includes('pokemon-unlimited'),
            }"
            >Pokémon Unlimited</NuxtLink
          >
        </h5>
        <div>
          <NuxtLink to="/experience/general-assembly" class="text-white"
            ><div class="d-flex align-items-center">
              <img
                class="sm-arrow"
                alt="right arrow"
                src="/assets/images/right-arrow.png"
              />
              <div>
                <em>&nbsp;Go to General Assembly experience overview</em>
              </div>
            </div></NuxtLink
          >
        </div>
        <hr />
      </div>
      <!-- </Transition> -->
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
import cwImg from "/icons/comprehensible-world.png";
import redactylImg from "/icons/redactyl.png";
import iclImg from "/icons/icl.png";
import gaImg from "/icons/ga.png";

const routes = useRoute();

interface Project {
  name: string;
  iconSrc: string;
  route: string;
  labelFontSize?: string;
}

const projectList: Project[] = [
  {
    name: "Comprehensible World",
    iconSrc: cwImg,
    route: "comprehensible-world",
    // "Comprehensible" is too wide for the icon at the default 20px
    labelFontSize: "12px",
  },
  {
    name: "Redactyl",
    iconSrc: redactylImg,
    route: "redactyl",
  },
  {
    name: "Imperial College London",
    iconSrc: iclImg,
    route: "icl",
  },
  {
    name: "General Assembly",
    iconSrc: gaImg,
    route: "ga",
  },
];
const computedProjectList = computed(() => {
  return projectList.map((item) => {
    return { ...item, isActive: routes.path.includes(item.route) };
  });
});

definePageMeta(pageMeta as any);
</script>

<style scoped>
@media only screen and (min-width: 576px) {
  .projects {
    min-height: 680px;
  }
}
a {
  text-decoration: none;
}
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

.isActiveLink {
  text-decoration: underline;
}
.sm-arrow {
  /* object-fit: contain; */
  height: 1em;
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
