<template>
    <p class="task-details-items">{{ date }}</p>
</template>

<script setup>
    defineProps({
        date: String
    })
</script>

<style scoped>
.task-details-items {
    padding-left: 5%;   
    padding-right: 5%;
}
</style>