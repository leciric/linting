<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const navLinks = computed(() => [
  { name: t('nav.services'), to: { path: localePath('/'), hash: '#services' } },
  { name: t('nav.products'), to: { path: localePath('/'), hash: '#products' } },
  { name: t('nav.about'), to: localePath('/about') },
])
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
    role="banner"
  >
    <nav
      class="max-w-5xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between gap-2"
      role="navigation"
      :aria-label="t('nav.mainNav')"
    >
      <!-- Logo -->
      <NuxtLink
        :to="localePath('/')"
        class="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 hover:opacity-80 transition-opacity"
        :aria-label="t('nav.home')"
      >
        linting
      </NuxtLink>

      <!-- Navigation -->
      <div class="flex items-center gap-1.5 sm:gap-4">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.to"
          class="hidden md:inline-block text-sm font-medium transition-colors px-2 py-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          exact-active-class="!text-primary-600 dark:!text-primary-400"
        >
          {{ link.name }}
        </NuxtLink>

        <NuxtLink
          :to="{ path: localePath('/'), hash: '#contact' }"
          class="hidden xs:inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
        >
          {{ t('nav.contact') }}
        </NuxtLink>

        <UILanguageSwitch />

        <!-- Theme Toggle -->
        <UIThemeToggle />
      </div>
    </nav>
  </header>
</template>
