<script setup lang="ts">
import { jobs } from '~/data/portfolio'

const { t } = useI18n()
</script>

<template>
  <section id="experience" class="section-container">
    <UISectionTitle
      :title="t('experience.title')"
      :subtitle="t('experience.subtitle')"
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
