import React from "react"

const ChildFour = ({ name }) => {
	const date = new Date()
	console.log("Child Four render")
	return (
		<div>
			<h3>Incorrect memo with Impure Component</h3>
			Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}:{" "}
			{date.getSeconds()}{" "}
		</div>
	)
}

export const MemoizedChildFour = React.memo(ChildFour)
