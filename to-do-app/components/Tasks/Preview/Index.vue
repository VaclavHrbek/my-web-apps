<template>
    <div class="task-preview">  
        <div class="task-header">
            <p>{{ task.name }} </p>
        </div>
        <div class="task-details">
            <TasksPreviewDate :date="task.date"/>
            <TasksPreviewProject :project="task.project"/>
            <TasksPreviewStatus :status="task.status"/>
        </div>
    </div>
    <hr class="task-divider">
    <button @click="toogle_modal">Show modal</button>
    <div v-if="show_modal">
        <TasksPreviewModal @close-modal="close_modal" />
    </div>
</template>

<script setup>
    const task = {
        id: 1,
        name: 'Task 123',
        date: '2023-10-01-232',
        project: 'Project 1',
        status: 'In Progress'
    }
    defineEmits(['closeModal']);
    const show_modal = ref(false);
    const toogle_modal = () => {
        show_modal.value = !show_modal.value;
    }
    const close_modal = () => {
        show_modal.value = false;
    }

</script>

<style scoped>
.task-preview {
    background-color: lightyellow;
    display: flex;
    flex-direction: column;
    height: 60px;
}
.task-header {
    display: flex;
    height: 20px;
    /* border: 1px solid black; */
    align-items: center;
    padding-left: 5%;   
    padding-right: 5%;
    margin-top: auto;
    margin-bottom: auto;   
}
.task-details {
    display: flex;
    justify-content: space-between;
    height: 20px;
    /* border: 1px solid black; */
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
}
.task-divider {
    border: 1px solid black;
    margin-top: 10px;
    margin-bottom: auto;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    background-color: black;
    height: 1px;
    border-radius: 5px; 
    border-radius: 30%;
}
</style>