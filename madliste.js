const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://dummyjson.com/recipes`;

const opskrifter = document.querySelector(".opskrifter");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  opskrifter.innerHTML = json.recipes
    .map(
      (element) => `
      <section class="opskrift">
        <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" />
        <h3>${element.name}</h3>
        <p>${element.cuisine}</p>
      </section>
    `,
    )
    .join("");
}

getData();
