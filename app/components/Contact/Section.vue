<script setup lang="ts">
import { company, contactLinks, mailtoUrl, whatsappUrl } from '~/data/company'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section-container scroll-mt-16 mb-4 sm:mb-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-5 py-10 sm:px-12 sm:py-14 text-center text-white"
    >
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        {{ t('contact.title') }}
      </h2>
      <p class="text-base sm:text-lg text-primary-100 max-w-2xl mx-auto mb-8">
        {{ t('contact.subtitle') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <a
          :href="whatsappUrl(t('contact.whatsappMessage'))"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg bg-white text-primary-700 hover:bg-primary-50 shadow-lg transition-all active:scale-[0.98]"
        >
          <Icon name="logos:whatsapp-icon" class="w-5 h-5" />
          {{ t('contact.whatsapp') }}
        </a>
        <a
          :href="mailtoUrl(t('contact.emailSubject'))"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg border-2 border-white/70 hover:bg-white/10 transition-all active:scale-[0.98]"
        >
          <Icon name="lucide:mail" class="w-5 h-5" />
          {{ t('contact.email') }}
        </a>
      </div>
      <p class="mt-4 text-sm text-primary-100">{{ company.whatsappDisplay }} · {{ company.email }}</p>

      <div class="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
        <span class="text-primary-100">{{ t('contact.elsewhere') }}</span>
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
  </section>
</template>
