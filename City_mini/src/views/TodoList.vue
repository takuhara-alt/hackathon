<template>
  <div class="todo">

    <h1>TODOリスト</h1>
    <table>
      <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">コメント</th>
        <th class="state">状態</th>
        <th class="button">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(todo, index) in todos" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ todo.comment }}</td>
        <td>{{ todo.completed ? "完了" : "未完了" }}</td>
        <td>
          <button @click="toggleState(index)">
            {{ todo.completed ? "未完了にする" : "完了にする" }}
          </button>
          <button @click="deleteTodo(index)">削除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="add-todo">
      <input v-model="newTodo" placeholder="新しいTODOを入力" />
      <button @click="addTodo">追加</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// データ定義
const todos = ref([
  { comment: '今日は洗濯物をやろう', completed: false },
  { comment: '床を今日は拭こう', completed: false },
  { comment:'データがなくならないようにしよう',completed: false },
  { comment:'趣味【家の中でできるもの】',completed:false},
  {comment:'趣味【家の外でできるもの】',completed:false},
  {comment:'体を動かす　3分以上',completed:false},
  {comment:'体を動かす　15分以上',completed:false},
  {comment:'ボランティアや地域の集会に参加する',completed:false},
  {comment:'歯磨きをする',completed:false},
  {comment:'体調チェック（定期検診や体温を測る、体重を測る等）',completed:false},
  {comment:'身だしなみを整える',completed:false},
  {comment:'1日1回外にでる',completed:false},
  {comment:'読する（毎日詩を送ってそれを声に出して読んでもらう）',completed:false},


]);

const newTodo = ref('');

// メソッド
const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ comment: newTodo.value, completed: false });
    newTodo.value = '';
  }
};

const toggleState = (index) => {
  todos.value[index].completed = !todos.value[index].completed;
};

const deleteTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<style scoped>
.todo {
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
  text-align: left;
}

.add-todo {
  margin-top: 20px;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
