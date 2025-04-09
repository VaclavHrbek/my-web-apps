<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>
              <h2 class="text-h5">To-Do App</h2>
            </v-card-title>
            <v-card-text>
              <v-text-field label="Add a new task" outlined></v-text-field>
              <v-btn color="primary" class="mt-3">Add Task</v-btn>
              <div v-if="todos.length" class="mt-4">
                <h3 class="text-h6">Tasks:</h3>
                <ul>
                  <li v-for="(task, index) in todos" :key="index">{{ task }}</li>
                </ul>
              </div>
              <div v-if="!todos.length" class="mt-4">
                <h3 class="text-h6">No tasks available</h3>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { useTodoStore } from '~/stores/todoStore';
import { onMounted, computed } from 'vue';

const todoStore = useTodoStore();
await todoStore.fetchTodos();

// Reactive todos for the template
const todos = computed(() => todoStore.todos);
</script>

