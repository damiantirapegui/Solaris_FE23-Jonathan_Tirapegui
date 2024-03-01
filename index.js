// MIN MAIN FIL

import { fetchData } from "./fetch.js";
import { updatePlanetCard } from "./planetCard.js";
import { fillPlanetOptions, searchPlanetEnter } from "./searchPlanets.js";
// Summon my plantets
const sun = document.getElementById("sun");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const saturn = document.getElementById("saturn");

// Colors for my planets.
const sunColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--undertitleColor"
);

const saturnColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--saturnColor"
);
const mercuryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--mercuryColor");
const earthColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--earthColor"
);
const jupiterColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--jupiterColor");

const uranusColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--uranusColor"
);
const neptuneColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--neptuneColor");

const venusColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--venusColor"
);

const marsColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--marsColor"
);

export const planets = [
  {
    name: "Solen",
    element: sun,
    color: sunColor,
    size: { default: "800px" },
  },
  {
    name: "Merkurius",
    element: mercury,
    color: mercuryColor,
    size: { default: "14px", hover: "20px" },
  },
  {
    name: "Venus",
    element: venus,
    color: venusColor,
    size: { default: "26px", hover: "36px" },
  },
  {
    name: "Jorden",
    element: earth,
    color: earthColor,
    size: { default: "32px", hover: "42px" },
  },
  {
    name: "Mars",
    element: mars,
    color: marsColor,
    size: { default: "14px", hover: "24px" },
  },
  {
    name: "Jupiter",
    element: jupiter,
    color: jupiterColor,
    size: { default: "188px", hover: "198px" },
  },
  {
    name: "Saturnus",
    element: saturn,
    color: saturnColor,
    size: { default: "144px", hover: "154px" },
  },
  {
    name: "Uranus",
    element: uranus,
    color: uranusColor,
    size: { default: "66px", hover: "76px" },
  },

  {
    name: "Neptunus",
    element: neptune,
    color: neptuneColor,
    size: { default: "66px", hover: "76px" },
  },
];

//Ger skugg effekt när användaren hovrar över planeten
function applyHoverEffect(planet) {
  planet.element.addEventListener("mouseenter", function () {
    planet.element.style.width = planet.size.hover;
    planet.element.style.height = planet.size.hover;
    planet.element.style.boxShadow = `0px 0px 20px 5px ${planet.color}`;
  });

  planet.element.addEventListener("mouseleave", function () {
    planet.element.style.width = planet.size.default;
    planet.element.style.height = planet.size.default;
    planet.element.style.boxShadow = "none";
  });
}

// Lyssna på händelsen när användaren trycker på Enter i sökfältet
const searchInput = document.getElementById("search-planet");
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const searchTerm = event.target.value;
    searchPlanetEnter(searchTerm);
  }
});

//Exporterat denna klickfunktion då fetchPlanets är beroende av den.
export function addClickListenersToPlanets(body, planet) {
  planet.element.addEventListener("click", () => {
    updatePlanetCard(body);
  });
}

planets.forEach(applyHoverEffect);
fillPlanetOptions();
fetchData();
