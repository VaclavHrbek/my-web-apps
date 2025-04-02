<script setup>
const url = ref('http://backend:3000');
const { data, error, pending } = await useFetch(url);

const todos = computed(() => data.value || []);

if (error.value) {
  console.error('Error fetching data:', error.value);
}

console.log('Data:', data.value);
</script>

<template>
  <main>
    <div>
      <h1>Todo</h1>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <ul v-else>
        <li v-for="todo in todos" :key="todo._id">
          <strong>{{ todo.title }}</strong> - 
          <span v-if="todo.completed">Completed</span>
          <span v-else>Not Completed</span>
        </li>
      </ul>
    </div>
  </main>
</template>