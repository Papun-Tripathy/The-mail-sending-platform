import React from "react";
import "./SingleSentMessageContainer.css";

function SingleSentMessageContainer({
	composeType,
	status,
	time,
	content = "",
	...props
}) {
	content = content.length > 130 ? content.slice(0, 125) + "...." : content;
	return (
		<div id="MessageBox">
			<div id="SelectBoxDiv">
				<input type="checkbox" name="selectForSomethingFuture" id="SelectBox" />
			</div>
			<div id="ContentDetails">
				<div id="UpPart">
					<p id="ComposeType">{"Single Compose"}</p>
					<p id="StatusOfMessageSent">Delivered</p>
				</div>
				<div id="BottomPart">
					{content}
				</div>
			</div>
		</div>
	);
}

export default SingleSentMessageContainer;
