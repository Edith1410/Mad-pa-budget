const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://dummyjson.com/recipes`;

const catListeContainer = document.querySelector("#catListeContainer");

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    catListeContainer.innerHTML += `
   <a href=productlist.html?cat=${encodeURI(element.mealType)}>${element.mealType}</a>
 `;
  });
}

const opskrifter = document.querySelector(".propulæreopskrifter");

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    visData(data.recipes);
  });

function visData(recipes) {
  propulæreopskrifter.innerHTML = "";

  recipes.slice(0, 3).forEach((element) => {
    propulæreopskrifter.innerHTML += `
      <a href="opskriftdetails.html?id=${element.id}">
        <section class="opskrift">
          <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" alt="opskriftbillede" />
          <h2>${element.name.toUpperCase()}</h2>
          <button>se opskrift --></button>
        </section>
      </a>
    `;
  });
}
