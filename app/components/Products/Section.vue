<script setup lang="ts">
import { hatchMcpCommand, products } from '~/data/company'

const { t, tm, rt } = useI18n()

const points = (id: string) => (tm(`products.${id}.points`) as unknown[]).map(p => rt(p as Parameters<typeof rt>[0]))
</script>

<template>
  <section id="products" class="section-container scroll-mt-20">
    <UISectionTitle
      :eyebrow="t('products.eyebrow')"
      :title="t('products.title')"
      :subtitle="t('products.subtitle')"
    />

    <div class="space-y-5 sm:space-y-6">
      <article
        v-for="(product, index) in products"
        :key="product.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="card overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch"
      >
        <!-- Text -->
        <div class="p-6 sm:p-10 flex flex-col" :class="index % 2 === 1 && 'lg:order-2'">
          <div class="flex items-center gap-3 mb-6">
            <img :src="product.logo" alt="" width="44" height="44" class="w-11 h-11 rounded-xl">
            <h3 class="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">{{ product.name }}</h3>
          </div>
          <p class="text-xl sm:text-2xl leading-snug text-stone-800 dark:text-stone-200 mb-4 accent-serif">
            {{ t(`products.${product.id}.tagline`) }}
          </p>
          <p class="text-sm sm:text-base text-stone-600 dark:text-stone-400 mb-5 leading-relaxed">
            {{ t(`products.${product.id}.description`) }}
          </p>
          <ul class="space-y-2 mb-6 text-sm text-stone-700 dark:text-stone-300">
            <li v-for="point in points(product.id)" :key="point" class="flex gap-2.5">
              <Icon name="lucide:check" class="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
              {{ point }}
            </li>
          </ul>
          <div class="flex flex-wrap gap-1.5 mb-8">
            <span v-for="tag in product.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>
          <div class="mt-auto flex flex-wrap gap-3">
            <UIButton :href="product.websiteUrl" external variant="primary" size="sm">
              {{ t('products.website') }}
              <Icon name="lucide:arrow-up-right" class="w-4 h-4" />
            </UIButton>
            <UIButton :href="product.githubUrl" external variant="secondary" size="sm">
              <Icon name="lucide:github" class="w-4 h-4" />
              {{ t('products.source') }}
            </UIButton>
          </div>
        </div>

        <!-- Visual -->
        <div
          class="relative flex items-center p-5 sm:p-8 lg:p-10 bg-stone-900/[0.03] dark:bg-white/[0.02] border-t lg:border-t-0 border-stone-900/10 dark:border-white/10 overflow-hidden"
          :class="index % 2 === 1 ? 'lg:order-1 lg:border-r' : 'lg:border-l'"
        >
          <div
            class="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
            aria-hidden="true"
          />
          <a
            v-if="product.id === 'agentbox'"
            :href="product.websiteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="relative block w-full rounded-xl overflow-hidden border border-stone-900/10 dark:border-white/10 bg-ink shadow-2xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300"
          >
            <div class="flex items-center gap-1.5 px-3 h-7 bg-stone-900 border-b border-white/10">
              <span class="w-2 h-2 rounded-full bg-white/20" />
              <span class="w-2 h-2 rounded-full bg-white/20" />
              <span class="w-2 h-2 rounded-full bg-white/20" />
            </div>
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
            class="relative w-full rounded-xl overflow-hidden border border-white/10 bg-ink text-stone-100 shadow-2xl shadow-black/20 font-mono text-[11px] xs:text-xs sm:text-[13px]"
          >
            <div class="flex items-center gap-1.5 px-3 h-7 bg-stone-900 border-b border-white/10">
              <span class="w-2 h-2 rounded-full bg-white/20" />
              <span class="w-2 h-2 rounded-full bg-white/20" />
              <span class="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div class="p-5 sm:p-6 leading-relaxed">
              <p class="text-stone-500 mb-2"># {{ t('products.hatch.snippetCaption') }}</p>
              <p class="whitespace-pre-wrap"><span class="text-primary-400">$</span> {{ hatchMcpCommand[0] }} \<br><span class="pl-4 break-all">{{ hatchMcpCommand[1] }}</span></p>
              <div class="mt-6 flex items-center gap-3 rounded-lg bg-white/[0.04] border border-white/10 p-3">
                <img :src="product.logo" alt="" width="28" height="28" class="w-7 h-7 rounded-md">
                <span class="text-stone-300">publish_page · update_page · set_visibility</span>
              </div>
            </div>
          </figure>
        </div>
      </article>
    </div>
  </section>
</template>
