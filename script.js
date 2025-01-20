require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GeoJSONLayer",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/Color"
], function(Map, MapView, GeoJSONLayer, SimpleFillSymbol, SimpleLineSymbol, Color) {
    // Initialize the map
const map = new Map({
    basemap: "streets-navigation-vector"
});

const view = new MapView({
    container: "mapViewDiv",
    map: map,
    center: [121.573, 25.076], // 設定中心點座標（內科）
    zoom: 12
});

view.when(() => {
    console.log("Map loaded successfully");
});
