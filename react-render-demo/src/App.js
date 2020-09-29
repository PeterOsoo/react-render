import React from "react"
import "./App.css"
import { UseState } from "./components/UseState/UseState"
import { UseReducer } from "./components/UseReducer/UseReducer"
import { Parent } from "./components/Parent Child/Parent"
import ParentChildOne from "./components/Optimization/ParentChildOne"
import { GrandParent } from "./components/Optimization/GrandParent"
import { ParentTwo } from "./components/Optimization/ParentTwo"
import { ParentThree } from "./components/Optimization/ParentThree"

const App = () => {
	return (
		<div className="App">
			<h1>React Render</h1>
			<UseState />
			<UseReducer />
			<Parent />
			<ParentChildOne />
			<GrandParent />
			<ParentTwo />
			<ParentThree />
		</div>
	)
}

export default App
