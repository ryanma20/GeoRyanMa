// 設置 Mapbox 地圖
mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY201b3NkOG11MG9yYTJtcWF6cmVua2xwZyJ9.MrpueCdCb70KgO23sbDwlQ';

const map = new mapboxgl.Map({
    container: 'mapViewDiv', // 地圖容器 ID
    style: 'mapbox://styles/mapbox/streets-v11', // Mapbox 的預設地圖樣式
    center: [121.573, 25.076], // 設定中心點座標（內科）
    zoom: 13 // 預設縮放級別
});

// Helper 函數：創建 GeoJSON 圖層樣式
function createLayer(color) {
    return {
        'type': 'fill',
        'paint': {
            'fill-color': color, // 填充顏色與透明度
            'fill-opacity': 0.4 // 透明度
        }
    };
}

// 添加 GeoJSON 圖層
const geojsonLayers = [
    {
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Neihu.geojson",
        color: 'rgba(255, 0, 0, 0.4)', // 紅色
        name: "Neihu"
    },
    {
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/Rush%20hour.geojson",
        color: 'rgba(0, 255, 0, 0.4)', // 綠色
        name: "Rush hour"
    },
    {
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/afternoon%20off%20peak%20time.geojson",
        color: 'rgba(0, 0, 255, 0.4)', // 藍色
        name: "Afternoon off peak time"
    },
    {
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/evening%20off%20peak%20time.geojson",
        color: 'rgba(255, 255, 0, 0.4)', // 黃色
        name: "Evening off peak time"
    },
    {
        url: "https://raw.githubusercontent.com/ryanma20/GeoRyanMa/refs/heads/main/Geojsonfiles/morning%20off%20peak%20time.geojson",
        color: 'rgba(255, 0, 255, 0.4)', // 紫色
        name: "Morning off peak time"
    }
];

// 加載每個 GeoJSON 圖層到 Mapbox 地圖
geojsonLayers.forEach(layer => {
    map.on('load', function() {
        map.addSource(layer.name, {
            'type': 'geojson',
            'data': layer.url
        });

        map.addLayer({
            'id': layer.name,
            'type': 'fill',
            'source': layer.name,
            'paint': {
                'fill-color': layer.color,
                'fill-opacity': 0.4
            }
        });
    });
});
