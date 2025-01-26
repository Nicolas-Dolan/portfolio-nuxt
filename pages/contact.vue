<template>
  <Slide>
    <div class="col-sm-6">
      <h2>Contact</h2>

      <p>
        <svg
          fill="white"
          version="1.1"
          id="Icons"
          viewBox="0 0 32 32"
          xml:space="preserve"
          height="1rem"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z"
                ></path>
              </g>
              <g>
                <path
                  d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span> nicolas.dolan@ymail.com</span>
      </p>
      <p>
        <a
          class="text-white"
          href="https://github.com/Nicolas-Dolan"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="devicon-github-plain"></i> github.com/Nicolas-Dolan</a
        >
      </p>
      <p>
        <a
          class="text-white"
          href="https://www.linkedin.com/in/nicolas-dolan/"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="devicon-linkedin-plain"></i>
          linkedin.com/in/nicolas-dolan/</a
        >
      </p>
    </div>
    <div class="col-sm-6 d-flex justify-content-center">
      <p class="d-sm-block d-none">Location:</p>
      <img class="earth" alt="earth" src="../assets/images/earth.png" />
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>

<style scoped>
a {
  text-decoration: none;
}

.earth {
  height: 350px;
}
</style>
