require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/TileLayer"
], function(Map, MapView, TileLayer) {
    
    // 創建 ArcGIS 地圖
    var map = new Map({
        basemap: "topo-vector" // 這裡你可以選擇其他內建的 ArcGIS 地圖樣式
    });

    // 創建 MapView，將地圖放入指定的容器
    var view = new MapView({
        container: "mapViewDiv",
        map: map,
        center: [121.5645, 25.0330], // 這裡的座標設為台北
        zoom: 13
    });

    // 使用 ArcGIS 提供的瓦片圖層（TileLayer），這裡可以使用 ArcGIS Online 的免費瓦片服務
    var tileLayer = new TileLayer({
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer" // 這是 ArcGIS Online 的影像瓦片服務
    });

    // 將圖層添加到地圖
    map.addLayer(tileLayer);
});
