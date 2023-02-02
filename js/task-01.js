const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);

const items = document.querySelectorAll('.item');

items.forEach(element => {
  const title = element.firstElementChild;
  const itemList = element.lastElementChild;
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${itemList.children.length}`);
  console.log('-----------------------');
});




