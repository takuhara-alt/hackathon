<template>
  <div>
    <h1>世界🗺️</h1>
    <MapView />
  </div>
</template>

<script>
import MapView from '@/components/MapView.vue';
export default {
  name: 'ProgressView', // 複数単語に変更
  components: {
    MapView,
  },
};

</script>
