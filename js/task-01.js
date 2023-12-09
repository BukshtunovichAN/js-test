const navEl = document.querySelector("#categories");

const navItem = document.querySelectorAll(".item");
console.log("Number of categories:", navItem.length);

navItem.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
