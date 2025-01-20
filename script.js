// 創建 Leaflet 地圖實例
var map = L.map('map').setView([25.076, 121.573], 13); // 以內科為中心，縮放級別 13

// Mapbox Vector Tile URL
var vectorTileLayer = L.vectorGrid.protobuf('https://api.mapbox.com/v4/mapbox.street-v11/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY202NHF4YzhlMWozbTJsc2ZocTY5Zml6ciJ9.itSMR7rZYezOyC9Mu8Qpcg', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// 使用 Mapbox Style （可選）
var mapboxStyle = {
    "version": 8,
    "sources": {
        "mapbox": {
            "type": "vector",
            "url": "mapbox://mapbox.street-v11"
        }
    },
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "#ffffff"
            }
        }
    ]
};

// Mapbox 用戶自定義樣式（可選）
L.mapbox.styleLayer(mapboxStyle).addTo(map);

// 顯示 GeoJSON 層 1 (Neihu.geojson)
fetch('https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function (feature) {
                return {
                    color: "cyan",
                    weight: 2,
                    opacity: 0.7
                };
            }
        }).addTo(map);
    })
    .catch(error => console.error('載入 Neihu.geojson 失敗:', error));

// 顯示 GeoJSON 層 2 (Rush hour.geojson)
fetch('https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: "red",
                    color: "white",
                    weight: 1,
                    opacity: 0.8,
                    fillOpacity: 0.6
                });
            },
            onEachFeature: function (feature, layer) {
                // 綁定點的屬性名稱為 popup 內容
                if (feature.properties && feature.properties.name) {
                    layer.bindPopup(feature.properties.name);
                }

                // 添加點擊事件顯示 `name` 欄位的資訊
                layer.on('click', function () {
                    var name = feature.properties.name || "無名稱"; // 如果沒有名稱顯示 "無名稱"
                    alert("點的名稱: " + name); // 顯示彈窗
                });
            }
        }).addTo(map);
    })
    .catch(error => console.error('載入 Rush hour.geojson 失敗:', error));
