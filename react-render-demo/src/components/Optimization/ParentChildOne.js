import React from "react"
import { ChildOne } from "./ChildOne"
import { ParentOne } from "./ParentOne"

function ParentChildOne() {
	return (
		<div>
			<h3>Parent One Child One</h3>
			<ParentOne>
				<ChildOne />
			</ParentOne>
		</div>
	)
}

export default ParentChildOne
