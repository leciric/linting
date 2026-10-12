<script setup lang="ts">
usePageSeo('meta.aboutTitle', 'meta.aboutDescription')

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div>
    <section class="section-container !pb-0">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 max-w-3xl mx-auto">
        <img
          src="/images/leandro-ciric.png"
          :alt="t('founder.photoAlt')"
          width="160"
          height="160"
          class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover ring-4 ring-primary-500/20 flex-shrink-0"
        >
        <div class="text-center sm:text-left">
          <p class="text-sm font-medium uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
            {{ t('about.title') }}
          </p>
          <h1 class="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">{{ t('founder.name') }}</h1>
          <p class="text-zinc-500 dark:text-zinc-400 mb-4">{{ t('founder.role') }}</p>
          <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">{{ t('about.intro') }}</p>
          <p class="text-xs sm:text-sm text-zinc-500 italic mb-6">{{ t('about.origin') }}</p>
          <div class="flex flex-col xs:flex-row gap-3 justify-center sm:justify-start">
            <UIButton :href="`${localePath('/')}#contact`" variant="primary" size="sm">
              {{ t('about.hire') }}
            </UIButton>
            <UIButton :href="localePath('/')" variant="secondary" size="sm">
              <Icon name="lucide:arrow-left" class="w-4 h-4" />
              {{ t('about.back') }}
            </UIButton>
          </div>
        </div>
      </div>
    </section>
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
  </div>
</template>
