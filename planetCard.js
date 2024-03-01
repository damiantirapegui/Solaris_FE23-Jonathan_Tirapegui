import { planets } from "./index.js";

// HÄR UPPDATERAR VI MIN OVERLAY. DEN FYLLER UT PLANETENS FÄRG I KORTET BASERAT PÅ VILKEN PLANET SOM VI KLICKAR PÅ SAMT ATT HÄR
// HÄMTAR VI OCKSÅ INFORMATION OM VARJE PLANET OCH FYLLER I TEXTEN I HTML DOKUMENTET
export function updatePlanetCard(planetData) {
  const planetCardBody = document.querySelector(".planet-card-body");
  const planetCard = document.querySelector(".planet-card");
  const cardTitle = document.getElementById("card-title");
  const undertitle = document.querySelector(".card-undertitle");
  const description = document.querySelector(".planet-description");
  const planetToCard = document.querySelector(".planet-to-card");

  const moonValue = document.querySelector(".category-value-moon");
  const omkretsValue = document.querySelector(".omkrets-value");
  const kmFromSun = document.querySelector(".km-value");
  const maxTempeture = document.querySelector(".max-temp-value");
  const minTempeture = document.querySelector(".min-temp-value");

  planetCardBody.style.display = "flex";

  cardTitle.textContent = planetData.name;
  undertitle.textContent = planetData.latinName;
  description.textContent = planetData.desc;
  kmFromSun.textContent = planetData.distance;
  maxTempeture.textContent = planetData.temp.day;
  minTempeture.textContent = planetData.temp.night;

  omkretsValue.textContent = planetData.circumference;

  document.body.addEventListener("mousedown", (event) => {
    if (!planetCard.contains(event.target))
      planetCardBody.style.display = "none";
  });

  const moonData = planetData.moons; // Antag att moonData är en array av månar
  // Särar på månarna då alla månar sitter annars i ihop. Ger ett mellan rum mellan varje måne
  const formattedMoons = moonData.join(", ");
  moonValue.textContent = formattedMoons;

  // För vajre planet lägg till respektive planetens färg i kortet
  planets.forEach((planet) => {
    if (planetData.name === planet.name) {
      planetToCard.style.backgroundColor = planet.color;
    }

    // Lägg till saturnus ring om användaren klickar på saturnus.
    if (planetData.name === "Saturnus") {
      planetToCard.classList.add("show-saturn-ring");
    } else {
      planetToCard.classList.remove("show-saturn-ring");
    }
  });
}
