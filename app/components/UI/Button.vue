<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  external: false,
})

const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 gap-2 active:scale-[0.98]'

const variantClasses = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-[0_0_0_1px_rgb(0_0_0/0.04),0_10px_30px_-10px_rgb(229_83_47/0.6)]',
  secondary: 'bg-stone-900/5 dark:bg-white/[0.06] hover:bg-stone-900/10 dark:hover:bg-white/10 text-stone-900 dark:text-stone-100 border border-stone-900/10 dark:border-white/10',
  outline: 'border border-stone-900/20 dark:border-white/20 text-stone-900 dark:text-stone-100 hover:border-stone-900/40 dark:hover:border-white/40 hover:bg-stone-900/5 dark:hover:bg-white/5',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2',
  md: 'px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base',
  lg: 'px-6 py-3 text-base sm:px-7 sm:py-3.5',
}

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
])
</script>

<template>
  <NuxtLink
    v-if="href && !external"
    :to="href"
    :class="classes"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href && external"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="classes"
  >
    <slot />
  </a>
  <button
    v-else
    :class="classes"
  >
    <slot />
  </button>
</template>
