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
      var geojsonLayer1 = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson",
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

    // 創建點資料的 GeoJSONLayer (Rush hour.geojson)
    var geojsonLayer2 = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson",
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-marker", // 簡單點符號
                style: "circle",
                color: [255, 0, 0, 0.8], // 紅色
                size: 8,
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            }
        }
    });

    // 將兩個 GeoJSONLayer 添加到地圖
    map.addMany([geojsonLayer1, geojsonLayer2]);

    // 為每個圖層添加加載成功/失敗的日誌
    geojsonLayer1.when(() => {
        console.log("面資料 GeoJSONLayer 加載成功");
    }).catch((error) => {
        console.error("面資料 GeoJSONLayer 加載失敗:", error);
    });

    geojsonLayer2.when(() => {
        console.log("點資料 GeoJSONLayer 加載成功");
    }).catch((error) => {
        console.error("點資料 GeoJSONLayer 加載失敗:", error);
    });

    // 調整視圖範圍以顯示所有資料
    Promise.all([
        geojsonLayer1.when(),
        geojsonLayer2.when()
    ]).then(function() {
        view.goTo({
            target: [geojsonLayer1.fullExtent, geojsonLayer2.fullExtent],
            padding: 50
        }).catch(function(error) {
            console.error("無法調整視圖範圍:", error);
        });
    }).catch(function(error) {
        console.error("至少一個 GeoJSON 加載失敗:", error);
    });

});
