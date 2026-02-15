<script setup lang="ts">
import { skills } from '~/data/portfolio'

const languages = computed(() => skills.filter(s => s.category === 'language'))
const frameworks = computed(() => skills.filter(s => s.category === 'framework'))
const tools = computed(() => skills.filter(s => s.category === 'tool'))
</script>

<template>
  <section id="skills" class="section-container">
    <UISectionTitle
      title="Skills"
      subtitle="Technologies and tools I work with"
    />

    <div class="space-y-6 sm:space-y-10 max-w-3xl mx-auto">
      <!-- Languages -->
      <div>
        <h3 class="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4 flex items-center gap-2">
          <Icon name="lucide:code-2" class="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
          Languages
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <SkillsBadge v-for="(skill, index) in languages" :key="skill.name" :skill="skill" :index="index" />
        </div>
      </div>

      <!-- Frameworks -->
      <div>
        <h3 class="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4 flex items-center gap-2">
          <Icon name="lucide:layers" class="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
          Frameworks & Libraries
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <SkillsBadge v-for="(skill, index) in frameworks" :key="skill.name" :skill="skill" :index="index" />
        </div>
      </div>

      <!-- Tools -->
      <div>
        <h3 class="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4 flex items-center gap-2">
          <Icon name="lucide:wrench" class="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
          Tools & Platforms
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <SkillsBadge v-for="(skill, index) in tools" :key="skill.name" :skill="skill" :index="index" />
        </div>
      </div>
    </div>
  </section>
</template>
