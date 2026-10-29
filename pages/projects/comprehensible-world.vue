<template>
  <div>
    <p>
      A free website of graded stories for learners of English, Spanish and
      Brazilian Portuguese, with audio, word-by-word highlighting and
      translations. An AI-powered pipeline writes the stories, translations,
      voices and illustrations, and I review every story before it is
      published.
    </p>
    <p>
      I built it on my own with Nuxt 4, NestJS, PostgreSQL and Python services
      for language processing and audio, hosted on Hetzner and Cloudflare. Tests
      for the AI checks use examples with deliberately planted mistakes. They let
      me choose the cheapest model that is good enough for each task and switch
      AI providers without code changes.
    </p>
    <p>
      It was developed with AI coding agents (Claude Code, Copilot) working to
      written rules: I review a plan before any code is written, and a second
      model reviews the agents’ code.
    </p>
    <p>
      <strong>Technologies: </strong>Nuxt 4/Vue.js, TypeScript, NestJS,
      PostgreSQL/Drizzle, Zod/OpenAPI, Python (spaCy), OpenTofu, Hetzner,
      Cloudflare R2
    </p>
    <p>
      <img
        class="img-thumbnail mx-auto d-block projectImage"
        alt="comprehensible world"
        src="/assets/images/comprehensible-world.jpeg"
      />
    </p>
  </div>
</template>
