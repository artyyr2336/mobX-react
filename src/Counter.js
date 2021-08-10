/* eslint-disable no-unused-expressions */
import { observer } from "mobx-react-lite"
import React from "react"
import { deleteFunc } from "./func"
import counter from "./store/counter"
import todo from "./store/todo"

export const Counter = observer(() => {
	return (
		<div className="App">
			{counter.count}
			<button onClick={() => counter.increment()}>Сложениe</button>
			<button onClick={() => counter.decrement()}>Вычитание</button>

			<div className="">
				{todo.todo.map(i => (
					<div key={i.id}>{i.name}</div>
				))}
				<button onClick={() => deleteFunc(1)}>Удаление первого элемента</button>
				<button onClick={() => todo.fetchTodos()}>Загрузить с сервера в туду</button>
			</div>
		</div>
	)
})
