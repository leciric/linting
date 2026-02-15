<script setup lang="ts">
import { contactLinks } from '~/data/portfolio'
</script>

<template>
  <section id="contact" class="section-container bg-zinc-100/50 dark:bg-zinc-900/50 mb-4 sm:mb-8">
    <UISectionTitle
      title="Get In Touch"
      subtitle="Feel free to reach out for collaborations or just a friendly hello"
    />

    <div class="max-w-2xl mx-auto">
      <!-- Contact Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <a
          v-for="link in contactLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white dark:bg-zinc-900 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 active:scale-[0.98]"
        >
          <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
            <Icon :name="link.icon" class="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400 group-hover:text-white" />
          </div>
          <div class="min-w-0 flex-1">
            <h3 class="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ link.name }}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 truncate">
              {{ link.handle }}
            </p>
          </div>
          <Icon name="lucide:arrow-up-right" class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-zinc-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </a>
      </div>

      <!-- CTA -->
      <div class="mt-8 sm:mt-12 text-center">
        <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6">
          Prefer a direct message? Send me an email and I'll get back to you as soon as possible.
        </p>
        <UIButton href="mailto:leandro@linting.dev" variant="primary" size="lg" external class="w-full sm:w-auto justify-center">
          <Icon name="lucide:mail" class="w-5 h-5" />
          Send an Email
        </UIButton>
      </div>
    </div>
  </section>
</template>
