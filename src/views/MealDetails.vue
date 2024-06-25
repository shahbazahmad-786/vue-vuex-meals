<template>
  <Heading>
    <template #heading>Meal Details</template>
    <template #content>
      <div class="row">
        <div class="col-md-6">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded" style="width: 100%" />
        </div>
        <div class="col-md-6">
          <h2>{{ meal.strMeal }}</h2>
          <hr />
          <div>
            <div>
              <strong class="text-orange">Category : </strong> <span>{{ meal.strCategory }}</span>
            </div>
            <div>
              <strong class="text-orange">Area : </strong> <span>{{ meal.strArea }}</span>
            </div>
            <div>
              <strong class="text-orange">Tags : </strong> <span>{{ meal.strTags }}</span>
            </div>
          </div>
          <hr />
          <div>
            <p>{{ meal.strInstructions }}</p>
          </div>
          <hr />
          <div class="py-2">
            <PrimaryBtn text="YouTube" :href="meal.strYoutube" class="me-2" />
            <SecondaryBtn text="View Original Source" :href="meal.strSource" />
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6">
              <h3>Ingredients</h3>
              <ul v-for="(el, index) of new Array(20)" :key="index" style="list-style-type: none">
                <li v-if="meal[`strIngredient${index + 1}`]">
                  {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <h3>Measures</h3>
              <ul v-for="(el, index) of new Array(20)" :key="index" style="list-style-type: none">
                <li v-if="meal[`strMeasure${index + 1}`]">
                  {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Heading>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axiosClient";
import Heading from "../components/Heading.vue";
import PrimaryBtn from "../components/PrimaryBtn.vue";
import SecondaryBtn from "../components/SecondaryBtn.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
