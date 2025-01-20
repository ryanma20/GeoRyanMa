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

    // GeoJSON 圖層（不再使用按鈕，直接顯示於地圖）
    const geojsonLayers = [
        {
            layer: new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson",
                renderer: createRenderer([255, 0, 0, 0.4]) // 紅色
            }),
            label: "Neihu"
        },
        {
            layer: new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson",
                renderer: createRenderer([0, 255, 0, 0.4]) // 綠色
            }),
            label: "Rush hour"
        },
        {
            layer: new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/afternoon%20off%20peak%20time.geojson",
                renderer: createRenderer([0, 0, 255, 0.4]) // 藍色
            }),
            label: "Afternoon off peak time"
        },
        {
            layer: new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/evening%20off%20peak%20time.geojson",
                renderer: createRenderer([255, 255, 0, 0.4]) // 黃色
            }),
            label: "Evening off peak time"
        },
        {
            layer: new GeoJSONLayer({
                url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/morning%20off%20peak%20time.geojson",
                renderer: createRenderer([255, 0, 255, 0.4]) // 紫色
            }),
            label: "Morning off peak time"
        }
    ];

    // 添加所有圖層到地圖
    geojsonLayers.forEach(({ layer }) => {
        map.add(layer);
    });

});
