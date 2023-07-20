<template>
  <div>
    <NuxtLink to="/"
      ><h2 class="text-white text-center">
        Nicolas Dolan: Portfolio
      </h2></NuxtLink
    >
    <nav class="d-flex justify-content-center flex-wrap mb-2">
      <template v-for="(item, index) in routeMenuConfig" :key="index">
        <div v-if="!item" class="mx-1">|</div>
        <NuxtLink v-else :to="item.route"
          ><div class="text-white" :class="{ isActive: item.isActive }">
            {{ item.routeName }}
          </div></NuxtLink
        ></template
      >
    </nav>
    <div class="d-flex justify-content-center d-md-flex d-none">
      <NuxtLink :to="prev"
        ><img
          class="arrow"
          alt="left arrow"
          src="../assets/images/left-arrow.png"
      /></NuxtLink>
      <NuxtLink :to="next"
        ><img
          class="arrow"
          alt="right arrow"
          src="../assets/images/right-arrow.png"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { routeOrder } from "../utils";
import { useNavigation } from "../hooks/navigation";

interface MenuConfig {
  route: string;
  routeName: string;
  isActive: boolean;
}

type MenuConfigs = (MenuConfig | null)[];

const routes = useRoute();
const { prev, next } = useNavigation();

const routeMenuConfig = computed(() => {
  const config: MenuConfigs = [];
  routeOrder.slice(1).forEach((route, index, array) => {
    const routeName = route.charAt(1).toUpperCase() + route.slice(2);
    const configItem = {
      route,
      routeName,
      isActive: routes.path.includes(route),
    };
    config.push(configItem);
    if (index !== array.length - 1) {
      config.push(null);
    }
  });
  return config;
});
</script>

<style scoped>
a {
  text-decoration: none;
}
.isActive {
  text-decoration: underline;
}
.arrow {
  max-height: 30px;
  margin: 0 10px;
}
</style>
