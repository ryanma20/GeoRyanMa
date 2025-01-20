mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY201b3NkOG11MG9yYTJtcWF6cmVua2xwZyJ9.MrpueCdCb70KgO23sbDwlQ'; // 使用你提供的 Mapbox token

// 創建地圖
var map = new mapboxgl.Map({
    container: 'map', // 指定地圖容器 ID
    style: 'mapbox://styles/mapbox/dark-v10', // 使用 Mapbox 的暗色風格
    center: [121.573, 25.076], // 地圖中心位置 (內科)
    zoom: 13 // 設定縮放級別
});

// 當地圖加載完成時，添加 GeoJSON 層
map.on('load', function() {
    // 添加 GeoJSON 層 (Neihu.geojson)
    map.addSource('neihu', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson'
    });

    map.addLayer({
        id: 'neihu-layer',
        type: 'fill',
        source: 'neihu',
        layout: {},
        paint: {
            'fill-color': 'rgba(0, 255, 255, 0.5)', // 半透明藍色
            'fill-outline-color': 'rgba(0, 255, 255, 1)',
        }
    });

    // 添加點資料的 GeoJSON 層 (Rush hour.geojson)
    map.addSource('rush-hour', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson'
    });

    map.addLayer({
        id: 'rush-hour-layer',
        type: 'circle',
        source: 'rush-hour',
        paint: {
            'circle-color': 'rgba(255, 0, 0, 0.8)', // 紅色
            'circle-radius': 8,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#ffffff'
        }
    });
});

// 點擊事件顯示 Popup
map.on('click', 'rush-hour-layer', function(e) {
    var coordinates = e.lngLat;
    var name = e.features[0].properties.name || "無名稱"; // 確保名稱存在

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML('點名稱: ' + name)
        .addTo(map);
});

// 使點擊圖層外部時彈出視窗關閉
map.on('mouseleave', 'rush-hour-layer', function() {
    map.getCanvas().style.cursor = '';
});
