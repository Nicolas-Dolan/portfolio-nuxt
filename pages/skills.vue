<template>
  <Slide>
    <div>
      <h2>Skills & Interests</h2>
      <div class="row">
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
              <i class="devicon-storybook-plain skillIcon"></i>
              <p>Storybook</p>
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
              <i class="devicon-nestjs-original skillIcon"></i>
              <p>NestJS</p>
            </div>
            <div class="techBundle">
              <i class="devicon-csharp-plain skillIcon"></i>
              <p>C#</p>
            </div>
            <div class="techBundle">
              <i class="devicon-dot-net-plain skillIcon"></i>
              <p>.NET</p>
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
              <i class="devicon-bootstrap-plain skillIcon"></i>
              <p>Bootstrap</p>
            </div>
            <div class="techBundle">
              <i class="devicon-docker-plain skillIcon"></i>
              <p>Docker</p>
            </div>
            <div class="techBundle">
              <i class="devicon-amazonwebservices-plain-wordmark skillIcon"></i>
              <p>AWS</p>
            </div>
            <div class="techBundle">
              <i class="devicon-azuredevops-plain skillIcon"></i>
              <p>Azure DevOps</p>
            </div>
            <div class="techBundle">
              <i class="devicon-jest-plain skillIcon"></i>
              <p>Jest</p>
            </div>
            <div class="techBundle">
              <i class="devicon-vitest-plain skillIcon"></i>
              <p>Vitest</p>
            </div>
            <div class="techBundle">
              <i class="devicon-cypressio-plain skillIcon"></i>
              <p>Cypress</p>
            </div>
            <div class="techBundle">
              <i class="devicon-playwright-plain skillIcon"></i>
              <p>Playwright</p>
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
            AI Coding Agents (Claude Code, GitHub Copilot) | LLM Evaluation |
            Provider-Agnostic LLM Integration | Local Models (Ollama) | Pinia |
            Zod | Drizzle | REST/OpenAPI | Job Queues | OpenTofu | Datadog |
            Feature Flags | Design Systems | Accessibility | Web Security |
            UX/UI Design | Domain-Driven Design | State Machines | Code Review |
            Test-Driven Development | Agile Development | CI/CD | Documentation
            | SOLID Principles | Object-Oriented Programming | Functional
            Programming | Requirements Gathering
          </p>
        </div>
        <div class="col-sm align-self-start">
          <h4>Soft Skills</h4>
          <p>
            Problem Solving | Attention to Detail | Teamwork | Initiative |
            Communication | Time Management | Analysis
          </p>
          <h4>Interests</h4>
          <h5>Artificial Intelligence</h5>
          <p>
            I now build with AI every day. At InfoTrack, I redesigned AP1 around
            AI document extraction. Comprehensible World uses an AI pipeline to
            write its stories, with automated checks to catch the AI’s mistakes,
            and I develop it with AI coding agents such as Claude Code and
            Copilot.
          </p>
          <h5>Spanish</h5>
          <p>
            I’ve been learning Spanish for a couple of years now. The process
            has taught me a lot about self-directed learning – an invaluable
            skill when learning to code! I eventually want to travel around
            South America to immerse myself in the language.
          </p>
        </div>
      </div>
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
