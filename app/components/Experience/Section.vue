<script setup lang="ts">
import { jobs } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="section-container">
    <UISectionTitle
      title="Experience"
      subtitle="My professional journey as a developer"
    />

    <div class="max-w-2xl mx-auto">
      <ExperienceTimelineItem
        v-for="(job, index) in jobs"
        :key="job.company + job.startDate"
        :job="job"
        :index="index"
        :is-last="index === jobs.length - 1"
      />
    </div>
  </section>
</template>
