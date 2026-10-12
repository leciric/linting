<script setup lang="ts">
import { company } from '~/data/company'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/leciric', icon: 'lucide:github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leandrociric/', icon: 'lucide:linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/leciric/', icon: 'lucide:instagram' },
  { name: 'Email', url: `mailto:${company.email}`, icon: 'lucide:mail' },
]
</script>

<template>
  <footer class="relative mt-8 border-t border-zinc-900/10 dark:border-white/10 overflow-hidden">
    <div class="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <AppLogo />

        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">

          <!-- Social Links -->
          <div class="flex items-center gap-1">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-900/5 dark:hover:bg-white/5 transition-colors active:scale-95"
              :aria-label="link.name"
            >
              <Icon :name="link.icon" class="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>

      <!-- Wordmark -->
      <p
        class="mt-10 select-none text-center font-semibold tracking-[-0.06em] leading-[0.95] pb-[0.08em] text-[22vw] lg:text-[15rem] text-transparent bg-clip-text bg-gradient-to-b from-zinc-900/10 to-transparent dark:from-white/10"
        aria-hidden="true"
      >
        linting
      </p>

      <p class="mt-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
        &copy; {{ currentYear }} {{ company.name }}. {{ t('footer.rights') }}
      </p>
    </div>
  </footer>
</template>
