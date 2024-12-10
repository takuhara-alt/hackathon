<template>
  <div id="app">
    <!-- タイトル -->
    <header class="app-header">
      <h1>日常生活アプリ</h1>
    </header>

    <!-- ナビゲーション -->
    <nav class="app-nav">
      <ul>
        <li><router-link to="/Home">ホーム</router-link></li>
        <li><router-link to="/todo">ToDoリスト</router-link></li>
        <li><router-link to="/settings">設定</router-link></li>
        <li><router-link to="/Progress">マップ</router-link></li>
      </ul>
    </nav>

    <!-- メインコンテンツ -->
    <main class="app-main">
      <router-view></router-view>
    </main>

    <!-- フッター -->
    <footer class="app-footer">
      <p>今日の日付: {{ currentDate }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: "", // 現在の日付
    };
  },
  created() {
    // 現在の日付をフォーマットして取得
    const date = new Date();
    this.currentDate = date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  },
};
</script>