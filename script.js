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

    // Add Neihu layer (always visible, no button)
    const neihuLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson",
        title: "Neihu",
        visible: true // Always visible
    });

    // Define other layers
    const rushHourLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson",
        title: "Rush Hour",
        visible: false
    });

    const morningOffPeakLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/morning%20off%20peak%20time.geojson",
        title: "Morning Off Peak",
        visible: false
    });

    const afternoonOffPeakLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/afternoon%20off%20peak%20time.geojson",
        title: "Afternoon Off Peak",
        visible: false
    });

    const eveningOffPeakLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/evening%20off%20peak%20time.geojson",
        title: "Evening Off Peak",
        visible: false
    });

    // Add layers to the map
    map.addMany([neihuLayer, rushHourLayer, morningOffPeakLayer, afternoonOffPeakLayer, eveningOffPeakLayer]);

    // Layer toggle buttons
    document.getElementById("rushHourBtn").addEventListener("click", () => {
        rushHourLayer.visible = !rushHourLayer.visible;
    });

    document.getElementById("morningOffBtn").addEventListener("click", () => {
        morningOffPeakLayer.visible = !morningOffPeakLayer.visible;
    });

    document.getElementById("afternoonOffBtn").addEventListener("click", () => {
        afternoonOffPeakLayer.visible = !afternoonOffPeakLayer.visible;
    });

    document.getElementById("eveningOffBtn").addEventListener("click", () => {
        eveningOffPeakLayer.visible = !eveningOffPeakLayer.visible;
    });
});
