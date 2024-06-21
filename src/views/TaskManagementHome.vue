<template>
    <div>
        <h1>Task Management</h1>
        <TaskForm @task-added="fetchTasks" @task-updated="fetchTasks" :taskToEdit="taskToEdit" />
        <TaskList @edit-task="editTask" ref="taskList" />
    </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

export default {
    name: 'TaskManagementHome',
    components: {
        TaskForm,
        TaskList
    },
    data() {
        return {
            taskToEdit: null
        };
    },
    methods: {
        fetchTasks() {
            this.$refs.taskList.fetchTasks();
        },
        editTask(task) {
            this.taskToEdit = task;
        }
    }
};
</script>