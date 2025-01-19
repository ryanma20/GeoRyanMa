require([
    "esri/Map",
    "esri/views/MapView",
    "esri/WebMap"
], function(Map, MapView, WebMap) {
    var webMap = new WebMap({
        portalItem: { id: "ab90c3925fcb42378e4d23fff2eaee26" } // 替換為你的 Web Map ID
    });

    var view = new MapView({
        container: "mapViewDiv",
        map: webMap
    });
});
