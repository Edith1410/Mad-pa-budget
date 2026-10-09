const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://dummyjson.com/recipes`;

// const h2 = document.querySelector("h2");
// h2.textContent = cat;

const opskrifter = document.querySelector(".opskrifter");

const visAntal = document.querySelector("#filtre span");

document.querySelectorAll("#filtre button").forEach((button) => button.addEventListener("click", filtrer));
let alleData, udsnit;

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    alleData = udsnit = data.recipes;
    visData(data);
  });

function filtrer(e) {
  valgt = e.target.textContent;
  if (valgt == "Alle") {
    udsnit = alleData;
  } else {
    udsnit = alleData.filter((element) => element.cuisine == valgt);
  }
  visData(udsnit);
}

function visData(data) {
  opskrifter.innerHTML = "";
  visAntal.textContent = data.length;
  data.forEach((element) => {
    opskrifter.innerHTML += `
      <a href=opskriftdetails.html?id=${element.id}>
      <section class="opskrift">
        <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" />
        <h2>${element.name.toUpperCase()}</h2>
        <button> se opskrift --> </button>
      </section>
       </a>
    `;
  });
}
