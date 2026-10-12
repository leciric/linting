<script setup lang="ts">
const head = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: head.value.htmlAttrs,
  link: head.value.link,
  meta: head.value.meta,
}))
</script>

<template>
  <div class="relative min-h-screen flex flex-col isolate overflow-x-clip">
    <!-- Background -->
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[1100px] -z-10 bg-grid" aria-hidden="true" />
    <div class="pointer-events-none absolute left-1/2 top-[-280px] -z-10 h-[560px] w-[min(1100px,140vw)] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-400/30 via-indigo-400/20 to-transparent dark:from-primary-600/25 dark:via-indigo-600/15 blur-[120px]" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-0 -z-10 bg-grain" aria-hidden="true" />

    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
