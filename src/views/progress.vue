<template>
  <div>
    <h1>地図表示</h1>
    <MapView />
  </div>
</template>

<script>
import MapView from '@/views/MapView.vue';
export default {
  name: 'ProgressView', // 複数単語に変更
  components: {
    MapView,
  },
};

</script>
