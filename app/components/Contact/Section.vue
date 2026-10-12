<script setup lang="ts">
import { company, contactLinks, mailtoUrl, whatsappUrl } from '~/data/company'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section-container scroll-mt-20 !pt-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="relative overflow-hidden rounded-3xl bg-primary-600 text-white px-6 py-12 sm:px-14 sm:py-16"
    >
      <!-- Squiggle that straightens, echoing the logo -->
      <svg
        class="pointer-events-none absolute -right-10 -bottom-6 w-[520px] max-w-[90%] text-white/10"
        viewBox="0 0 520 120"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 60c20-40 40-40 60 0s40 40 60 0 40-40 60 0 40 40 60 0H516" stroke="currentColor" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <div class="relative max-w-3xl">
        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-white/70 mb-4">{{ t('contact.eyebrow') }}</p>
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] mb-5 text-balance">
          {{ t('contact.title') }}
        </h2>
        <p class="text-base sm:text-lg text-white/85 max-w-xl mb-9">
          {{ t('contact.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-3">
          <a
            :href="whatsappUrl(t('contact.whatsappMessage'))"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold rounded-xl bg-ink text-white hover:bg-stone-900 transition-all active:scale-[0.98]"
          >
            <Icon name="logos:whatsapp-icon" class="w-5 h-5" />
            {{ t('contact.whatsapp') }}
          </a>
          <a
            :href="mailtoUrl(t('contact.emailSubject'))"
            class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold rounded-xl border-2 border-white/80 hover:bg-white/10 transition-all active:scale-[0.98]"
          >
            <Icon name="lucide:mail" class="w-5 h-5" />
            {{ t('contact.email') }}
          </a>
        </div>

        <dl class="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 font-mono text-sm">
          <div>
            <dt class="text-white/65 text-xs uppercase tracking-wider">WhatsApp</dt>
            <dd><a :href="whatsappUrl(t('contact.whatsappMessage'))" target="_blank" rel="noopener noreferrer" class="hover:underline">{{ company.whatsappDisplay }}</a></dd>
          </div>
          <div>
            <dt class="text-white/65 text-xs uppercase tracking-wider">E-mail</dt>
            <dd><a :href="mailtoUrl(t('contact.emailSubject'))" class="hover:underline break-all">{{ company.email }}</a></dd>
          </div>
        </dl>

        <div class="mt-8 pt-6 border-t border-white/25 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span class="text-white/70">{{ t('contact.elsewhere') }}</span>
          <a
            v-for="link in contactLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-medium hover:underline"
          >
            <Icon :name="link.icon" class="w-4 h-4" />
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
