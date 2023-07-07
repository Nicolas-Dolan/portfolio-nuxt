<template>
  <Slide key="index">
    <div class="bg-primary">Home text <NuxtLink to="/one">One</NuxtLink></div>
  </Slide>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>
