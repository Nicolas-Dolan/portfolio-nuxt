<template>
  <Slide>
    <div class="col-sm-8">
      <h2>About</h2>
      <p>
        I’m a full-stack product engineer with 6 years of experience, working mostly in TypeScript with Vue and React, and with Node.js and C#/.NET on the back end.
      </p>

      <p>
        Most recently, at InfoTrack, I led the rebuild of AP1, a form that about 45% of UK property transactions go through. I redesigned its user flow with the CEO to take an AI-native approach.
        Solicitors now start the form by uploading their documents; AI then extracts the relevant data and populates the form automatically.
      </p>

      <p>
        I care about whether a feature actually helps the people using it, so I roll changes out gradually and check the data as features go live.
        Since August I’ve been building Comprehensible World, a language-learning website where an AI-powered pipeline writes the stories and automated checks catch its mistakes before anything is published.
      </p>
    </div>
    <div class="col-sm-4 d-flex justify-content-center">
      <img class="profile" src="../assets/images/profile.jpg" alt="profile" />
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>

<style>
.profile {
  max-width: 170px;
  width: 100%;
  height: auto;
  border-radius: 25px;
}
</style>
