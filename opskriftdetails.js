const id = new URLSearchParams(window.location.search).get("id");

const endpoint = `https://dummyjson.com/recipes/${id}`;

const produkt = document.querySelector("#produkt");

const tilbageknap = document.querySelector("#tilbageknap");
tilbageknap.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  let iList = "";
  json.ingredients.forEach((element) => {
    iList += `<li>${element}</li>`;
  });
  let fList = "";
  json.instructions.forEach((element) => {
    fList += `<li>${element}</li>`;
  });
  const prepTimeTotal = (json.prepTimeMinutes ?? 0) + (json.cookTimeMinutes ?? 0);
  produkt.innerHTML = `<a href=productdetails.html?id=${json.id}></a>
        <article class="detailview">
        <section class="Overst-sektion">
        <div>
        <img src=https://cdn.dummyjson.com/recipe-images/${json.id}.webp alt="produktbillede" />
        </div>
        <div>
            <h1>${json.name}</h1>
            <p> <img src="img/person.webp" alt="person" /> ${json.servings}. Personer</p>
            <p> <img src="img/clock.webp" alt="ur" />${prepTimeTotal}. min</p>
            <p> <img src="img/money.webp" alt="penge" /> 20 kr. pr. person</p>
            <p>${json.caloriesPerServing} Kalorier pr. servering</p>
            </div>
            </section>
             <section class="nederst-sektion">
             <div>
            <h2>Ingredienser:</h2>
            <ul>${iList}</ul>
            </div>
            <div id="indgredienser">
            <h2>Fremgangsmåde:</h2>
            <ol>${fList}</ol>
            </div>
             </section>
        </article>
        `;
}
