import todo from "./store/todo"

export const deleteFunc = id => {
	todo.removeTodo(id)
}
