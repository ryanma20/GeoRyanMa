require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GeoJSONLayer"
], function (Map, MapView, GeoJSONLayer) {
    // Initialize the map
const map = new Map({
    basemap: "streets-navigation-vector"
});

const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [121.573, 25.076], // 設定中心點座標（內科）
    zoom: 12
});

view.when(() => {
    console.log("Map loaded successfully");
});
