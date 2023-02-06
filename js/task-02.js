const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElements = ingredients.map((ingredient) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.classList.add("item");
  return ingredientElement;
});

ingredientsList.append(...ingredientsElements);
