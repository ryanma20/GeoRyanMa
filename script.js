require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GeoJSONLayer"
], function(Map, MapView, GeoJSONLayer) {

    // 創建地圖
    var map = new Map({
        basemap: "dark-gray" // 使用底圖
    });

    // 創建 MapView（地圖視圖）
    var view = new MapView({
        container: "mapViewDiv", // 指定地圖容器 ID
        map: map,
        center: [121.573, 25.076], // 地圖中心位置 (內科)
        zoom: 13 // 設定縮放級別
    });

    // 創建 GeoJSONLayer
    var geojsonLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson"
    });

    // 加入 GeoJSONLayer 到地圖
    map.add(geojsonLayer);

    // 當 GeoJSON 加載完成時，調整視圖範圍
    geojsonLayer.on("load", function() {
        view.goTo({
            target: geojsonLayer.fullExtent
        });
    });

});
