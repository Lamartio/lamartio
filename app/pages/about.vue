<script setup lang="ts">
useSeoMeta({
  title: 'About — Danny Lamarti',
  description: 'Freelance senior software engineer building client-facing mobile and web apps with Kotlin, Swift, and TypeScript.'
})

const experience = [
  {
    role: 'Freelance Senior Software Engineer',
    company: 'Self-employed',
    period: 'Present',
    description: 'Building client-facing mobile and web applications for companies across industries. Specializing in Android, iOS, and modern web frameworks.'
  },
  {
    role: 'Senior Software Engineer',
    company: 'Previous',
    period: 'Earlier',
    description: 'Developed cross-platform solutions with Kotlin Multiplatform. Built reactive frameworks and design systems used across multiple products.'
  }
]

const techStack = {
  Mobile: ['Kotlin', 'Swift', 'Android', 'iOS', 'Kotlin Multiplatform'],
  Web: ['TypeScript', 'Vue', 'Nuxt', 'Next.js', 'Tailwind CSS'],
  Tools: ['Git', 'Docker', 'Node.js', 'Vite'],
  Practices: ['Reactive Programming', 'Design Systems', 'CI/CD', 'Accessibility']
}

const socials = [
  { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/Lamartio' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://linkedin.com/in/danny-lamarti' },
  { label: 'Email', icon: 'i-lucide-mail', to: 'mailto:lamarti.danny@gmail.com' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <UPageHero
      :ui="{
        root: 'py-24 sm:py-32',
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
          /about
        </UBadge>
      </template>

      <template #title>
        About <span class="text-primary">me</span>
      </template>

      <template #description>
        Freelance senior software engineer specializing in client-facing technologies.
        I build mobile and web apps that users love — from native Android and iOS to modern web with Nuxt and Next.
      </template>
    </UPageHero>

    <!-- Experience -->
    <UPageSection
      headline="Experience"
      title="Where I've worked"
      :ui="{
        title: 'font-mono tracking-tight',
        headline: 'font-mono'
      }"
    >
      <div class="grid gap-6 max-w-3xl mx-auto">
        <UCard
          v-for="job in experience"
          :key="job.role"
          variant="outline"
          :ui="{ body: 'space-y-3' }"
        >
          <div class="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 class="font-mono font-semibold text-highlighted">
                {{ job.role }}
              </h3>
              <p class="text-sm text-muted font-mono">
                {{ job.company }}
              </p>
            </div>
            <UBadge
              variant="subtle"
              color="neutral"
              size="sm"
              class="font-mono"
            >
              {{ job.period }}
            </UBadge>
          </div>
          <p class="text-muted leading-relaxed">
            {{ job.description }}
          </p>
        </UCard>
      </div>
    </UPageSection>

    <!-- Tech Stack -->
    <UPageSection
      headline="Stack"
      title="Technologies I use"
      :ui="{
        title: 'font-mono tracking-tight',
        headline: 'font-mono'
      }"
    >
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(items, category) in techStack"
          :key="category"
        >
          <h3 class="font-mono font-semibold text-sm text-primary mb-3">
            {{ category }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="item in items"
              :key="item"
              class="text-sm text-muted font-mono"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </UPageSection>

    <!-- Contact -->
    <UPageSection>
      <UPageCTA
        title="Get in touch"
        description="Whether you have a project in mind, want to collaborate, or just want to say hello — I'd love to hear from you."
        variant="subtle"
        :ui="{ title: 'font-mono tracking-tight' }"
      >
        <template #links>
          <div class="flex flex-wrap gap-3 justify-center">
            <UButton
              v-for="social in socials"
              :key="social.label"
              :to="social.to"
              :icon="social.icon"
              :label="social.label"
              target="_blank"
              color="neutral"
              variant="subtle"
              size="lg"
              class="font-mono"
            />
          </div>
        </template>
      </UPageCTA>
    </UPageSection>
  </div>
</template>
