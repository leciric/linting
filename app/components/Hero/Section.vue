<script setup lang="ts">
</script>

<template>
  <section class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex items-center">
    <div class="w-full max-w-5xl mx-auto">
      <div class="max-w-3xl">
        <!-- Greeting -->
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-primary-600 dark:text-primary-400 font-medium mb-2 sm:mb-4 text-base sm:text-lg"
        >
          Hi, my name is
        </p>

        <!-- Name -->
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 sm:mb-4 leading-tight"
        >
          Leandro Ciric
        </h1>

        <!-- Role -->
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6"
        >
          Full-stack Developer
        </h2>

        <!-- Description -->
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mb-3 sm:mb-4 leading-relaxed"
        >
          I build high-quality software solutions and mobile applications. 
          Passionate about creating elegant, efficient, and user-friendly digital experiences.
        </p>

        <!-- Origin Story -->
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 max-w-xl mb-6 sm:mb-8 leading-relaxed italic"
        >
          Known as "lint" before programming, when I started coding I named my company "linting".
        </p>

        <!-- CTA Buttons -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
          class="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <UIButton href="#projects" variant="primary" size="lg" class="w-full sm:w-auto justify-center">
            View My Work
            <Icon name="lucide:arrow-down" class="w-5 h-5" />
          </UIButton>
          <UIButton href="#contact" variant="outline" size="lg" class="w-full sm:w-auto justify-center">
            Get In Touch
          </UIButton>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 800 } }"
        class="hidden md:flex justify-center mt-12 lg:mt-16 animate-bounce"
      >
        <a href="#experience" class="text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <Icon name="lucide:chevrons-down" class="w-8 h-8" />
        </a>
      </div>
    </div>
  </section>
</template>
