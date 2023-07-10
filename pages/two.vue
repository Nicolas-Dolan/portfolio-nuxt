<template>
  <Slide key="two">
    <div class="col">
      <NuxtLink to="/">Home</NuxtLink><NuxtLink to="/one">One</NuxtLink>
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>
