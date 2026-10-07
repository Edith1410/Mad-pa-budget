const endpoint = `https://dummyjson.com/recipes`;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  opskrifter.innerHTML = `
    <section class="opskrifter">
    <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp"/>
    <h3>${element.name}</h3>
    <p>${element.cuisine}</p>
    </section>
    `;
}
