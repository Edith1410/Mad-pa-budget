const id = new URLSearchParams(window.location.search).get("id");

console.log("id");

const endpoint = `https://dummyjson.com/recipes/${id}`;

const produkt = document.querySelector("#produkt");

const tilbageknap = document.querySelector("#tilbageknap");
tilbageknap.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(element) {
  console.log(element);
  produkt.innerHTML = `<a href=productdetails.html?id=${element.id}>
        <article class="detailview">
        <img src=https://cdn.dummyjson.com/recipe-images/${element.id}.webp alt="produktbillede" />
            <h2>${element.name}</h2>
            <h3>${element.ingredients}</h3>
            <p>kr. ${element.instructions},-</p>
            <p>${element.difficulty}</p>
            <p>${element.cuisine}</p>
        </article>
        </a>`;
}
