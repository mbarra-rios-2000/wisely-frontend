<template>
    <div>
        <h2>Task List</h2>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.title }} - {{ task.description }}
                <button @click="editTask(task)">Edit</button>
                <button @click="deleteTask(task.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tasks: []
        };
    },
    created() {
        this.fetchTasks();
    },
    methods: {
        fetchTasks() {
            axios.get('http://localhost:3000/tasks')
                .then(response => {
                    this.tasks = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        deleteTask(id) {
            axios.delete(`http://localhost:3000/tasks/${id}`)
                .then(() => {
                    this.fetchTasks();
                })
                .catch(error => {
                    console.error(error);
                });
        },
        editTask(task) {
            this.$emit('edit-task', task);
        }
    }
};
</script>