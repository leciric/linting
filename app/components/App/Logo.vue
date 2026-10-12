<script setup lang="ts">
// Header and footer both render the logo, so its gradient ids must be unique
const id = useId()
</script>

<template>
  <span class="inline-flex items-center gap-2">
    <!-- The mark: a squiggle that straightens out, the way a lint fix does, in AgentBox's gradient -->
    <svg viewBox="0 0 32 32" class="w-7 h-7 flex-shrink-0" aria-hidden="true">
      <defs>
        <linearGradient :id="`${id}-bg`" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#a78bfa" />
          <stop offset="0.55" stop-color="#7c3aed" />
          <stop offset="1" stop-color="#4f46e5" />
        </linearGradient>
        <linearGradient :id="`${id}-shine`" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.28" />
          <stop offset="0.5" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" :fill="`url(#${id}-bg)`" />
      <rect width="32" height="32" rx="8" :fill="`url(#${id}-shine)`" />
      <path
        d="M6.5 16c1.2-2.6 2.4-2.6 3.6 0s2.4 2.6 3.6 0 2.4-2.6 3.6 0H25.5"
        fill="none"
        stroke="#ffffff"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">linting</span>
  </span>
</template>
