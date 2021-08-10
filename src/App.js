import "./App.css"
import { Counter } from "./Counter"
import counter from "./store/counter"

function App() {
	console.log("count1", counter)
	return <Counter />
}

export default App
