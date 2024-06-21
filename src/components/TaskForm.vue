<template>
    <div>
        <h2>{{ isEditing ? 'Edit Task' : 'Add Task' }}</h2>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="task.title" placeholder="Title" required />
            <input type="text" v-model="task.description" placeholder="Description" required />
            <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        taskToEdit: Object
    },
    data() {
        return {
            task: {
                title: '',
                description: '',
                status: false
            },
            isEditing: false
        };
    },
    watch: {
        taskToEdit(newTask) {
            if (newTask) {
                this.task = { ...newTask };
                this.isEditing = true;
            }
        }
    },
    methods: {
        submitForm() {
            if (this.isEditing) {
                axios.put(`http://localhost:3000/tasks/${this.task.id}`, this.task)
                    .then(() => {
                        this.$emit('task-updated');
                        this.resetForm();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                axios.post('http://localhost:3000/tasks', this.task)
                    .then(() => {
                        this.$emit('task-added');
                        this.resetForm();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
        resetForm() {
            this.task = { title: '', description: '', status: false };
            this.isEditing = false;
        }
    }
};
</script>