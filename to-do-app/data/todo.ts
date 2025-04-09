export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export async function fetchTodos(): Promise<Todo[]> {
    const response = await fetch('http://backend:3000/');
    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }
    return response.json();
}