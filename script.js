// 設定 Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY201b3NkOG11MG9yYTJtcWF6cmVua2xwZyJ9.MrpueCdCb70KgO23sbDwlQ';

// 建立地圖實例
const map = new mapboxgl.Map({
    container: 'map', // 目標容器元素的ID
    style: 'mapbox://styles/ryanma30/cm5ospz7s00dj01rafumq3z7f', // 使用Mapbox的樣式
    center: [121.570, 25.052], // 設定初始地圖中心經緯度
    zoom: 12 // 設定初始縮放級別
});

// 可選：新增一個導航控制器
map.addControl(new mapboxgl.NavigationControl());
