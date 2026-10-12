<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
    <!-- Linting Animation Background -->
    <HeroLintAnimation class="absolute inset-0 z-0" />
    <div class="relative z-10 w-full max-w-5xl mx-auto">
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-primary-600 dark:text-primary-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base uppercase tracking-wider"
        >
          {{ t('hero.eyebrow') }}
        </p>

        <!-- Headline -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6 leading-tight"
        >
          {{ t('hero.title') }}
        </h1>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-3 sm:mb-4 leading-relaxed"
        >
          {{ t('hero.description') }}
          <span class="text-zinc-900 dark:text-zinc-100 font-medium">{{ t('hero.note') }}</span>
        </p>

        <!-- Origin Story -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 max-w-xl mb-6 sm:mb-8 leading-relaxed italic"
        >
          {{ t('hero.origin') }}
        </p>

        <!-- CTA Buttons -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          class="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <UIButton href="#contact" variant="primary" size="lg" class="w-full sm:w-auto justify-center">
            {{ t('hero.ctaPrimary') }}
            <Icon name="lucide:arrow-right" class="w-5 h-5" />
          </UIButton>
          <UIButton href="#services" variant="outline" size="lg" class="w-full sm:w-auto justify-center">
            {{ t('hero.ctaSecondary') }}
          </UIButton>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 800 } }"
        class="hidden md:flex justify-center mt-12 lg:mt-16 animate-bounce"
      >
        <a href="#services" :aria-label="t('nav.services')" class="text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <Icon name="lucide:chevrons-down" class="w-8 h-8" />
        </a>
      </div>
    </div>
  </section>
</template>
