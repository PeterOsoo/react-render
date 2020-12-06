import React from "react"
import "./App.css"

import { ContextParent } from "./components/Context/ContextParent"

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

			<ContextParent />
		</div>
	)
}

export default App
