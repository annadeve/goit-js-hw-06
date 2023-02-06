const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li").length;
  console.log(`\nCategory: ${categoryName}\nElements: ${elements}`);
});
