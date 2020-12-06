import React, { useState, useMemo } from "react"
import { MemoizedChildFive } from "./ChildFive"

export const ParentFour = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Rateng")

	const person = {
		fname: "Bruce",
		lname: "Wayne",
	}

	// use Memo fix object rerenders 
	const memoizedPerson = useMemo(() => person, [])

	const handleClick = () => {}

	console.log("ParentFour Render")
	return (
		<div>
			<button onClick={() => setName("Ondiek")}>Change name</button>
			<button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
			<MemoizedChildFive name={name} person={memoizedPerson} />
			{/* <MemoizedChildFive name={name} handleClick={handleClick} /> */}
		</div>
	)
}
