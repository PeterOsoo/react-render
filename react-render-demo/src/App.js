import React from "react"
import "./App.css"
import { UseState } from "./components/UseState/UseState"
import { UseReducer } from "./components/UseReducer/UseReducer"
import { Parent } from "./components/Parent Child/Parent"
import ParentChildOne from "./components/Optimization/ParentChildOne"
import { GrandParent } from "./components/Optimization/GrandParent"

const App = () => {
	return (
		<div className="App">
			<h1>React Render</h1>
			<UseState />
			<UseReducer />
			<Parent />
			<ParentChildOne />
			<GrandParent />
		</div>
	)
}

export default App
