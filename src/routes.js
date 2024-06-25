import { createRouter, createWebHistory } from "vue-router";

const routes = [
  /* <=== Index Pages ===> */
  {
    path: "/",
    name: "IndexLayout",
    redirect: "/",
    component: () => import("./components/IndexLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue"),
      },

      {
        path: "/by-name/:name?",
        name: "ByName",
        component: () => import("./views/MealsByName.vue"),
      },
      {
        path: "/by-letter/:letter?",
        name: "ByLetter",
        component: () => import("./views/MealsByLetter.vue"),
      },
      {
        path: "/ingredients",
        name: "Ingredients",
        component: () => import("./views/Ingredients.vue"),
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "ByIngredient",
        component: () => import("./views/MealsByIngredient.vue"),
      },
      {
        path: "/meal/:id",
        name: "MealDetails",
        component: () => import("./views/MealDetails.vue"),
      },
    ],
  },

  /* <==> NotFound Page <==> */
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("./components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
