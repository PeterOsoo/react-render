import React from "react"
import "./App.css"

import { ContextParent } from "./components/Context/ContextParent"
import { ChildA } from "./components/Context/ContextChildren"

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
			{/* <ImmutableState /> */}

			{/* <ParentFour /> */}

			<ContextParent>
				<ChildA />
			</ContextParent>
		</div>
	)
}

export default App
