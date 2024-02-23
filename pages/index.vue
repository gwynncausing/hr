<template>
  <div>
    <component :is="activeComponent"/>
  </div>
</template>

<script setup lang="ts">
let activeComponent = resolveComponent('Login')
</script>
