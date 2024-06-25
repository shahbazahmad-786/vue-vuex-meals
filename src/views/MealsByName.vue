<template>
  <Heading>
    <template #heading>Search Meals by Name</template>
    <template #content>
      <div class="row">
        <div class="col-12">
          <input
            type="text"
            v-model="keyword"
            @change="searchMeals"
            placeholder="Search for Meals"
            class="w-100 p-2" />
        </div>
      </div>
      <Meals :meals="meals" />
    </template>
  </Heading>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import Meals from "../components/Meals.vue";
import { ref, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
};

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
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
</style>
