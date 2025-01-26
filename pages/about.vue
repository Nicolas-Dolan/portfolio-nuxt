<template>
  <Slide>
    <div class="col-sm-8">
      <h2>About</h2>
      <p>
        As a full-stack developer, I would describe myself as a front-end Vue
        specialist and back-end generalist.
      </p>

      <p>
        I have deep knowledge of front-end development with 5 years of
        experience building stylish, optimised, and secure front ends that are
        easy to maintain and accessible. I am an expert in Vue.js and its
        ecosystem, but I am also confident with React.
      </p>

      <p>
        My back-end experience is broad and flexible. Most recently, I have been
        using C#/.NET at SmartSurvey. Outside of work, I mostly use
        Python/Django to build out the back end of my personal projects. I have
        also used Node.js/Express.js and Kotlin/Spring Boot in the back end when
        working at Imperial College London. Although not a specialist in these
        technologies, I have developed a solid understanding of back-end
        concepts such as OOP and system design to the extent that I can quickly
        adapt to any back-end technology and make meaningful contributions.
      </p>
      <p>
        I have genuine passion for software engineering. I continually seek to
        improve my knowledge of web development and aim to throughly
        understanding the codebase that I am working on. I am an engaged and
        thoughtful employee who aims to make a lasting, positive impacts on both
        the code I work on and the organisation’s processes and ethos.
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
