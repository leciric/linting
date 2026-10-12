<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const navLinks = computed(() => [
  { name: t('nav.services'), to: { path: localePath('/'), hash: '#services' } },
  { name: t('nav.products'), to: { path: localePath('/'), hash: '#products' } },
  { name: t('nav.about'), to: { path: localePath('/'), hash: '#founder' } },
])
</script>

<template>
  <header class="sticky top-0 z-50 px-3 sm:px-4 pt-3" role="banner">
    <nav
      class="max-w-[72rem] mx-auto h-14 pl-4 pr-2 flex items-center justify-between gap-2 rounded-2xl border border-stone-900/10 dark:border-white/10 bg-paper/75 dark:bg-ink/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0_0_0/0.06)] dark:shadow-[0_8px_30px_rgb(0_0_0/0.4)]"
      role="navigation"
      :aria-label="t('nav.mainNav')"
    >
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="hover:opacity-80 transition-opacity" :aria-label="t('nav.home')">
        <AppLogo />
      </NuxtLink>

      <!-- Navigation -->
      <div class="flex items-center gap-1.5 sm:gap-2">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.to"
          class="hidden md:inline-block text-sm font-medium transition-colors px-3 py-1.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-900/5 dark:hover:bg-white/5"
          exact-active-class="!text-stone-900 dark:!text-stone-100"
        >
          {{ link.name }}
        </NuxtLink>

        <UILanguageSwitch />

        <!-- Theme Toggle -->
        <UIThemeToggle />

        <NuxtLink
          :to="{ path: localePath('/'), hash: '#contact' }"
          class="hidden xs:inline-flex items-center gap-1.5 h-10 px-4 text-sm font-semibold rounded-xl bg-primary-600 hover:bg-primary-700 text-white transition-colors"
        >
          {{ t('nav.contact') }}
          <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
