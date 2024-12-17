import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // ルーターのインポート

//cssファイルの位置下
import './style.css'; // srcから相対パスで指定
import 'leaflet/dist/leaflet.css';

const app = createApp(App);
app.use(router);  // ルーターの使用
app.mount('#app');  // アプリケーションを #app にマウント
