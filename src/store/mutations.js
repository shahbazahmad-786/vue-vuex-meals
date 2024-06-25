const setSearchedMeals = (state, meals) => {
  state.searchedMeals = meals || [];
};

const setMealsByLetter = (state, meals) => {
  state.mealsByLetter = meals || [];
};

const setMealsByIngredients = (state, meals) => {
  state.mealsByIngredient = meals || [];
};

const setIngredient = (state, ingredient) => {
  state.ingredient = ingredient;
};

export { setSearchedMeals, setMealsByLetter, setIngredient, setMealsByIngredients };
