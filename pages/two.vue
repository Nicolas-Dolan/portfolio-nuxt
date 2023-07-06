<template>
  <SlideTemplate>
    <div class="col bg-info">
      <NuxtLink to="/">Home</NuxtLink><NuxtLink to="/one">One</NuxtLink>
    </div>
  </SlideTemplate>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>
