<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/leciric', icon: 'lucide:github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leandrociric/', icon: 'lucide:linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/leciric/', icon: 'lucide:instagram' },
  { name: 'Email', url: 'mailto:leandro@linting.dev', icon: 'lucide:mail' },
]
</script>

<template>
  <footer class="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
    <div class="max-w-5xl mx-auto px-4 py-6 sm:py-8">
      <div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <!-- Copyright -->
        <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
          &copy; {{ currentYear }} Leandro Ciric. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex items-center gap-2 sm:gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 text-zinc-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors active:scale-95"
            :aria-label="link.name"
          >
            <Icon :name="link.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
