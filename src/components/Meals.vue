<template>
  <div class="row mt-4">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <h6 v-if="!meals.length" class="text-center">There are no meals 😥</h6>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
