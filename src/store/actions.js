import axiosClient from "../axiosClient";

const searchMeals = ({ commit }, keyword) => {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
};

const searchMealsByLetter = ({ commit }, letter) => {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
};

const searchMealsByIngredient = ({ commit }, ing) => {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredients", data.meals);
  });
};

export { searchMeals, searchMealsByLetter, searchMealsByIngredient };
