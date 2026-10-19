# Teknisk dokumentation – [mad på budget]

## Om projektet

Dette projekt er lavet som en del af Tema 8.
Vi har lavet et dynamisk website med HTML, CSS og JavaScript, hvor indholdet bliver hentet fra et DummyJSON API.

Sitet består af flere sider, hvor brugeren kan:

- se en liste med forskellige måltidstyper
- klikke sig videre til en liste med forskellige opskrifter under hver måltidtype
- klikke sig videre til en liste med en mere detaljeret opskrift
- bruge filtrering
- gemme opskrifter til sin profil

## Links

- GitHub repository: [[indsæt link](https://github.com/Edith1410/Mad-pa-budget)]
- GitHub Pages: [[indsæt link](https://edith1410.github.io/Mad-pa-budget/)]
- Figma: [[indsæt link](https://www.figma.com/design/EUio0eJVWS0AGvRWZKSjO3/Team-projekt?node-id=0-1&t=fJ4QqoJONgJI9D4o-1)]

---

## Projektstruktur

Projektet er opdelt i HTML, CSS og JavaScript-filer.

```
project/
├── index.html
├── madliste.html
├── opskriftdetatails.html
├── details.css
├── generel.css
├── index.js
├── madliste.js
├── opskriftdetails.js
├── fonts/
│   └──fonte
├── img/
│    └── billeder
└── README.md
```

### Filbeskrivelser

- **index.html** – forsiden
- **madliste.html** – viser en liste med opskrifter fra API'et
- **opskriftdetatails.html** – viser detaljer om en valgt opskrift
- **generel.css** – styrer designet generalt over alle sider
- **details.css** – styrer designet specifikt under hver opskrift
- **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider
- **Img-filer** – vores billede filer som logo, ikoner mm.
- **fonts-filer** – vores forskellige fonts hentet fra google fonts

---

## Hvordan koden fungerer

Vi har opdelt JavaScript, så hver side har sin egen fil og givet opskriftdetails sin egen css fil.

### index.js

Bruges på forsiden.
Her bliver indhold vist dynamisk, fx links eller kategorier.

### madliste.js

Henter data fra DummyJSON API'et og viser en liste med opskrifter på siden som kan filtreres for hvilket land opskriften kommer fra.

**Flow:**

1. Siden loader
2. JavaScript kører
3. Data hentes fra DummyJSON API
4. Data gemmes i alleData, og udsnit sættes til den fulde liste
5. Brugeren vælger et filter
6. HTML bliver indsat i DOM'en
7. Brugeren kan klikke på en opskrift

### opskriftdetatails.js

Bruges til detaljesiden. Den læser et id fra URL'en og henter derefter den rigtige opskrift fra DummyJSON API'et.

Det gør det muligt at genbruge den samme HTML-side til mange opskrifter. I stedet for at lave én side per opskrift, bruger vi ét id i URL'en til at vise det rigtige indhold.

---

## Navngivning

Vi har navngivet vores filer, variabler og funktioner så de så tydeligt som muligt er selvforklarende både i forhold til indhold og hvordan de forskellige filer hænger sammen.

### Eksempler på variabler

```javascript
const opskrifter;
const catListeContainer;
const tilbageknap;
```

### Eksempler på funktioner

```javascript
function (visData);
function filtrer(e);
function visData(recipes);
```

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

---

## Kommentarer i koden

Vi har kommenteret de steder i koden, hvor det giver mening.
Fx ved steder hvor det er rart at have en kort forklaring til fremtidig kodning

**Eksempel:**

```CSS
.nav-links {
    display: flex;
    justify-content: flex-end; /* Align everything to the right side */
  }
```

Vi har prøvet ikke at skrive kommentarer til helt åbenlyse ting, men kun dér hvor det hjælper forståelsen.

---

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud:**

```json
{
  "id": 1,
  "name": "Classic Margherita Pizza",
  "ingredients": ["Pizza dough", "Tomato sauce", "Fresh mozzarella cheese", "Fresh basil leaves", "Olive oil", "Salt and pepper to taste"],
  "instructions": [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
  ],
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 15,
  "servings": 4,
  "difficulty": "Easy",
  "cuisine": "Italian",
  "caloriesPerServing": 300,
  "tags": ["Pizza", "Italian"],
  "userId": 166,
  "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
  "rating": 4.6,
  "reviewCount": 98,
  "mealType": ["Dinner"]
}
```

### Felter vi bruger

- **id** – bruges til at sende brugeren videre til detaljesiden
- **name** – opskriftsnavn
- **ingredients** – indgredienser
- **instructions** – trin for trin guide
- **prepTimeMinutes + cookTimeMinutes** – tilberedningstid i totalt i minutter
- **servings** – antal portioner
- **image** – opskriftsbillede
- **mealType** – måltidstyper (aftensmad, frokost mm.)
- **caloriesPerServing** – Kalorier pr. servering
- **cuisine** – oprindelse

---

## Git og branches

Vi har brugt GitHub til at samarbejde om projektet.

Vi har arbejdet med branches, så vi ikke sad og ændrede i det samme på samme tid og så vi altid kunne gå tilbage til main branchen.

Vi navngav branchene med feature eller fokusset for ændringerne i denne branch.

### Eksempler på branches

- `opskrift-detaljer`
- `opskrifter`
- `forside`
- `design`
- `rapport`

### Workflow

1. Lave en branch med fokusset for den
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virkede

Det gjorde det nemmere at holde styr på, hvem der lavede hvad.

---

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved en enkel informationasarkitektur.

**Tiltag:**

- Ingen videoer
- Ingen tunge frameworks
- Genbruge af kode
- Optimerede billeder

---

## Udfordringer undervejs

En af vores udfordringer var at få data fra Rest API’et vist korrekt på siderne.
Det var svært at få forsiden til at virke når man ikke længere havde noget med kategorier men istedet for MealTypes.

**Løsninger:**

- Console.logge data undervejs
- Teste fetch-kald separat
- Bruge URLSearchParams

---

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Søgefunktion
- en profil hvor man kan gemme sine yndlingsopskrifter
- en knap på hver som viser om de fx. er vegetarisk eller hallal mm.

---

## Gruppemedlemmer

- Yasmina Awad
- Dania Sda
- Edith Obdrup
- Erica Thygesen
