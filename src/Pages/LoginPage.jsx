import React, { useState, useEffect } from "react";
import Recaptcha from "react-recaptcha";
import "../CSS/LoginPage.css";

function LoginPage() {
	const [Phonenumber, setPhonenumber] = useState("");
	const [Password, setPassword] = useState("");
	const [validateRecaptcha, setValidateRecaptcha] = useState(false);
	const [validPhoneNumber, setValidPhoneNumber] = useState(false);
	const ReCaptchaKey = "6LfQpdgaAAAAAN4G1jRkgraMcjtdYTE3FEfJvu4h";


	useEffect(() => {
		const check = /^[6-9]\d{9}$/;
		if (Phonenumber.match(check)) {
			// valid phone number
		} else {
			console.log("invalid validPhoneNumber");
			//invalid phonenumber
		}
	}, [Phonenumber]);

	const Submitted = (e) => {
		if (Password.length < 6) return alert("Password can't be less the 6 digit");
		e.preventDefault();
		if (validateRecaptcha) {
			console.log("Recaptcha is true");
		} else {
			console.log("Recaptcha is false");
		}
		// all the logic and all the process to login if the recapcha is true
	};

	const verificationFromRecaptcha = () => {
		console.log("verification of recaptcha loaded ");
	};

	return (
		<div id="Login">
			<div id="LoginFormBox">
				<form id="LoginForm" onSubmit={Submitted}>
					<label htmlFor="PhoneNumber">Phone Number</label>
					<input
						type="tel"
						value={Phonenumber}
						onChange={(e) => setPhonenumber(e.target.value)}
						name="phoneNumber"
						className="InputForm"						
					/>
					<label htmlFor="Password">Password</label>
					<input
						type="password"
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						className="InputForm"
					/>
					{validPhoneNumber && validateRecaptcha ? (
						<button id="LoginFormSubmit" type="submit">
							Submit
						</button>
					) : (
						<button id="LoginFormSubmit" type="submit" disabled>
							Submit
						</button>
					)}
				</form>
			</div>
			<Recaptcha
				sitekey={ReCaptchaKey}
				render="explicit"
				verifyCallback={verificationFromRecaptcha}
				//key for reccapcha
				onloadCallback={() =>
					console.log("hello there recaptcha box loaded sucessfully")
				}
			/>
		</div>
	);
}

export default LoginPage;
