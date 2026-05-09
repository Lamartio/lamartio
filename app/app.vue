<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Danny Lamarti — Software Engineer'
const description = 'Software engineer crafting modern web experiences with Vue, Nuxt, and TypeScript.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <UApp>
    <UHeader title="lamartio">
      <template #title>
        <NuxtLink to="/" class="font-mono font-bold text-lg tracking-tight">
          lamartio
        </NuxtLink>
      </template>

      <template #default>
        <UNavigationMenu :items="navItems" />
      </template>

      <template #right>
        <UColorModeButton />
        <UButton
          to="https://github.com/niclamarti"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://linkedin.com/in/danny-lamarti"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="navItems" orientation="vertical" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          &copy; {{ new Date().getFullYear() }} Danny Lamarti. Built with Nuxt.
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/niclamarti"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://linkedin.com/in/danny-lamarti"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
