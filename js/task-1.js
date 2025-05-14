
const li = document.querySelectorAll(".item");
const countEl = `Number of categories: ${li.length}`;

console.log(countEl);

const t = li.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
    
})


