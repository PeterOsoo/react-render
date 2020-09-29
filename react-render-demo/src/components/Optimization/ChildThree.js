import React from "react"

export const ChildThree = ({ name }) => {
	console.log("ChildThree Render")
	return <div>ChildThree component - {name}</div>
}

export const MemoizedChildThree = React.memo(ChildThree)
