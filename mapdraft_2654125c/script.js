mapboxgl.accessToken =
  "pk.eyJ1IjoidWVpbyIsImEiOiJjbGNwNzg5bngyM3hzM3ZtdG93MHVtaTQxIn0.jFqh8l4H4b_4CZ8yvoA6AA";
const beforeMap = new mapboxgl.Map({
  container: "before",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/ueio/cldfur2z3003d01rvqkntblp9",
  center: [-0.12932, 51.511441],
  zoom: 12
});

const afterMap = new mapboxgl.Map({
  container: "after",
  style: "mapbox://styles/ueio/cldf0y22l000h01nyi76xy116",
  center: [-0.12932, 51.511441],
  zoom: 12
});

// A selector or reference to HTML element
const container = "#comparison-container";
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {});

const CAZ19 = "mapbox://styles/ueio/cldfwm5sg000i01phu7ugx0tf";
const pubs = "mapbox://styles/ueio/cldf0y22l000h01nyi76xy116";

const mapmenu = new mapboxgl.Map({
  container: "mapmenu", // container ID
  style: CAZ19,
  center: [-0.12932, 51.511441],
  zoom: 12
});

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "caz19") {
      map.setStyle(caz19);
    }
    if (layer.target.id == "PUBS") {
      map.setStyle(pubs);
    }
  };
}