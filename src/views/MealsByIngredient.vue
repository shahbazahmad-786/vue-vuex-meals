<template>
  <Heading>
    <template #heading>Meals for {{ ingredient.strIngredient }}</template>
    <template #content>
      <Meals :meals="meals" />
    </template>
  </Heading>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import Meals from "../components/Meals.vue";
import { onMounted, computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
