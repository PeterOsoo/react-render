import React from "react"
import { ObjectUseState } from "./ObjectUseState"
import { ArrayUseState } from "./ArrayUseState"
import { ObjectUseReducer } from "./ObjectUseReducer"
import { ArrayUseReducer } from "./ArrayUseReducer"

const ImmutableState = () => {
	return (
		<>
			<ObjectUseState />
			<br />
			<ArrayUseState />
			<br />
			<ObjectUseReducer />
			<br />
			<ArrayUseReducer />
		</>
	)
}

export default ImmutableState
