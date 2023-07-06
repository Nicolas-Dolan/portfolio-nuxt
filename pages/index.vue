<template>
  <div>Home text <NuxtLink to="/one">One</NuxtLink></div>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>
