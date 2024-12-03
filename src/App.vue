<template>
  <div id="app">
    <!-- タイトル -->


<!--設定ページ-->
    <ul class="list-grope">
      <li class="list-grope-li"><router-link to="/Home">Home</router-link></li>
      <li class="list-grope-li"><router-link to="/about">About</router-link></li>
      <li class="list-grope-li"><router-link to="/settings">Setting</router-link></li>
    </ul>
  </div>
</template>

<script>
import './style.css'; // 相対パスでCSSを指定
export default {
  data() {
    return {
      newItem: "",           // 入力中のアイテム
      todos: [],             // ToDoリストのアイテム
      selectedLanguage: "ja", // 初期値は日本語
      fontSize: 16,           // 初期の文字の大きさ
      currentDate: "",        // 現在の日付
    };
  },
  created() {
    // 現在の日付を取得してフォーマット
    const date = new Date();
    this.currentDate = date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  },
  methods: {
    addItem() {
      // 入力が空でない場合にアイテムを追加
      if (this.newItem.trim() !== "") {
        this.todos.push(this.newItem.trim()); // アイテムをリストに追加
        this.newItem = ""; // 入力欄をクリア
      }
    },
    removeItem(index) {
      // 指定されたインデックスのアイテムを削除
      this.todos.splice(index, 1);
    }
  },
};
</script>