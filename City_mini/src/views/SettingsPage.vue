<template>
  <div id="settings">
    <h1>設定ページ</h1>

    <div class="setting-section">
      <label for="language">言語を選択：</label>
      <select id="language" v-model="selectedLanguage">
        <option value="ja">日本語</option>
        <option value="en">English</option>
      </select>
    </div>

    <div class="setting-section">
      <label for="font-size">文字の大きさ：</label>
      <input type="range" id="font-size" min="12" max="36" v-model="fontSize" />
      <span>{{ fontSize }}px</span>
    </div>

    <div class="preview" :style="{ fontSize: fontSize + 'px' }">
      <p v-if="selectedLanguage === 'ja'">
        こんにちは！これは日本語のテキストです。文字の大きさを変更してみてください。
      </p>
      <p v-if="selectedLanguage === 'en'">
        Hello! This is a text in English. Try changing the font size.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage', // 名前を複数単語にする
  data() {
    return {
      selectedLanguage: 'ja', // 初期値は日本語
      fontSize: 16,            // 初期の文字の大きさ
    };
  },
};
</script>

<style scoped>
/* スタイルが必要な場合は追加 */
#settings {
  padding: 20px;
}

.setting-section {
  margin: 15px 0;
}

label {
  font-size: 16px;
}

select,
input {
  margin-left: 10px;
  padding: 5px;
}

.preview {
  margin-top: 20px;
}

span {
  margin-left: 10px;
}
</style>
