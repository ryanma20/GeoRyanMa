mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY201b3NkOG11MG9yYTJtcWF6cmVua2xwZyJ9.MrpueCdCb70KgO23sbDwlQ';

// 初始化地圖
var map = new mapboxgl.Map({
    container: 'mapViewDiv', // 地圖容器
    style: 'mapbox://styles/mapbox/streets-v11', // 使用 Mapbox 提供的樣式
    center: [121.076, 25.573], // 地圖中心位置 (內科)
    zoom: 12 // 地圖縮放級別
});

// 加載 Neihu.geojson 圖層
map.on('load', function () {
    map.addSource('neihu', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson' // Neihu.geojson 來源
    });

    // 以面資料（填充顏色）顯示 Neihu 圖層
    map.addLayer({
        id: 'neihu-layer',
        type: 'fill',
        source: 'neihu',
        paint: {
            'fill-color': '#0080ff', // 填充顏色
            'fill-opacity': 0.5 // 透明度
        }
    });

    // 可選：添加圖例
    var legend = document.createElement('div');
    legend.innerHTML = "<strong>Neihu Area</strong>";
    document.body.appendChild(legend);
});
