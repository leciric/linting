<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'GitHub', path: '/github' },
]

const isActive = (path: string) => route.path === path
</script>

<template>
  <header 
    class="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
    role="banner"
  >
    <nav 
      class="max-w-5xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between"
      role="navigation"
      aria-label="Main navigation"
    >
      <!-- Logo -->
      <NuxtLink 
        to="/" 
        class="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 hover:opacity-80 transition-opacity"
        aria-label="linting - Home"
      >
        linting
      </NuxtLink>

      <!-- Navigation -->
      <div class="flex items-center gap-3 sm:gap-6" role="menubar">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm font-medium transition-colors px-2 py-1"
          :class="[
            isActive(link.path)
              ? 'text-primary-600 dark:text-primary-400'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
          ]"
          role="menuitem"
          :aria-current="isActive(link.path) ? 'page' : undefined"
        >
          {{ link.name }}
        </NuxtLink>

        <!-- Theme Toggle -->
        <UIThemeToggle />
      </div>
    </nav>
  </header>
</template>
