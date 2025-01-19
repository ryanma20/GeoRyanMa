require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GeoJSONLayer"
], function(Map, MapView, GeoJSONLayer) {
    
    // 創建 ArcGIS 地圖
    var map = new Map({
        basemap: "topo-vector" // 使用底圖
    });

    // 創建 MapView
    var view = new MapView({
        container: "mapViewDiv",
        map: map,
        center: [121.5645, 25.0330], // 台北
        zoom: 13
    });

    // GeoJSONLayer 用來顯示 GeoJSON 數據
    var geojsonLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/fceaf56468533af1737f2b8a3e60f222dd6269bc/Neihui.geojson"
    });

    // 將 GeoJSONLayer 添加到地圖
    map.addLayer(geojsonLayer);
});
