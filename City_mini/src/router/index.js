import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/SettingsPage.vue';
import TodoList from '../views/TodoList.vue';  // 追加: ToDoListコンポーネントをインポート
import Progress from '@/views/Progress.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/Progress',
        name:'Progress',
        component:Progress,

    },
    {
        path: '/todo',
        name: 'todolist',
        component: TodoList,
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
