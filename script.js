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

    // 創建 GeoJSONLayer（簡單的資料來源）
    var geojsonLayer = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson", // 簡化為一個 GeoJSON
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill", // 填充符號
                color: [0, 255, 255, 0.5], // 半透明藍色
                outline: {
                    color: [0, 255, 255, 1],
                    width: 1
                }
            }
        }
    });

    // 將 GeoJSONLayer 添加到地圖
    map.add(geojsonLayer);
});
