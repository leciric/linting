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

const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 gap-2 active:scale-[0.98]'

const variantClasses = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40',
  secondary: 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-zinc-900',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2',
  md: 'px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base',
  lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
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
