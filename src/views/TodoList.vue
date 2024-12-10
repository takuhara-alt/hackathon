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
  { comment: '床を今日は拭こう', completed: true },
  { comment:'データがなくならないようにしよう',completed: false },
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
