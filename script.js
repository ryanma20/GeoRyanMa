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
        url: "https://github.com/ryanma20/GeoRyanMa/blob/cd84c783c482f6711320a7513f973bbe389c474d/Neihu.geojson"
    });

    // 將 GeoJSONLayer 添加到地圖
    map.addLayer(geojsonLayer);
});
