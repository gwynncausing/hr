<script lang="ts" setup></script>

<template>
  <div class="flex h-screen">
    <div class="w-1/2 bg-[url('/img/cover.jpg')] bg-cover bg-center hidden sm:block">
      <div class="h-screen bg-green-400 mix-blend-multiply">

      </div>
    </div>
    <div class="w-full sm:w-1/2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
