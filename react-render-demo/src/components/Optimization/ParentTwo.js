import React, { useState } from "react"
import { ChildTwo } from "./ChildTwo"

export const ParentTwo = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Ondiek")

	console.log("ParentTwo Render")

	return (
		<div>
			<h3>Parent Two Child Two - without React memo</h3>
			<button onClick={() => setName("Rabet")}>Change name</button>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<ChildTwo name={name} />
		</div>
	)
}
