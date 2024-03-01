//Funktion för att hämta planeter till min searchlista/alternativ
import { fetchPlanets, fetchApiKey } from "./fetch.js";
import { updatePlanetCard } from "./planetCard.js";

export async function fillPlanetOptions() {
  const planetOptions = await fetchPlanets();
  const dataList = document.createElement("datalist");

  dataList.id = "planet-options";

  planetOptions.forEach((planet) => {
    const option = document.createElement("option");
    option.value = planet.name;
    dataList.appendChild(option);
  });

  const searchInput = document.getElementById("search-planet");
  searchInput.setAttribute("list", "planet-options"); // Visa datalistan när användaren klickar i sökfältet

  // Skapa ett felmeddelande-element om användaren matar fel planet.
  const errorMessage = document.createElement("span");
  errorMessage.className = "error-message";
  errorMessage.textContent = "Kunde inte hitta";

  errorMessage.style.display = "none";

  // Lägg till felmeddelandet bredvid sökfältet
  searchInput.parentNode.appendChild(errorMessage);

  // Skapar variabel timeout för funktionen nedan.
  let timeoutId;

  // Skapar en funktion där jag lägger en delay för när användaren söker på planet.
  // Vill att användaren ska hinna skriva färdigt innan felmeddelandet kommer
  searchInput.addEventListener("input", function (event) {
    clearTimeout(timeoutId); // Rensa tidigare timeout om det finns någon

    if (!event.target.value.trim()) {
      errorMessage.style.display = "none"; // Dölj felmeddelandet om sökfältet är tomt
      return; // Avsluta funktionen om sökfältet är tomt
    }

    // Skapa en timeout för att vänta lite innan vi kontrollerar inmatningen
    timeoutId = setTimeout(() => {
      const searchTerm = event.target.value.toLowerCase();
      const planetExists = planetOptions.some(
        (planet) => planet.name.toLowerCase() === searchTerm
      );
      // Visa eller dölj felmeddelandet beroende på om söktermen finns i listan
      if (!planetExists) {
        errorMessage.style.display = "inline";
      } else {
        errorMessage.style.display = "none";
      }
    }, 500);
  });
  // Dölj felmeddelandet när sökfältet är tomt
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Backspace" && this.value === "") {
      errorMessage.style.display = "none";
    }
  });

  searchInput.appendChild(dataList);
}

// Använder updatePlanetCard i funktionen för sökfältet
export async function searchPlanetEnter(searchTerm) {
  try {
    const apiKey = await fetchApiKey();
    const resp = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: { "x-zocom": apiKey },
      }
    );
    const { bodies } = await resp.json();

    // Sök efter planeten baserat på söktermen
    const foundPlanet = bodies.find(
      (planet) => planet.name.toLowerCase() === searchTerm.toLowerCase()
    );

    // Om planeten hittas, uppdatera kortet med dess information
    if (foundPlanet) {
      updatePlanetCard(foundPlanet);
    } else {
      console.log("Kunde inte hitta planeten");
    }
  } catch (error) {
    console.log(error);
  }
}
