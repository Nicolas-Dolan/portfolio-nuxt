<template>
  <div>
    <h1>Nicolas Dolan: Portfolio</h1>

    <NuxtLink :to="prev">Prev</NuxtLink> |
    <NuxtLink :to="next">Next</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from "../hooks/navigation";

const { prev, next } = useNavigation();
</script>
