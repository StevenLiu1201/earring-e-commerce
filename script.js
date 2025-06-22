function createMeal(imgPath,title, price, tags) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  

  const mealImg = document.createElement("img");
  mealImg.src = imgPath;
  mealImg.className = "meal-img";

  const mealContent = document.createElement("div");
  mealContent.className = "meal-content";

  if (tags && tags.length > 0) {
    const mealTags = document.createElement("div");
    mealTags.classList.add("meal-tags");
    tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.classList.add("tag","tag--"+tag);
      tagElement.textContent = tag;
      mealTags.appendChild(tagElement);
    });
    mealContent.appendChild(mealTags);
  }

  const titleElement = document.createElement("p");
  titleElement.classList.add("meal-title");
  titleElement.textContent = title;
  mealContent.appendChild(titleElement);

  const priceElement = document.createElement("p");
  priceElement.classList.add("meal-title");
  const priceIcon = document.createElement("ion-icon");
  priceIcon.classList.add("price-icon", "margin-right-sm");
  priceIcon.setAttribute("name", "pricetag-outline");
  priceElement.appendChild(priceIcon);

  const priceSpan = document.createElement("span");
  priceSpan.textContent = price.toFixed(2);
  priceElement.appendChild(priceSpan);
  mealContent.appendChild(priceElement);

  const addToCartLink = document.createElement("a");
  addToCartLink.href = "#";
  addToCartLink.classList.add("btn", "btn--outline", "btn-card");
  addToCartLink.textContent = "Add to Cart";
  mealContent.appendChild(addToCartLink);

  meal.append(mealImg,mealContent)

  return meal;
}

// Sample data
const meals = [
  {imgPath:"img/earings/crystal maple.jpg", title: "crystal maple", price: 15.99, tags: ["newArrive","stud"] },
  {imgPath:"img/earings/grey leaves-stud.jpg", title: "grey leaves", price: 18.99, tags: ["stud"] },
  {
    imgPath:"img/earings/cream donut-hoop.jpg",
    title: "cream donut",
    price: 18.99,
    tags: ["newArrive", "hoop"],
  },
  {imgPath:"img/earings/cream donut-hoop.jpg", title: "cream donut", price: 18.99, tags: ["newArrive","hoop"] },
  {imgPath:"img/earings/crystal flower-drop.jpg", title: "crystal flower", price: 18.99, tags: ["drop"] },
  {imgPath:"img/earings/long island-stud.jpg", title: "long island", price: 18.99, tags: ["newArrive","stud"] },
  {imgPath:"img/earings/double square-stud.jpg", title: "double square", price: 18.99, tags: ["newArrive","stud"] },
  {imgPath:"img/earings/flower in pearls-stud.jpg", title: "flower in pearls", price: 18.99, tags: ["stud"] },
  {imgPath:"img/earings/flying heart-dangle.jpg", title: "flying heart", price: 18.99, tags: ["dangle"] },
  {imgPath:"img/earings/in and out-drop.jpg", title: "in and out", price: 18.99, tags: ["drop"] },
  {imgPath:"img/earings/knot pearls-drop.jpg", title: "knot pearls", price: 18.99, tags: ["drop"] },
  {imgPath:"img/earings/Mermaid-dangle.jpg", title: "mermaid", price: 18.99, tags: ["dangle"] },
];

// Render meals
const mealContainer = document.getElementById("earringContainer");
meals.forEach((meal) => {
  const mealElement = createMeal(meal.imgPath,meal.title, meal.price, meal.tags);
  mealContainer.appendChild(mealElement);
});
