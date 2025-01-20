require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GeoJSONLayer",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/Color"
], function(Map, MapView, GeoJSONLayer, SimpleFillSymbol, SimpleLineSymbol, Color) {

    // 創建地圖
    const map = new Map({
        basemap: "topo-vector" // 使用底圖
    });

    // 創建 MapView（地圖視圖）
    const view = new MapView({
        container: "mapViewDiv",
        map: map,
        center: [121.573, 25.076], // 設定中心點座標（內科）
        zoom: 13
    });

    // Helper 函數：創建圖層樣式
    function createRenderer(color) {
        return {
            type: "simple",
            symbol: new SimpleFillSymbol({
                color: new Color(color), // 填充顏色與透明度
                outline: new SimpleLineSymbol({
                    color: new Color([0, 0, 0, 0.8]), // 邊界顏色
                    width: 2
                })
            })
        };
    }

    // 創建 5 個 GeoJSONLayer
    const geojsonLayer1 = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson",
        renderer: createRenderer([255, 0, 0, 0.4]) // 紅色
    });

    const geojsonLayer2 = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson",
        renderer: createRenderer([0, 255, 0, 0.4]) // 綠色
    });

    const geojsonLayer3 = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/afternoon%20off%20peak%20time.geojson",
        renderer: createRenderer([0, 0, 255, 0.4]) // 藍色
    });

    const geojsonLayer4 = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/evening%20off%20peak%20time.geojson",
        renderer: createRenderer([255, 255, 0, 0.4]) // 黃色
    });

    const geojsonLayer5 = new GeoJSONLayer({
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/morning%20off%20peak%20time.geojson",
        renderer: createRenderer([255, 0, 255, 0.4]) // 紫色
    });

    // 添加所有圖層到地圖
    map.addMany([geojsonLayer1, geojsonLayer2, geojsonLayer3, geojsonLayer4, geojsonLayer5]);

    // 開關按鈕控制邏輯
    document.getElementById("toggleLayer1").addEventListener("click", () => {
        geojsonLayer1.visible = !geojsonLayer1.visible;
    });

    document.getElementById("toggleLayer2").addEventListener("click", () => {
        geojsonLayer2.visible = !geojsonLayer2.visible;
    });

    document.getElementById("toggleLayer3").addEventListener("click", () => {
        geojsonLayer3.visible = !geojsonLayer3.visible;
    });

    document.getElementById("toggleLayer4").addEventListener("click", () => {
        geojsonLayer4.visible = !geojsonLayer4.visible;
    });

    document.getElementById("toggleLayer5").addEventListener("click", () => {
        geojsonLayer5.visible = !geojsonLayer5.visible;
    });

});
