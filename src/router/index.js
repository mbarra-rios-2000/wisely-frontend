import { createRouter, createWebHistory } from 'vue-router';
import TaskManagementHome from '../views/TaskManagementHome.vue';

const routes = [
    {
        path: '/',
        name: 'TaskManagementHome',
        component: TaskManagementHome
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;