<template>
    <div class="task-preview">  
        <div class="task-header">
            <p>Task 1</p>
        </div>
        <div class="task-details">
            <TasksPreviewDate />
            <TasksPreviewStatus />
        </div>
    </div>
</template>

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
</style>