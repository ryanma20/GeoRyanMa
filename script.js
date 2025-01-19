// 設定 Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY201b3NkOG11MG9yYTJtcWF6cmVua2xwZyJ9.MrpueCdCb70KgO23sbDwlQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ryanma30/cm63unni9006n01st54922pqa', // 或者你可以使用自定義樣式
    center: [121.570 , 25.080], // 台北
    zoom: 13,
});
// 新增一個導航控制器 可選
map.addControl(new mapboxgl.NavigationControl());
