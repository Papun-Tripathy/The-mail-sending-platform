import React, { createRef, useState } from "react";
import Head from "./Head";
import "../CSS/HomePage.css";
import Modal from "react-modal";
import Button from "./Components/Button";

Modal.setAppElement("#root");

function HomePage() {
	const [ModalView, setModalView] = useState(false);
	const sideBarRef = createRef();

	let theModalStyle = {
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(2, 2, 2, 0.75)",
			zIndex: 5,
		},
		content: {
			position: "absolute",
			top: "90px",
			left: "10px",
			// right: '40px',
			// bottom: '40px',
			border: "1px solid #ccc",
			background: "transparent",
			overflow: "auto",
			WebkitOverflowScrolling: "touch",
			borderRadius: "14px",
			outline: "none",
			padding: "10px",
			zIndex: 5,
            height: 'fit-content'
		},
	};

	React.useEffect(() => {
		console.log(sideBarRef);
        theModalStyle.content['width'] = sideBarRef.current.offsetWidth - 20 ;
	});

	return (
		<div id="HomePage">
			<Head stickyHead={true} />
			<section id="BodyContent">
				<div id="LeftSideActionBar" ref={sideBarRef}>
					<button
						onClick={() => {
							setModalView(true);
						}}
						id="SideTopComposeButton"
					>
						<b>+</b>
						COMPOSE
					</button>
					<Modal
						isOpen={ModalView}
						style={theModalStyle}
						onRequestClose={() => {
							setModalView(false);
						}}
					>
						<Button title="SingleCompose" backColor="orange" />
						<Button title="GroupCompose" backColor="orange" />
						<Button title="CustomCompose" backColor="orange" />
					</Modal>
				</div>
				<div id="ContentBody">
					{/* the different type of messages are sent are to be shown here */}
				</div>
			</section>
		</div>
	);
}

export default HomePage;
