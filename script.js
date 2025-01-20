require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/TileLayer",
  "esri/geometry/Extent",
  "esri/Color"
], function(Map, MapView, GeoJSONLayer, TileLayer, Extent, Color) {

    // 建立地圖對象，使用 ArcGIS 提供的底圖
    var map = new Map({
        basemap: "streets" // ArcGIS 提供的預設街道底圖
    });

    // 設置地圖視圖
    var view = new MapView({
        container: "mapViewDiv", // 地圖容器
        map: map,
        center: [121.076, 25.573], // 地圖中心位置 (內科)
        zoom: 12 // 地圖縮放級別
    });

    // 讀取 Neihu.geojson 並將其添加為圖層
    var geojsonLayer = new GeoJSONLayer({
        url: 'https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson'
    });

    // 將 GeoJSON 圖層添加到地圖
    map.add(geojsonLayer);

});
