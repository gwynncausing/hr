<template>
    <nav class="flex justify-between items-center bg-green-200 py-2 px-4">
      <NuxtLink to="/">HR</NuxtLink>
      <div class="flex items-center gap-4">
        <ul>
          <li>
            <NuxtLink to="/">Calendar</NuxtLink>
          </li>
        </ul>
        <ClientOnly>
          <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-end' }">
            <UButton label="Profile" trailing-icon="i-heroicons-chevron-down-20-solid">
              <template #leading>
                <UAvatar
                  src="https://avatars.githubusercontent.com/u/739984?v=4"
                  size="3xs"
                />
              </template>
            </UButton>
          </UDropdown>
        </ClientOnly>
      </div>
    </nav>
  <div class="py-2 px-4">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const logout = () => {
  const userStore = useUserStore()
  userStore.updateState(false)
  const router = useRouter()
  router.go(0)
}
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-start-on-rectangle-20-solid',
    click: logout
  }],
]

const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<style lang="scss" scoped>
nav {
  min-height: 48px;
}
</style>