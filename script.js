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
                color: [255,0, 0, 0.8], // 紅色
                size: 8,
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            }
        }
    });

    // 設置 PopupTemplate 用來顯示點資料的名稱，標題使用點的 name 欄位
    geojsonLayer2.popupTemplate = {
        title: "{name}", // 使用 {name} 顯示每個點的名稱
        content: function(graphic) {
            var name = graphic.attributes.name || "無名稱"; // 確保名稱存在
            console.log("點的屬性:", graphic.attributes); // 檢查屬性
            return "點名稱: " + name;
        }
    };

    // 當點擊點資料時顯示名稱
    view.on("click", function(event) {
        view.hitTest(event).then(function(response) {
            if (response.results.length > 0) {
                var graphic = response.results[0].graphic;
                if (graphic.layer === geojsonLayer2) {
                    var name = graphic.attributes.name; // 獲取該點的名稱

                    // 顯示 popup
                    if (name) {
                        view.popup.open({
                            title: name, // 使用點的名稱作為標題
                            content: "點名稱: " + name, // 顯示點名稱
                            location: event.mapPoint, // 使彈出窗口在點上顯示
                            dockOptions: {
                                buttonEnabled: false,
                                position: "top-right" // 彈出視窗顯示在點的右側
                            }
                        });
                    } else {
                        view.popup.open({
                            title: "無名稱", // 如果沒有 "name" 屬性，顯示 "無名稱"
                            content: "此點沒有名稱", // 顯示提示信息
                            location: event.mapPoint, // 使彈出窗口在點上顯示
                            dockOptions: {
                                buttonEnabled: false,
                                position: "top-right" // 彈出視窗顯示在點的右側
                            }
                        });
                    }
                }
            } else {
                view.popup.close(); // 如果沒有點擊到任何資料，則關閉彈出視窗
            }
        });
    });

    // 將兩個 GeoJSONLayer 添加到地圖
    map.addMany([geojsonLayer1, geojsonLayer2]);

});
