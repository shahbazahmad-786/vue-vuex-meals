<template>
  <Heading>
    <template #heading>Meals By Letter</template>
    <template #content>
      <div class="row">
        <div class="col-6 m-auto d-flex justify-content-between">
          <router-link
            class="text-decoration-none text-dark"
            :to="{ name: 'ByLetter', params: { letter } }"
            v-for="letter in letters"
            :key="letter">
            {{ letter }}
          </router-link>
        </div>
      </div>
      <Meals :meals="meals" />
    </template>
  </Heading>
</template>

<script setup>
import { onMounted, watch, computed } from "vue";
import Heading from "../components/Heading.vue";
import Meals from "../components/Meals.vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style scoped>
a:hover {
  color: rgb(255, 115, 0) !important;
  transform: scale(1.5);
}
</style>
