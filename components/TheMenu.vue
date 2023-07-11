<template>
  <div>
    <h2>Nicolas Dolan: Portfolio</h2>

    <NuxtLink :to="prev">Prev</NuxtLink> |
    <NuxtLink :to="next">Next</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from "../hooks/navigation";

const { prev, next } = useNavigation();
</script>
