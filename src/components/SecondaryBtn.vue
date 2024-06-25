<template>
  <a :href="href" target="_blank" class="p-2 text-orange text-decoration-none rounded">
    {{ text }}
  </a>
</template>

<script setup>
const props = defineProps(["text", "href"]);
</script>

<style scoped>
a {
  border: 2px solid rgb(255, 115, 0) !important;
}
a:hover {
  background-color: rgb(255, 115, 0) !important;
  color: #ffffff !important;
}
</style>
