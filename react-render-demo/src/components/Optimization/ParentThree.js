import React, { useState } from "react"
import { MemoizedChildThree } from "./ChildThree"

export const ParentThree = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Ondiek")

	console.log("ParentThree Render")

	return (
		<div>
			<h3>Parent Three Child Three - React memo </h3>
			<button onClick={() => setName("Rabet")}>Change name</button>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<MemoizedChildThree name={name} />
		</div>
	)
}
