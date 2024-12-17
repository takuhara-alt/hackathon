<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'MapView',
  mounted() {
    // 知床国立公園の中心座標とズームレベル
    const latitude = 44.3399; // 北緯
    const longitude = 145.3294; // 東経
    const zoomLevel = 15; // ズームレベル (詳細表示)

    const map = L.map('map').setView([latitude, longitude], zoomLevel);

    // タイルレイヤーを追加 (OpenStreetMapのデータを使用)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
  },
};
</script>

<style scoped>
.map-container {
  height: 500px;
  width: 100%;
}
</style>
