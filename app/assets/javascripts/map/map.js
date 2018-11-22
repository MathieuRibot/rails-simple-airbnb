// Import MapBox GL
// import mapboxgl from './node_modules/mapbox-gl';


// API informations
const apiUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const apiKey = "pk.eyJ1IjoibWF0aGlldXJpYm90IiwiYSI6ImNqb2lldWlvcTAwMTIzdm8weDVuNDhtaXAifQ.GylBGry1uKEKjrAReY1B-w";

// Map display
const displayMap = (coordinates) => {
  mapboxgl.accessToken = apiKey;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: coordinates,
    zoom: 12
  });
  new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
};

// Fetch Geocoding Informations
const fetchGeo = (data) => {
  const searchPoint = data.features[0].place_name;
  const longitude = data.features[0].center[0];
  const latitude = data.features[0].center[1];
  const coordinates = [longitude, latitude];
  displayMap(coordinates);
};

// Initialize Connection
fetch(`${apiUrl}96 rue des Moines 75017 Paris.json?access_token=${apiKey}`)
  .then(response => response.json())
  .then(fetchGeo);

