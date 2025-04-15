<template>
    <p class="project">{{ project }}</p>
</template>

<script setup>
    defineProps({
        project: String
    })
</script>

<style scoped>
.project {
    padding-left: 5%;   
    padding-right: 5%;
}
</style>