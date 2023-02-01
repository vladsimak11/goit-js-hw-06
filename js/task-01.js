const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);

const items = document.querySelectorAll('.item');

items.forEach(element => {
  const title = element.querySelector('h2');
  const itemList = element.querySelector('ul');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${itemList.children.length}`);
  console.log('-----------------------');
});




