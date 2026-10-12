<script setup lang="ts">
import { hatchMcpCommand, products } from '~/data/company'

const { t, tm, rt } = useI18n()

const points = (id: string) => (tm(`products.${id}.points`) as unknown[]).map(p => rt(p as Parameters<typeof rt>[0]))
</script>

<template>
  <section id="products" class="section-container scroll-mt-16 bg-zinc-100/50 dark:bg-zinc-900/50 max-w-none">
    <div class="max-w-5xl mx-auto">
      <UISectionTitle
        :title="t('products.title')"
        :subtitle="t('products.subtitle')"
      />

      <div class="space-y-6 sm:space-y-10">
        <article
          v-for="(product, index) in products"
          :key="product.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center bg-white dark:bg-zinc-950 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-zinc-200 dark:border-zinc-800"
        >
          <!-- Text -->
          <div :class="index % 2 === 1 && 'lg:order-2'">
            <div class="flex items-center gap-3 mb-4">
              <img :src="product.logo" :alt="''" width="44" height="44" class="w-11 h-11 rounded-xl">
              <h3 class="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">{{ product.name }}</h3>
            </div>
            <p class="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3">
              {{ t(`products.${product.id}.tagline`) }}
            </p>
            <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              {{ t(`products.${product.id}.description`) }}
            </p>
            <ul class="space-y-2 mb-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li v-for="point in points(product.id)" :key="point" class="flex gap-2">
                <Icon name="lucide:check" class="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                {{ point }}
              </li>
            </ul>
            <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
              <span
                v-for="tag in product.tags"
                :key="tag"
                class="px-2 py-0.5 sm:py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex flex-wrap gap-3">
              <UIButton :href="product.websiteUrl" external variant="primary" size="sm">
                <Icon name="lucide:external-link" class="w-4 h-4" />
                {{ t('products.website') }}
              </UIButton>
              <UIButton :href="product.githubUrl" external variant="secondary" size="sm">
                <Icon name="lucide:github" class="w-4 h-4" />
                {{ t('products.source') }}
              </UIButton>
            </div>
          </div>

          <!-- Visual -->
          <div :class="index % 2 === 1 && 'lg:order-1'">
            <a
              v-if="product.id === 'agentbox'"
              :href="product.websiteUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="block rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-primary-600/10 hover:shadow-primary-600/20 transition-shadow"
            >
              <img
                src="/images/products/agentbox-lead-chat.png"
                :alt="t('products.agentbox.imageAlt')"
                width="1440"
                height="960"
                loading="lazy"
                class="w-full h-auto"
              >
            </a>
            <figure
              v-else
              class="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-xl shadow-primary-600/10"
            >
              <div class="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800">
                <span class="w-3 h-3 rounded-full bg-red-500/80" />
                <span class="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span class="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div class="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
                <p class="text-zinc-500 mb-2"># {{ t('products.hatch.snippetCaption') }}</p>
                <p class="break-all"><span class="text-primary-400">$</span> {{ hatchMcpCommand }}</p>
                <div class="mt-6 flex items-center gap-3 rounded-md bg-zinc-900 border border-zinc-800 p-3">
                  <img :src="product.logo" alt="" width="28" height="28" class="w-7 h-7 rounded-md">
                  <span class="text-zinc-300">publish_page · update_page · set_visibility</span>
                </div>
              </div>
            </figure>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
