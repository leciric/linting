<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>

<template>
  <section id="projects" class="section-container bg-zinc-100/50 dark:bg-zinc-900/50">
    <UISectionTitle
      title="Projects"
      subtitle="Here are some of my most relevant projects"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <ProjectsCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>
