<script setup lang="ts">
const skills = [
  { label: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  { label: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs' },
  { label: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { label: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss' },
  { label: 'Kotlin', icon: 'i-simple-icons-kotlin' },
  { label: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { label: 'Docker', icon: 'i-simple-icons-docker' },
  { label: 'Git', icon: 'i-simple-icons-git' }
]

const projects = [
  {
    title: 'Reactive Framework',
    description: 'A reactive state management library built with Kotlin Multiplatform, enabling shared business logic across Android, iOS, and web.',
    icon: 'i-lucide-layers',
    tags: ['Kotlin', 'Multiplatform', 'Reactive']
  },
  {
    title: 'Design System',
    description: 'Component library and design tokens powering consistent UI across multiple products. Built with Vue 3 and Tailwind CSS.',
    icon: 'i-lucide-palette',
    tags: ['Vue', 'Tailwind', 'Tokens']
  },
  {
    title: 'Developer Platform',
    description: 'Internal platform streamlining CI/CD pipelines, feature flags, and monitoring for engineering teams.',
    icon: 'i-lucide-terminal',
    tags: ['Nuxt', 'TypeScript', 'DevOps']
  }
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
        Software engineer crafting modern web experiences with Vue, Nuxt, and TypeScript.
        I build things that are fast, accessible, and a joy to use.
      </template>

      <template #links>
        <UButton
          to="/about"
          label="About me"
          trailing-icon="i-lucide-arrow-right"
          size="xl"
        />
        <UButton
          to="#work"
          label="View my work"
          icon="i-lucide-code-2"
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
      description="Technologies I use daily to build modern, performant applications."
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

    <!-- Featured Work -->
    <UPageSection
      id="work"
      headline="Featured Work"
      title="Things I've built"
      description="A selection of projects that showcase my approach to software engineering."
      :ui="{
        title: 'font-mono tracking-tight',
        headline: 'font-mono'
      }"
    >
      <UPageGrid>
        <UPageCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :icon="project.icon"
          variant="outline"
          spotlight
          spotlight-color="primary"
          :ui="{
            title: 'font-mono',
            description: 'leading-relaxed'
          }"
        >
          <template #footer>
            <div class="flex flex-wrap gap-1.5">
              <UBadge
                v-for="tag in project.tags"
                :key="tag"
                :label="tag"
                variant="subtle"
                size="sm"
                class="font-mono"
              />
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <!-- CTA -->
    <UPageSection>
      <UPageCTA
        title="Let's work together"
        description="I'm always interested in new opportunities, challenging projects, and great conversations about technology."
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
            to: 'https://github.com/niclamarti',
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
