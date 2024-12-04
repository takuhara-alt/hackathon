import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/SettingsPage.vue';
import TodoList from '../views/TodoList.vue';  // 追加: ToDoListコンポーネントをインポート

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/todo',
        name: 'todolist',
        component: TodoList, // 修正: ToDoList がインポートされていることを確認
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
