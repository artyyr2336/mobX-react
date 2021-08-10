import { makeAutoObservable } from "mobx"

class TodoList {
	todo = [
		{ id: 1, name: "Первый" },
		{ id: 2, name: "Второй" },
		{ id: 3, name: "Третий" },
	]
	constructor() {
		makeAutoObservable(this)
	}

	addToDo(item) {
		this.todo.push(item)
	}

	removeTodo(id) {
		this.todo = this.todo.filter(t => t.id !== id)
	}

	fetchTodos() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(json => {
				this.todo = [...json]
			})
	}
}

export default new TodoList()
