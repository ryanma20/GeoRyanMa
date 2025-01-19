// 設定 Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY201b3NkOG11MG9yYTJtcWF6cmVua2xwZyJ9.MrpueCdCb70KgO23sbDwlQ';

// 建立地圖實例
const map = new mapboxgl.Map({
    container: 'map', // 目標容器元素的ID
    style: 'mapbox://styles/mapbox/streets-v11', // 使用的 Mapbox 樣式
    center: [121.571392, 25.078936], // 設定初始地圖中心經緯度
    zoom: 5 // 設定初始縮放級別
});

// 可選：新增一個導航控制器
map.addControl(new mapboxgl.NavigationControl());
