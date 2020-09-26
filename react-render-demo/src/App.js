import React, { useReducer } from "react"
import "./App.css"
import { UseState } from "./components/UseState/UseState"
import { UseReducer } from "./components/UseReducer/UseReducer"

const App = () => {
	return (
		<div className="App">
			<h1>React Render</h1>
			<UseState />
			<UseReducer />
		</div>
	)
}

export default App
