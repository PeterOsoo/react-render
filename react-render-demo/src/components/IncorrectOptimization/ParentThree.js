import React, { useState } from "react"
import { MemoizedChildThree } from "./ChildThree"
import { MemoizedChildFour } from "./ChildFour"

export const ParentThree = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Ondiek")

	console.log("ParentThree Render")

	return (
		<div>
			{/* <h3>Incorrect memo with children </h3> */}
			<button onClick={() => setName("Rabet")}>Change name</button>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			{/* <MemoizedChildThree name={name}>
				<strong>Hello</strong>
			</MemoizedChildThree> */}

			<MemoizedChildFour name={name} />
		</div>
	)
}
