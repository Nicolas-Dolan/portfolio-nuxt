<template>
  <SlideTemplate>
    <div class="bg-primary">Home text <NuxtLink to="/one">One</NuxtLink></div>
  </SlideTemplate>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>
