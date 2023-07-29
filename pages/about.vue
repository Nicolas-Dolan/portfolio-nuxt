<template>
  <Slide>
    <div class="col-sm-8">
      <h2>About</h2>
      <p>
        I am an enthusiastic and dedicated software engineer who transitioned
        into full-stack development in 2019 following a successful career as a
        medical writer and editor.
      </p>

      <p>
        Throughout my career, I have brought a deep passion for science and
        technology to all of the work I do. In my engineering role at Imperial
        College London, I worked closely with research scientists to develop
        cutting-edge, open-source applications used in public health research.
      </p>

      <p>
        I work well on my own initiative and as part of a team, and have
        experience managing multiple ongoing projects while working both
        in-house and for clients. Additionally, I can leverage excellent
        problem-solving and attention-to-detail skills developed while writing
        and analysing complicated scientific texts in my previous roles.
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
