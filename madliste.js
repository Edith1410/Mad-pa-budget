const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://dummyjson.com/recipes`;

// const h2 = document.querySelector("h2");
// h2.textContent = cat;

const opskrifter = document.querySelector(".opskrifter");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  json.recipes.forEach((element) => {
    opskrifter.innerHTML += `
      <a href=opskriftdetails.html?id=${element.id}>
      <section class="opskrift">
        <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" />
        <h3>${element.name}</h3>
        <button> se opskrift -- </button>
      </section>
       </a>
    `;
  });
}
getData();
