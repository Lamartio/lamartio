<script setup lang="ts">
const skills = [
  { label: 'Kotlin', icon: 'i-simple-icons-kotlin' },
  { label: 'Swift', icon: 'i-simple-icons-swift' },
  { label: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { label: 'Android', icon: 'i-simple-icons-android' },
  { label: 'iOS', icon: 'i-simple-icons-apple' },
  { label: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs' },
  { label: 'Next.js', icon: 'i-simple-icons-nextdotjs' },
  { label: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  { label: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <UPageHero
      :ui="{
        root: 'py-24 sm:py-32 lg:py-40',
        title: 'font-mono tracking-tight',
        description: 'max-w-2xl text-lg leading-relaxed'
      }"
    >
      <template #headline>
        <UBadge
          variant="subtle"
          size="md"
          class="font-mono"
        >
          <span class="i-lucide-terminal mr-1.5 size-3" />
          available for work
        </UBadge>
      </template>

      <template #title>
        <span class="text-muted">Hello, I'm </span>
        <span class="text-primary">Danny Lamarti</span>
      </template>

      <template #description>
        Freelance senior software engineer specializing in client-facing technologies.
        Mobile (Android &amp; iOS) and web (Nuxt, Next) — with Kotlin, Swift, and TypeScript.
      </template>

      <template #links>
        <UButton
          to="mailto:lamarti.danny@gmail.com"
          label="Get in touch"
          trailing-icon="i-lucide-arrow-right"
          size="xl"
        />
        <UButton
          to="/about"
          label="About me"
          icon="i-lucide-user"
          size="xl"
          color="neutral"
          variant="subtle"
        />
      </template>
    </UPageHero>

    <!-- Tech Stack -->
    <UPageSection
      headline="Tech Stack"
      title="Tools I work with"
      description="Technologies I use daily to build mobile and web applications."
      :ui="{
        title: 'font-mono tracking-tight',
        headline: 'font-mono'
      }"
    >
      <div class="flex flex-wrap justify-center gap-3">
        <UBadge
          v-for="skill in skills"
          :key="skill.label"
          :icon="skill.icon"
          :label="skill.label"
          variant="subtle"
          color="neutral"
          size="lg"
          class="font-mono"
        />
      </div>
    </UPageSection>

    <!-- CTA -->
    <UPageSection>
      <UPageCTA
        title="Let's work together"
        description="Looking for a senior engineer to build your next mobile or web app? Let's talk."
        variant="subtle"
        :ui="{
          title: 'font-mono tracking-tight'
        }"
        :links="[
          {
            label: 'Get in touch',
            to: 'mailto:lamarti.danny@gmail.com',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'primary' as const
          },
          {
            label: 'View on GitHub',
            to: 'https://github.com/Lamartio',
            target: '_blank',
            icon: 'i-simple-icons-github',
            color: 'neutral' as const,
            variant: 'ghost' as const
          }
        ]"
      />
    </UPageSection>
  </div>
</template>
