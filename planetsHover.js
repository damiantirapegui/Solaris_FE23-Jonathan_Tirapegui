// Summon my plantets
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const saturn = document.getElementById("saturn");

// Colors for my planets.
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

const planets = [
  {
    element: mercury,
    color: mercuryColor,
    size: { default: "14px", hover: "20px" },
  },
  {
    element: venus,
    color: venusColor,
    size: { default: "26px", hover: "36px" },
  },
  {
    element: earth,
    color: earthColor,
    size: { default: "32px", hover: "42px" },
  },
  { element: mars, color: marsColor, size: { default: "14px", hover: "24px" } },
  {
    element: jupiter,
    color: jupiterColor,
    size: { default: "188px", hover: "198px" },
  },
  {
    element: uranus,
    color: uranusColor,
    size: { default: "66px", hover: "76px" },
  },

  {
    element: saturn,
    color: saturnColor,
    size: { default: "144px", hover: "154px" },
  },

  {
    element: neptune,
    color: neptuneColor,
    size: { default: "66px", hover: "76px" },
  },
];

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

planets.forEach(applyHoverEffect);
