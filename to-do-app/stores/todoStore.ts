import { defineStore } from "pinia";
import { ref } from "vue";
import type { Todo } from "~/data/todo";
import { fetchTodos } from "~/data/todo";

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        async fetchTodos() {
            try {
                this.todos = await fetchTodos();
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        }
    },
    getters: {
        completedTodos: (state) => {
            return state.todos.filter(todo => todo.completed);
        }
    }

});