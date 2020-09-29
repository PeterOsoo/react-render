import React from "react"
import { ChildOne } from "./ChildOne"
import { ParentOne } from "./ParentOne"

function ParentChildOne() {
	return (
		<div>
			<ParentOne>
				<ChildOne />
			</ParentOne>
		</div>
	)
}

export default ParentChildOne
