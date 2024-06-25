<template>
  <a :href="href" target="_blank" class="p-2 bg-orange text-light text-decoration-none rounded">
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
  background-color: rgb(255, 139, 43) !important;
  border: 2px solid rgb(255, 139, 43) !important;
}
</style>
