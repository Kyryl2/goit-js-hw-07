const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});

// for (let i = 0; i < allList.length; i++) {
//     console.log(`Text element:${categoriesList[i].firstElementChild.textContent}`);
//     console.log(`Total elements:${categoriesList[i].lastElementChild.children.length}`);
// }
