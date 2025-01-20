// 創建 Leaflet 地圖實例
var map = L.map('map').setView([25.076, 121.573], 13); // 以內科為中心，縮放級別 13

// 使用 OpenStreetMap 作為底圖
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 加載 GeoJSON 層
var geojsonLayer1 = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson", {
    onEachFeature: function (feature, layer) {
        layer.setStyle({
            fillColor: 'cyan',
            fillOpacity: 0.5,
            color: 'cyan',
            weight: 1
        });
    }
}).addTo(map);

var geojsonLayer2 = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson", {
    onEachFeature: function (feature, layer) {
        layer.setStyle({
            radius: 8,
            fillColor: 'red',
            fillOpacity: 0.8,
            color: 'white',
            weight: 1
        });

        // 設置 Popup，顯示點的名稱
        if (feature.properties.name) {
            layer.bindPopup("<strong>" + feature.properties.name + "</strong>");
        } else {
            layer.bindPopup("<strong>無名稱</strong>");
        }
    }
}).addTo(map);
