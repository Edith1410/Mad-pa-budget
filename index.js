const endpoint = `https://dummyjson.com/recipes`;

const catListeContainer = document.querySelector("#catListeContainer");
const propulæreOpskrifter = document.querySelector("#propulære-opskrifter");

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    catListeContainer.innerHTML += `
     <a href=madliste.html?cat=${encodeURI(element.mealType)}>${element.mealType}</a>
   `;
  });
}

// propulæreOpskrifter.innerHTML = json.recipes
//   .map(
//     (element) => `
//     <a href=opskriftdetails.html?id=${element.id}>
//     <section class="opskrift">
//       <img src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" />
//       <h3>${element.name}</h3>
//       <button> se opskrift -- </button>
//     </section>
//      </a>
//   `,
//   )
//   .join("");
