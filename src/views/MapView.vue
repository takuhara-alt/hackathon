<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'MapView',
  mounted() {
    // 地図の初期化
    const map = L.map('map').setView([35.6895, 139.6917], 13); // 緯度, 経度, ズームレベル

    // タイルレイヤー (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // サンプルマーカー
    L.marker([35.6895, 139.6917])
        .addTo(map)
        .bindPopup('東京')
        .openPopup();
  },
};
</script>

<style scoped>
.map-container {
  height: 500px; /* 必要に応じて高さを調整 */
  width: 100%;
}
</style>
