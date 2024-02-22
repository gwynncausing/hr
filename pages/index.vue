<template>
  <div>
    <component :is="activeComponent"/>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore();
let activeComponent = resolveComponent('Login')

if (userStore.getIsLoggedIn) {
  activeComponent = resolveComponent('Dashboard');
} 
</script>
