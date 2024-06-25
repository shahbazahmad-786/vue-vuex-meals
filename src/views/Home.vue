<template>
  <Heading>
    <template #heading>Random Meals</template>
    <template #content>
      <Meals :meals="meals" />
    </template>
  </Heading>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Heading from "../components/Heading.vue";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient";
const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get(`random.php`).then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }
});
</script>
