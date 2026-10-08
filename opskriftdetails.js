const id = new URLSearchParams(window.location.search).get("id");

const endpoint = `https://dummyjson.com/recipes/${id}`;

const produkt = document.querySelector("#produkt");

const tilbageknap = document.querySelector("#tilbageknap");
tilbageknap.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(element) {
  //console.log(element);
  const prepTimeTotal = (element.prepTimeMinutes ?? 0) + (element.cookTimeMinutes ?? 0);
  produkt.innerHTML = `<a href=productdetails.html?id=${element.id}></a>
        <article class="detailview">
        <section class="Overst-sektion">
        <div>
        <img src=https://cdn.dummyjson.com/recipe-images/${element.id}.webp alt="produktbillede" />
        </div>
        <div>
            <h1>${element.name}</h1>
            <p> <img src="img/person.webp" alt="person" /> ${element.servings}. Personer</p>
            <p> <img src="img/clock.webp" alt="ur" />${prepTimeTotal}. min</p>
            <p> <img src="img/money.webp" alt="penge" /> 20 kr. pr. person</p>
            <p>${element.caloriesPerServing} Kalorier pr. servering</p>
            </div>
            </section>
             <section class="nederst-sektion">
             <div>
            <h2>Ingredienser:</h2>
            <ul>${element.ingredients.forEach((elm) => {
              console.log(elm);
              `<li>${elm}</li>`;
            })}</ul>
            </div>
            <div id="indgredienser">
            <h2>Fremgangsmåde:</h2>
            <ul>${element.instructions.forEach((elm) => {
              `<li>${elm}</li>`;
            })}</ul>
            </div>
             </section>
        </article>
        `;
}
