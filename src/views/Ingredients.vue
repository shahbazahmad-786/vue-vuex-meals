<template>
  <Heading>
    <template #heading>Ingredients</template>
    <template #content>
      <div class="row">
        <div class="col-12">
          <input v-model="keyword" type="text" placeholder="Search for Meals" class="w-100 p-2" />
        </div>
      </div>
      <div class="row mt-3">
        <a
          href="#"
          @click.prevent="openIngredient(ingredient)"
          v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient"
          class="col-md-6 text-dark text-decoration-none">
          <h3 class="box">{{ ingredient.strIngredient }}</h3>
        </a>
      </div>
    </template>
  </Heading>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Heading from "../components/Heading.vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

const openIngredient = (ingredient) => {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "ByIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
};

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style scoped>
input {
  outline-color: grey;
  outline-width: 5em;
}
input:focus {
  outline-color: rgb(255, 115, 0) !important;
}

.box {
  background-color: #ffffff;
  padding: 0.8rem;
  border-radius: 0.3rem;
  box-shadow: 3px 2px 6px 0px grey;
}
</style>
