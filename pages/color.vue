<template>
  <div>
    <h1>Color mode: {{ $colorMode.preference }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'user'
})
const colorMode = useColorMode()
console.log("🚀 ~ colorMode:", colorMode)

console.log(colorMode.preference)
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
html.dark body {
  background-color: #091a28;
  color: #ebf4f1;
}
html.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>