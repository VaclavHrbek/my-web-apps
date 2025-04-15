<template>
    <p class="task-details-items">{{ status }}</p>
</template>

<script setup>
    defineProps({
        status: String
    })
</script>

<style scoped>
.task-details-items {
    padding-left: 5%;   
    padding-right: 5%;
}
</style>