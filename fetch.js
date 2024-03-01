import { addClickListenersToPlanets, planets } from "./index.js";

// **********************I DEN HÄR FILEN HAR VI MIN BOILER FÖR ATT HÄMTA PLANETER FRÅN EN SERVER OCH API NYCKEL**************************************
// min nyckel med metoden POST.
export async function fetchApiKey() {
  try {
    const resp = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
      }
    );
    const { key } = await resp.json();
    return key;
  } catch (error) {
    console.log(error);
  }
}
// Hämtar planeterna och deras information i denna async funktionen.
export async function fetchData() {
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
    // Loopa igenom alla planeter för att kunna sortera dem i updatePlanet funktionen
    for (let i = 0; i < bodies.length; i++) {
      addClickListenersToPlanets(bodies[i], planets[i]);
    }
  } catch (error) {
    console.log(error);
  }
}

// Fetch för att hämta planeterna med en inbyggd api- nyckel
export async function fetchPlanets() {
  try {
    const resp = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-zocom": await fetchApiKey(),
        },
      }
    );
    const { bodies } = await resp.json();
    console.log(bodies);
    return bodies;
  } catch (error) {
    console.log("Error fetching planets:", error);
    return [];
  }
}
