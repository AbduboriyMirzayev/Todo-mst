import { types } from "mobx-state-tree";

export const TodoModel = types.model("TodoModel", {
    title: types.string,
});

export const TodoStore = types
    .model("TodoStore", {
        todos: types.array(TodoModel),
    })
    .actions((store) => ({
        getTodos() {
            return store.todos;
        },
        setTodo(title: string) {
            store.todos.push({ title });
        },
        filterTodo(title: string) {
            return store.todos.filter((item) => item.title.includes(title));
        },
    }));

export let todos: any = TodoStore.create({
    todos: [],
});
