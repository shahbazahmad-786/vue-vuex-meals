<template>
  <div class="col-md-4">
    <div class="card">
      <router-link :to="{ name: 'MealDetails', params: { id: meal.idMeal } }">
        <img class="card-img-top" :src="meal.strMealThumb" :alt="meal.strMeal" />
      </router-link>
      <div class="card-body">
        <h4 class="card-title">{{ meal.strMeal }}</h4>
        <p class="card-text">{{ $filters.truncateWords(meal.strInstructions, 20) }}</p>
        <PrimaryBtn text="YouTube" :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PrimaryBtn from "./PrimaryBtn.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
