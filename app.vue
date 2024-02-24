<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Time Tracking Tool - Gwynn Causing',
  author: 'Gwynn Causing',
  description: 'Track your time efficiently with our time tracking tool. Manage projects, tasks, and productivity seamlessly.',
  
  ogTitle: 'Time Tracking Tool - Gwynn Causing',
  ogDescription: 'Track your time efficiently with our time tracking tool. Manage projects, tasks, and productivity seamlessly.',
  ogUrl: 'https://hr.gwynncausing.com/',
  ogImage: 'https://res.cloudinary.com/gwynncausing/image/upload/v1708734894/hr-cover.webp',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Time Tracking Tool - Gwynn Causing',
  twitterDescription: 'summary_large_image',
  twitterImage: 'https://res.cloudinary.com/gwynncausing/image/upload/v1708734894/hr-cover.webp',
})

useHead({
  meta: [
    { name: 'gwynncausing:tags', content: 'nuxt, vue, scss, tailwind, pinia, ssr' },
    { name: 'gwynncausing:github', content: 'https://github.com/gwynncausing/hr' },
  ],

})
</script>