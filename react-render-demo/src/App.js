import React from "react"
import "./App.css"
import { UseState } from "./components/UseState/UseState"
import { UseReducer } from "./components/UseReducer/UseReducer"
import { Parent } from "./components/Parent Child/Parent"
import ParentChildOne from "./components/Optimization/ParentChildOne"
import { GrandParent } from "./components/Optimization/GrandParent"
import { ParentTwo } from "./components/Optimization/ParentTwo"
// import { ParentThree } from "./components/Optimization/ParentThree"
import { ParentThree } from "./components/IncorrectOptimization/ParentThree"
import { ObjectUseState } from "./components/Immutable State/ObjectUseState"
import { ArrayUseState } from "./components/Immutable State/ArrayUseState"
import { ObjectUseReducer } from "./components/Immutable State/ObjectUseReducer"

const App = () => {
	return (
		<div className="App">
			<h1>React Render</h1>
			{/* <UseState />
			<UseReducer />
			<Parent />
			<ParentChildOne />
			<GrandParent />
			<ParentTwo /> */}
			{/* <ParentThree /> */}
			<ObjectUseState />
			<br />
			<ArrayUseState />
			<br />

			<ObjectUseReducer />
		</div>
	)
}

export default App
