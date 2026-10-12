<script setup lang="ts">
// A code editor in which a linter finds three problems and fixes them one by one, then starts over.
type Token = [kind: 'kw' | 'fn' | 'str' | 'num' | 'type' | 'op' | 'cm' | '', text: string]

interface Line {
  tokens: Token[]
  // The same line once its problem is fixed
  fixed?: Token[]
  problem?: { col: number, message: string, rule: string }
}

const lines: Line[] = [
  { tokens: [['kw', 'import'], ['', ' { db } '], ['kw', 'from'], ['', ' '], ['str', "'./db'"]] },
  { tokens: [] },
  {
    tokens: [['kw', 'export async function'], ['fn', ' checkout'], ['', '(cart) {']],
    fixed: [['kw', 'export async function'], ['fn', ' checkout'], ['', '(cart'], ['op', ': '], ['type', 'Cart'], ['', ') {']],
    problem: { col: 32, message: "'cart' has an implicit any type", rule: 'ts(7006)' },
  },
  {
    tokens: [['', '  '], ['kw', 'var'], ['', ' total = '], ['num', '0']],
    fixed: [['', '  '], ['kw', 'let'], ['', ' total = '], ['num', '0']],
    problem: { col: 3, message: 'Unexpected var, use let or const', rule: 'no-var' },
  },
  { tokens: [['', '  '], ['kw', 'for'], ['', ' ('], ['kw', 'const'], ['', ' i '], ['kw', 'of'], ['', ' cart.items) total += i.price']] },
  {
    tokens: [['', '  '], ['kw', 'if'], ['', ' (total '], ['op', '=='], ['', ' '], ['num', '0'], ['', ') '], ['kw', 'return'], ['', ' '], ['kw', 'null']],
    fixed: [['', '  '], ['kw', 'if'], ['', ' (total '], ['op', '==='], ['', ' '], ['num', '0'], ['', ') '], ['kw', 'return'], ['', ' '], ['kw', 'null']],
    problem: { col: 13, message: "Expected '===' and saw '=='", rule: 'eqeqeq' },
  },
  { tokens: [['', '  '], ['kw', 'return'], ['', ' db.orders.'], ['fn', 'create'], ['', '({ ...cart, total })']] },
  { tokens: [['', '}']] },
]

const problemLines = lines.flatMap((line, index) => (line.problem ? [index] : []))

const { t } = useI18n()

// How many problems are fixed so far
const fixedCount = ref(0)
const remaining = computed(() => problemLines.length - fixedCount.value)
const isFixed = (index: number) => problemLines.indexOf(index) !== -1 && problemLines.indexOf(index) < fixedCount.value

const tokenClass: Record<Token[0], string> = {
  kw: 'text-fuchsia-600 dark:text-fuchsia-300',
  fn: 'text-sky-600 dark:text-sky-300',
  str: 'text-amber-700 dark:text-amber-200',
  num: 'text-orange-600 dark:text-orange-300',
  type: 'text-teal-600 dark:text-teal-300',
  op: 'text-zinc-500',
  cm: 'text-zinc-400 italic',
  '': '',
}

let timer: ReturnType<typeof setTimeout> | undefined

const step = () => {
  if (fixedCount.value < problemLines.length) {
    fixedCount.value++
    timer = setTimeout(step, fixedCount.value < problemLines.length ? 1300 : 4200)
  }
  else {
    fixedCount.value = 0
    timer = setTimeout(step, 1800)
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fixedCount.value = problemLines.length
    return
  }
  timer = setTimeout(step, 1800)
})

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <div class="card overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/50 font-mono text-[10px] xs:text-xs sm:text-[13px]" aria-hidden="true">
    <!-- Title bar -->
    <div class="flex items-center gap-3 px-4 h-10 border-b border-zinc-900/10 dark:border-white/10">
      <div class="flex gap-1.5">
        <span class="w-2.5 h-2.5 rounded-full bg-zinc-900/15 dark:bg-white/15" />
        <span class="w-2.5 h-2.5 rounded-full bg-zinc-900/15 dark:bg-white/15" />
        <span class="w-2.5 h-2.5 rounded-full bg-zinc-900/15 dark:bg-white/15" />
      </div>
      <span class="px-2.5 py-1 rounded-md bg-zinc-900/5 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300">checkout.ts</span>
    </div>

    <!-- Code -->
    <div class="py-4 overflow-x-auto">
      <div v-for="(line, index) in lines" :key="index" class="flex leading-6 pr-4">
        <span class="w-7 sm:w-10 flex-shrink-0 pr-2 sm:pr-3 text-right select-none text-zinc-400 dark:text-zinc-600">{{ index + 1 }}</span>
        <span
          class="w-3 flex-shrink-0 flex items-center"
        >
          <span
            v-if="line.problem"
            class="w-1.5 h-1.5 rounded-full transition-colors duration-500"
            :class="isFixed(index) ? 'bg-emerald-500' : 'bg-red-500'"
          />
        </span>
        <code
          class="whitespace-pre text-zinc-800 dark:text-zinc-200"
          :class="line.problem && ['squiggle', isFixed(index) && 'squiggle-fixed']"
        ><span
          v-for="(token, ti) in (isFixed(index) && line.fixed ? line.fixed : line.tokens)"
          :key="ti"
          :class="tokenClass[token[0]]"
        >{{ token[1] }}</span></code>
      </div>
    </div>

    <!-- Problems panel -->
    <div class="border-t border-zinc-900/10 dark:border-white/10 px-4 py-3 space-y-1.5 bg-zinc-900/[0.02] dark:bg-white/[0.02]">
      <p class="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-2">{{ t('hero.editor.panel') }}</p>
      <div
        v-for="index in problemLines"
        :key="index"
        class="flex items-center gap-2 transition-opacity duration-500"
        :class="isFixed(index) && 'opacity-40'"
      >
        <Icon
          :name="isFixed(index) ? 'lucide:check' : 'lucide:circle-x'"
          class="w-3.5 h-3.5 flex-shrink-0"
          :class="isFixed(index) ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'"
        />
        <span class="truncate text-zinc-700 dark:text-zinc-300" :class="isFixed(index) && 'line-through'">{{ lines[index]!.problem!.message }}</span>
        <span class="ml-auto flex-shrink-0 text-zinc-400 dark:text-zinc-500">{{ lines[index]!.problem!.rule }} [{{ index + 1 }}:{{ lines[index]!.problem!.col }}]</span>
      </div>
    </div>

    <!-- Status bar -->
    <div
      class="flex items-center gap-2 px-4 h-9 text-[11px] sm:text-xs font-medium transition-colors duration-500"
      :class="remaining === 0 ? 'bg-emerald-500 text-white dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-zinc-900 text-zinc-100 dark:bg-white/10'"
    >
      <Icon :name="remaining === 0 ? 'lucide:check-circle-2' : 'lucide:loader-circle'" class="w-3.5 h-3.5" :class="remaining > 0 && 'animate-spin'" />
      <span>{{ t('hero.editor.problems', remaining) }}</span>
      <span v-if="remaining === 0" class="ml-auto">{{ t('hero.editor.ready') }}</span>
    </div>
  </div>
</template>
