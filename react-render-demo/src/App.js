import React, { useReducer } from "react"
import "./App.css"
import { UseState } from "./components/UseState/UseState"

const App = () => {
	return (
		<div className="App">
			<h1>React Render</h1>
			<UseState />
		</div>
	)
}

export default App
