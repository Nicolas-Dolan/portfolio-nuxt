<template>
  <Slide key="skills">
    <h2>Skills & Interests</h2>
    <div class="col-sm">
      <h4>Technologies</h4>
      <div class="d-flex flex-wrap justify-content-between">
        <div class="techBundle">
          <i class="devicon-typescript-plain skillIcon"></i>
          <p>TypeScript</p>
        </div>
        <div class="techBundle">
          <i class="devicon-vuejs-plain skillIcon"></i>
          <p>Vue.js</p>
        </div>
        <div class="techBundle">
          <i class="devicon-nuxtjs-plain skillIcon"></i>
          <p>Nuxt.js</p>
        </div>
        <div class="techBundle">
          <i class="devicon-react-original skillIcon"></i>
          <p>React</p>
        </div>
        <div class="techBundle">
          <i class="devicon-nextjs-original skillIcon"></i>
          <p>Next.js</p>
        </div>
        <div class="techBundle">
          <i class="devicon-python-plain skillIcon"></i>
          <p>Python</p>
        </div>
        <div class="techBundle">
          <i class="devicon-django-plain skillIcon"></i>
          <p>Django</p>
        </div>
        <div class="techBundle">
          <i class="devicon-postgresql-plain skillIcon"></i>
          <p>PostgreSQL</p>
        </div>
        <div class="techBundle">
          <i class="devicon-nodejs-plain skillIcon"></i>
          <p>Node.js</p>
        </div>
        <div class="techBundle">
          <i class="devicon-express-original skillIcon"></i>
          <p>Express.js</p>
        </div>
        <div class="techBundle">
          <i class="devicon-mongodb-plain skillIcon"></i>
          <p>MongoDB</p>
        </div>
        <div class="techBundle">
          <i class="devicon-bootstrap-plain skillIcon"></i>
          <p>Bootstrap</p>
        </div>
        <div class="techBundle">
          <i class="devicon-docker-plain skillIcon"></i>
          <p>Docker</p>
        </div>
        <div class="techBundle">
          <i class="devicon-amazonwebservices-original skillIcon"></i>
          <p>AWS</p>
        </div>
        <div class="techBundle">
          <i class="devicon-jest-plain skillIcon"></i>
          <p>Jest</p>
        </div>
        <div class="techBundle">
          <i class="devicon-javascript-plain skillIcon"></i>
          <p>JavaScript</p>
        </div>
        <div class="techBundle">
          <i class="devicon-html5-plain skillIcon"></i>
          <p>HTML5</p>
        </div>
        <div class="techBundle">
          <i class="devicon-css3-plain skillIcon"></i>
          <p>CSS3</p>
        </div>
        <div class="techBundle">
          <i class="devicon-git-plain skillIcon"></i>
          <p>Git</p>
        </div>
        <div class="techBundle">
          <i class="devicon-github-plain skillIcon"></i>
          <p>GitHub</p>
        </div>
      </div>
      <h4>Skills & Knowledge</h4>
      <p>
        Data Structures & Algorithms | Design Patterns | Clean Code | SOLID
        Principles | Object-Oriented Programming | Functional Programming |
        Test-Driven Development | Agile Development | Continuous
        Integration/Delivery | Web Security | UX/UI Design | Code Review |
        Serverless Architecture | Requirements Gathering | Wireframing |
        Documentation | Progressive Web Applications | Restful APIs
      </p>
    </div>
    <div class="col-sm align-self-start">
      <h4>Soft Skills</h4>
      <p>
        Problem Solving | Attention to Detail | Team Work | Initiative |
        Communication | Time Management | Analysis
      </p>
      <h4>Interests</h4>
      <h5>Artificial Intelligence</h5>
      <p>
        I’ve become increasingly obsessed with AI, consuming every book,
        documentary, and seminar on the topic I can get my hands on. I’m very
        optimistic about the increasing benefit AI will provide to society and I
        would eventually like to get involved in its development directly.
      </p>
      <h5>Spanish</h5>
      <p>
        I’ve been learning Spanish for a couple of years now. The process has
        taught me a lot about self-directed learning – an invaluable skill when
        learning to code! I eventually want to travel around South America to
        immerse myself in the language.
      </p>
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { pageMeta } from "../utils";

definePageMeta(pageMeta as any);
</script>

<style>
.techBundle {
  text-align: center;
  margin: 5px;
}

.skillIcon {
  font-size: 40px;
}
</style>
