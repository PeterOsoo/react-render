import React, { useState } from "react"

export const ParentOne = ({ children }) => {
	const [count, setCount] = useState(0)

	console.log("ParentOne Render")
	return (
		<div>
			<h3>Parent One Child One</h3>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			{children}
		</div>
	)
}
